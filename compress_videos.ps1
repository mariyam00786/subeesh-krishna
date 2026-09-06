$ffmpeg = "C:\Users\JAMSHEER\Desktop\subeesh\ffmpeg\ffmpeg-master-latest-win64-gpl\bin\ffmpeg.exe"
$worksDir = "C:\Users\JAMSHEER\Desktop\subeesh\public\works"
$videos = Get-ChildItem -Path $worksDir -Recurse -Filter *.mp4

foreach ($video in $videos) {
    $tempFile = $video.FullName + ".tmp.mp4"
    Write-Host "Compressing $($video.Name)..."
    
    # Scale to max 720p height, crf 28, fast preset to speed up
    $p = Start-Process -FilePath $ffmpeg -ArgumentList "-y", "-i", "`"$($video.FullName)`"", "-vcodec", "libx264", "-crf", "28", "-preset", "veryfast", "-vf", "scale=-2:720", "-acodec", "aac", "-b:a", "128k", "`"$tempFile`"" -NoNewWindow -Wait -PassThru
    
    if ($p.ExitCode -eq 0) {
        Remove-Item -Path $video.FullName -Force
        Rename-Item -Path $tempFile -NewName $video.Name -Force
        Write-Host "Successfully compressed $($video.Name)"
    } else {
        Write-Host "Failed to compress $($video.Name)"
        if (Test-Path $tempFile) {
            Remove-Item -Path $tempFile -Force
        }
    }
}
Write-Host "All videos compressed!"
