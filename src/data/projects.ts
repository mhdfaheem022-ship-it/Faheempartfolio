export interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  desc: string;
  videoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cinematic Storytelling Style Brand Ad',
    category: 'Cinematic Videos',
    industry: 'Sci-Fi / Entertainment',
    desc: 'Cinematic AI-generated visuals capturing a futuristic cityscape. Combining advanced text-to-video tools with bespoke audio design.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/WhatsApp%20Video%202026-06-30%20at%2010.35.07%20PM%20(1).mp4'
  },
  {
    id: '2',
    title: 'HeyGen Ambassador Keynote',
    category: 'AI Clone Videos',
    industry: 'SaaS / Marketing',
    desc: 'A hyper-realistic digital clone presentation demonstrating automated sales videos at scale for global companies.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/0427%20(1).mp4'
  },
  {
    id: '3',
    title: 'Aura Coffee Campaign',
    category: 'Product Videos',
    industry: 'Food & Beverage',
    desc: 'Cinematic product sequence showing slow-motion closeups of fresh coffee brewing. Designed for Instagram advertisements.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/WhatsApp%20Video%202026-06-30%20at%2010.35.08%20PM.mp4'
  },
  {
    id: '4',
    title: 'UGC Style Video for a Brand Ad',
    category: 'UGC Videos',
    industry: 'E-commerce',
    desc: 'Authentic user-generated marketing video showcasing skincare applications, designed to increase conversion rates on TikTok.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/0503(1).mp4'
  },
  {
    id: '5',
    title: 'Experience Luxury Living',
    category: 'Real Estate Videos',
    industry: 'Real Estate / Architecture',
    desc: 'A breathtaking virtual tour trailer of a modern minimalist villa. Video duration and complexity can be customized based on client request.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/Experience_Luxury_Living.mp4'
  },
  {
    id: '7',
    title: 'Founder Spotlight Podcast',
    category: 'AI Podcasts',
    industry: 'Media / Education',
    desc: 'Podcast series featuring startup founders sharing their products and company vision. This episode features a TikTok influencer host.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/good.mp4'
  },
  {
    id: '8',
    title: 'Social Media Viral Videos with Brand Name',
    category: 'Social Media Campaigns',
    industry: 'Mobile Apps',
    desc: 'Dynamic social media compilation capturing rapid visual hooks and typography overlays for maximum engagement metrics.',
    videoUrl: 'https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/public/Video%20files/WhatsApp%20Video%202026-06-30%20at%2010.35.08%20PM%20(1).mp4'
  }
];

export const CATEGORIES = [
  'All',
  'Cinematic Videos',
  'AI Clone Videos',
  'Product Videos',
  'UGC Videos',
  'Real Estate Videos',
  'AI Podcasts',
  'Social Media Campaigns'
];
