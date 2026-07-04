export interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  desc: string;
  videoUrl: string;
  poster: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cinematic Storytelling Style Brand Ad',
    category: 'Cinematic Videos',
    industry: 'Sci-Fi / Entertainment',
    desc: 'Cinematic AI-generated visuals capturing a futuristic cityscape. Combining advanced text-to-video tools with bespoke audio design.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/WhatsApp%20Video%202026-06-30%20at%2010.35.07%20PM%20(1).mp4',
    poster: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'HeyGen Ambassador Keynote',
    category: 'AI Clone Videos',
    industry: 'SaaS / Marketing',
    desc: 'A hyper-realistic digital clone presentation demonstrating automated sales videos at scale for global companies.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/0427%20(1).mp4',
    poster: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Aura Coffee Campaign',
    category: 'Product Videos',
    industry: 'Food & Beverage',
    desc: 'Cinematic product sequence showing slow-motion closeups of fresh coffee brewing. Designed for Instagram advertisements.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/WhatsApp%20Video%202026-06-30%20at%2010.35.08%20PM.mp4',
    poster: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'UGC Style Video for a Brand Ad',
    category: 'UGC Videos',
    industry: 'E-commerce',
    desc: 'Authentic user-generated marketing video showcasing skincare applications, designed to increase conversion rates on TikTok.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/0503(1).mp4',
    poster: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Experience Luxury Living',
    category: 'Real Estate Videos',
    industry: 'Real Estate / Architecture',
    desc: 'A breathtaking virtual tour trailer of a modern minimalist villa. Video duration and complexity can be customized based on client request.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/Experience_Luxury_Living.mp4',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Future Tech Commercial',
    category: 'Commercial Ads',
    industry: 'Technology',
    desc: 'A premium promotional commercial highlighting corporate SaaS features using modern styling and high-end narrative pace.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-serving-freshly-brewed-coffee-41711-large.mp4',
    poster: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'The AI Horizon Podcast',
    category: 'AI Podcasts',
    industry: 'Media / Education',
    desc: 'Multi-camera simulated podcast layout with automated speaker tracking and text overlays, generating micro-content from audio.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-at-a-laptop-in-a-cafe-42260-large.mp4',
    poster: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    title: 'Social Media Viral Videos with Brand Name',
    category: 'Social Media Campaigns',
    industry: 'Mobile Apps',
    desc: 'Dynamic social media compilation capturing rapid visual hooks and typography overlays for maximum engagement metrics.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/WhatsApp%20Video%202026-06-30%20at%2010.35.08%20PM%20(1).mp4',
    poster: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
  }
];

export const CATEGORIES = [
  'All',
  'Cinematic Videos',
  'AI Clone Videos',
  'Product Videos',
  'UGC Videos',
  'Real Estate Videos',
  'Commercial Ads',
  'AI Podcasts',
  'Social Media Campaigns'
];
