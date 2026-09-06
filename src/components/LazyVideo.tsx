"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
  aspectRatioClass?: string;
}

export default function LazyVideo({
  src,
  className = "",
  poster,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                // Auto-play was prevented (browser low-power mode or policy)
              });
            }
          } else {
            // Pause video when out of viewport to free CPU/GPU resources
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        rootMargin: "500px 0px 500px 0px", // Preload smoothly before it scrolls into view
        threshold: 0.05,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute("src");
        videoRef.current.load();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-[#0A0A0A]">
      {/* Shimmer Placeholder while video buffers / prepares */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.06] to-white/[0.02] animate-pulse transition-opacity duration-700 pointer-events-none ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />

      <video
        ref={videoRef}
        src={isInView ? src : undefined}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
