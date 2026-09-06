export interface ProjectItem {
  id: string;
  brand: string;
  category: string;
  image?: string;
  videoUrl?: string;
  description?: string;
  type?: "associated" | "personal";
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconType: 'camera' | 'edit' | 'workflow' | 'direction';
}

export interface BtsItem {
  id: string;
  image: string;
  alt: string;
}

export interface ContactInfo {
  heading: string;
  subtitle: string;
  email: string;
  phone: string;
  displayPhone: string;
  instagramUrl: string;
  vimeoUrl: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  copyrightYear: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "SUBEESH KRISHNA",
    shortName: "SUBEESH KRISHNA",
    role: "CINEMATOGRAPHER / VIDEO EDITOR / DIRECTOR",
    experienceYears: "5",
    brandsWorked: "100+",
    heroIntro: [
      "Cinematographer, video editor, and director with 5 years of experience.",
      "Involved across 100+ brands in commercials, brand films, and social content.",
      "Comfortable moving between creative vision and technical execution on set.",
      "From shoot to final delivery, the workflow stays simple, organized, and efficient.",
    ],
  },

  showreel: {
    title: "WATCH SHOWREEL",
    subtitle: "Selected frames and edits in under a minute.",
    // Replace with Subeesh's Vimeo or YouTube video ID
    // E.g. Vimeo: '985676273' or YouTube ID
    vimeoId: "985676273",
    // Fallback thumbnail: swap with Subeesh's custom showreel thumbnail in /public/images/
    thumbnail: "/images/showreel-thumb.jpg",
  },

  services: [
    {
      id: "cinematography",
      title: "CINEMATOGRAPHY",
      description:
        "Camera operation, lighting design, and visual storytelling for commercials, brand films, and documentaries.",
      iconType: "camera",
    },
    {
      id: "editing",
      title: "EDITING",
      description:
        "Rhythm-driven cuts, clean timelines, and storytelling-first edits.",
      iconType: "edit",
    },
    {
      id: "post-workflow",
      title: "POST WORKFLOW",
      description:
        "Color grading, image balancing, and on-set to delivery pipeline management.",
      iconType: "workflow",
    },
    {
      id: "creative-direction",
      title: "CREATIVE DIRECTION",
      description:
        "Visual concept development and on-set direction for cohesive project outcomes.",
      iconType: "direction",
    },
  ] as ServiceItem[],

  projects: [
    {
      id: "assoc-1",
      brand: "Popees Baby Care",
      category: "Commercial",
      videoUrl: "/works/ASSOCIATED WORKS/Popees Baby Care Ad 2026 - Happiest People Productions (1080p, h264).mp4",
      type: "associated",
    },
    {
      id: "assoc-2",
      brand: "Imagine by Ample",
      category: "Onam TVC",
      videoUrl: "/works/ASSOCIATED WORKS/Imagine by Ample . Onam TVC by Happiest people productions 2026 - Happiest People Productions (1080p, h264).mp4",
      type: "associated",
    },
    {
      id: "assoc-3",
      brand: "DTDC",
      category: "Commercial",
      videoUrl: "/works/ASSOCIATED WORKS/IMG_1125.MP4",
      type: "associated",
    },
    {
      id: "assoc-4",
      brand: "Gold Winner",
      category: "Commercial",
      videoUrl: "/works/ASSOCIATED WORKS/Gold Winner - Happiest People Productions (1080p, h264).mp4",
      type: "associated",
    },
    {
      id: "assoc-5",
      brand: "Kerala Cafe",
      category: "Commercial",
      videoUrl: "/works/ASSOCIATED WORKS/Onam in full bloom at Happiest People  Productions 💛🌼Director’s cutClient - Kerala cafe Produc.mp4",
      type: "associated",
    },
    {
      id: "assoc-6",
      brand: "Ajmi Foods",
      category: "Onam Ad",
      videoUrl: "/works/ASSOCIATED WORKS/പൂമരക്കൂട്ടം ആർട്സ് & സ്പോർട്സ് ക്ലബ് ഓണാഘോഷം ✨🎊.Onam with Ajmi ❤️🌸Client - @ajmifoodsofficial.mp4",
      type: "associated",
    },
    {
      id: "assoc-7",
      brand: "Muralya Milk",
      category: "Onam TVC",
      videoUrl: "/works/ASSOCIATED WORKS/Onam TVC for Muralya milk 🤍Production house -  @happiestpeopleproductions Direction & DOP - Nij.mp4",
      type: "associated",
    },
    {
      id: "assoc-8",
      brand: "Nellara",
      category: "Onam Ad",
      videoUrl: "/works/ASSOCIATED WORKS/Onam Ad featuring Kalaranjini @kalaranjini_  and @_sruthy.suresh_ , for Nellara 🌼Production hou.mp4",
      type: "associated",
    },
    {
      id: "assoc-9",
      brand: "Lulu",
      category: "India Utsav",
      videoUrl: "/works/ASSOCIATED WORKS/Lulu_India Utsav_Final_2.mp4",
      type: "associated",
    },
    {
      id: "pers-1",
      brand: "Eastern",
      category: "Sambar Sadya",
      videoUrl: "/works/PERSONAL WROKS/സാമ്പാർ കേമമാകുമ്പോൾ, സദ്യയും കെങ്കേമം! ✨ - Eastern (1080p, h264).mp4",
      type: "personal",
    },
    {
      id: "pers-2",
      brand: "Shuddham",
      category: "Ghee",
      videoUrl: "/works/PERSONAL WROKS/Shuddham ghee_Final (1).mp4",
      type: "personal",
    },
    {
      id: "pers-3",
      brand: "P Tal",
      category: "Davara Set",
      videoUrl: "/works/PERSONAL WROKS/P Tal Davara set_1.mp4",
      type: "personal",
    },
    {
      id: "pers-4",
      brand: "Eastern",
      category: "Sadya Secret",
      videoUrl: "/works/PERSONAL WROKS/കറികൾ പലതാണെങ്കിലും, സദ്യയുടെ സീക്രട്ട് എന്നും ഈസ്റ്റേൺ തന്നെ! - Eastern (1080p, h264).mp4",
      type: "personal",
    },
    {
      id: "pers-5",
      brand: "P-TAL",
      category: "Advertisement",
      videoUrl: "/works/PERSONAL WROKS/Our idea behind launching a copper water bottle was to give people the benefits of ‘Tamra Jal’ o.mp4",
      type: "personal",
    },
    {
      id: "pers-6",
      brand: "Oliveware",
      category: "Valentine's Day",
      videoUrl: "/works/PERSONAL WROKS/Celebrate Valentine’s Day with Oliveware! ❤️✨ Embrace the art of cooking with our exquisite kitc.mp4",
      type: "personal",
    },
    {
      id: "pers-7",
      brand: "Eastern",
      category: "Sambar",
      videoUrl: "/works/PERSONAL WROKS/കേരളത്തിന്റെ ഫേവറേറ്റ് തനി നാടൻ സാമ്പാർ! - Eastern (1080p, h264).mp4",
      type: "personal",
    },
    {
      id: "pers-8",
      brand: "Soilscents",
      category: "Commercial",
      videoUrl: "/works/PERSONAL WROKS/HELLO ALO!Say hello to our newest Face Wash Hello Alo that brings with it the soothing goodness .mp4",
      type: "personal",
    },
  ] as ProjectItem[],

  behindTheScenes: [
    { id: "bts-1", image: "/images/bts-1.jpeg", alt: "Behind the scenes 1" },
    { id: "bts-2", image: "/images/bts-2.jpeg", alt: "Behind the scenes 2" },
    { id: "bts-3", image: "/images/bts-3.jpeg", alt: "Behind the scenes 3" },
    { id: "bts-4", image: "/images/bts-4.jpeg", alt: "Behind the scenes 4" },
    { id: "bts-5", image: "/images/bts-5.jpeg", alt: "Behind the scenes 5" },
    { id: "bts-6", image: "/images/bts-6.jpeg", alt: "Behind the scenes 6" },
    { id: "bts-7", image: "/images/bts-7.jpeg", alt: "Behind the scenes 7" },
    { id: "bts-8", image: "/images/bts-8.jpeg", alt: "Behind the scenes 8" },
    { id: "bts-9", image: "/images/bts-9.jpeg", alt: "Behind the scenes 9" },
    { id: "bts-10", image: "/images/bts-10.jpeg", alt: "Behind the scenes 10" },
    { id: "bts-11", image: "/images/bts-11.jpeg", alt: "Behind the scenes 11" },
    { id: "bts-12", image: "/images/bts-12.jpeg", alt: "Behind the scenes 12" },
  ] as BtsItem[],

  about: {
    heading: "ABOUT ME",
    paragraphs: [
      "I'm a cinematographer, video editor, and director with 5 years of experience, having worked with 100+ brands across commercials, brand films, and social content. My work sits at the intersection of visuals, structure, and process, making sure ideas translate smoothly from set to screen.",
      "Beyond technical execution, my approach is rooted in visual storytelling and intentional composition. I focus on building a collaborative environment on set, ensuring that every frame serves the emotional core of the project while maintaining a cohesive creative vision.",
      "I prefer keeping things simple, efficient, and well thought out, so the work speaks without noise.",
    ],
    // Portrait photo placeholder (aspect ratio 4:5)
    portraitImage: "/images/about.jpg",
  },

  contact: {
    heading: "WORK WITH ME",
    subtitle: "For projects, collaborations, or full portfolio requests, reach out.",
    email: "subeeshskt487@gmail.com",
    phone: "+919656387487",
    displayPhone: "+91 9656387487",
    instagramUrl: "https://www.instagram.com/subeeshhh?igsi=MTcxc2Q1Mm1ubjJrcw==",
    vimeoUrl: "https://vimeo.com/user153672512",
    linkedinUrl: "https://www.linkedin.com/in/subeesh-krishna-b6a297198?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    copyrightYear: "2026",
  } as ContactInfo,
};
