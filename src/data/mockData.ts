export type UserRole = 'client' | 'influencer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  bio?: string;
  company?: string;
  city?: string;
  niche?: string;
  followers?: number;
  rating?: number;
  languages?: string[];
  socialLinks?: { platform: string; url: string }[];
  audienceType?: string;
  region?: string;
  // New fields for premium profile
  roleLabel?: string;
  experienceLevel?: string;
  favoriteItems?: string[]; // e.g. Artists for influencers, Brands for clients
  primaryGenre?: string;
  softwareOrEquipment?: string;
  preferredMood?: string;
  availability?: boolean;
  badges?: string[];
  tags?: string[];
  isPremium?: boolean;
}

export interface NewsArticle {
  title: string;
  source: string;
  url: string;
  date: string;
  thumbnail?: string;
}

export interface Influencer {
  id: string;
  name: string;
  avatar: string;
  city: string;
  niche: string;
  followers: number;
  rating: number;
  bio: string;
  languages: string[];
  audienceType: string;
  region: string;
  socialLinks: { platform: string; url: string; handle: string }[];
  pastBrands: string[];
  reviews: { clientName: string; rating: number; comment: string; date: string }[];
  newsArticles?: NewsArticle[];
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  text: string;
  timestamp: string;
  isEdited?: boolean;
  isDeleted?: boolean;
}

export interface ChatThread {
  id: string;
  participantName: string;
  participantAvatar: string;
  participantRole: UserRole;
  lastMessage: string;
  lastTimestamp: string;
  unread: number;
  isOnline?: boolean;
  lastSeen?: string;
  messages: Message[];
}

export interface Notification {
  id: string;
  type: 'collaboration' | 'message' | 'review' | 'system';
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
}

const indianCities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
  'Jaipur', 'Lucknow', 'Chandigarh', 'Kochi', 'Indore', 'Goa', 'Surat',
  'Nagpur', 'Bhopal', 'Coimbatore', 'Vadodara', 'Thiruvananthapuram'
];

const niches = [
  'Fashion', 'Beauty', 'Fitness', 'Travel', 'Food', 'Tech', 'Lifestyle',
  'Photography', 'Gaming', 'Education', 'Finance', 'Health', 'Parenting',
  'Music', 'Comedy', 'Sports', 'Art', 'Sustainability', 'Automotive', 'Pets'
];

const firstNames = [
  'Aarav', 'Priya', 'Rohit', 'Ananya', 'Vikram', 'Ishita', 'Arjun', 'Neha',
  'Karan', 'Diya', 'Raj', 'Meera', 'Aditya', 'Kavya', 'Siddharth', 'Riya',
  'Varun', 'Tanvi', 'Nikhil', 'Shruti', 'Amit', 'Pooja', 'Rahul', 'Simran',
  'Manish', 'Deepika', 'Akash', 'Nisha', 'Suresh', 'Anjali', 'Dhruv', 'Swati',
  'Gaurav', 'Ritika', 'Harsh', 'Divya', 'Pranav', 'Sakshi', 'Yash', 'Kriti',
  'Dev', 'Tara', 'Kunal', 'Bhavna', 'Rohan', 'Sneha', 'Vivek', 'Aditi', 'Mohit', 'Pallavi'
];

const lastNames = [
  'Sharma', 'Patel', 'Singh', 'Kumar', 'Gupta', 'Reddy', 'Nair', 'Verma',
  'Iyer', 'Joshi', 'Malhotra', 'Kapoor', 'Mehta', 'Desai', 'Chauhan',
  'Rao', 'Pillai', 'Bhat', 'Chopra', 'Agarwal'
];

const audienceTypes = ['Gen Z', 'Millennials', 'Parents', 'Professionals', 'Students', 'Women 18-35', 'Men 18-35', 'Fitness Enthusiasts'];
const languages = ['Hindi', 'English', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'Gujarati', 'Kannada', 'Malayalam', 'Punjabi'];
const brands = ['Nike', 'Zara', 'Samsung', 'Apple', 'Lakme', 'Myntra', 'Flipkart', 'Nykaa', 'Boat', 'MamaEarth', 'Sugar Cosmetics', 'Puma', 'H&M', 'Amazon', 'Swiggy'];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickN<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function generateAvatar(name: string, index: number): string {
  const colors = ['7c3aed', '3b82f6', 'ec4899', '10b981', 'f59e0b', 'ef4444', '8b5cf6', '06b6d4'];
  const color = colors[index % colors.length];
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${color}&color=fff&size=200&bold=true`;
}

export function generateInfluencers(): Influencer[] {
  const influencers: Influencer[] = [
    // --- FITNESS ---
    {
      id: "pavan-hari",
      name: "Pavan Hari",
      avatar: "/creators/Pavan Hari.jpg",
      city: "Hyderabad",
      niche: "Fitness",
      followers: 450000,
      rating: 4.6,
      bio: "Fitness enthusiast and content creator focused on bodybuilding and lifestyle vlogs.",
      languages: ["Telugu", "English"],
      audienceType: "Gen Z",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@pavanhari000", handle: "Pavan Hari" },
        { platform: "Instagram", url: "https://www.instagram.com/_pavanhari000__", handle: "@_pavanhari000__" }
      ],
      pastBrands: ["Nike", "Fast&Up"],
      reviews: []
    },
    {
      id: "tarun-kumar",
      name: "Tarun Kumar",
      avatar: "/creators/tarun kumar.jpg",
      city: "Hyderabad",
      niche: "Fitness",
      followers: 320000,
      rating: 4.5,
      bio: "Sharing fitness journeys and workout routines to inspire health and wellness.",
      languages: ["Telugu", "English"],
      audienceType: "Millennials",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@mr.tarunkumar", handle: "Mr. Tarun Kumar" },
        { platform: "Instagram", url: "https://www.instagram.com/mr.tarunkumar7", handle: "@mr.tarunkumar7" }
      ],
      pastBrands: ["Reebok"],
      reviews: []
    },
    {
      id: "mehaboob",
      name: "Mehaboob",
      avatar: "/creators/mehaboob.jpg",
      city: "Hyderabad",
      niche: "Fitness",
      followers: 2400000,
      rating: 4.9,
      bio: "Dancer, fitness icon, and lifestyle creator. Known for high-energy content and professional fitness training.",
      languages: ["Telugu", "Hindi", "English"],
      audienceType: "Gen Z",
      region: "India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@mehaboobdilse", handle: "Mehaboob Dilse" },
        { platform: "Instagram", url: "https://www.instagram.com/mehaboobdilse", handle: "@mehaboobdilse" }
      ],
      pastBrands: ["Samsung", "Adidas"],
      reviews: []
    },
    {
      id: "sravan-sai",
      name: "Sravan Sai",
      avatar: "/creators/sravan sai.jpg",
      city: "Hyderabad",
      niche: "Fitness",
      followers: 280000,
      rating: 4.7,
      bio: "Get fit with Sravan. Professional fitness coach and lifestyle vlogger.",
      languages: ["Telugu", "English"],
      audienceType: "Professionals",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@getfitwithsravan", handle: "Get Fit With Sravan" },
        { platform: "Instagram", url: "https://www.instagram.com/__sravan.__", handle: "@__sravan.__" }
      ],
      pastBrands: ["Optimum Nutrition"],
      reviews: []
    },
    {
      id: "mallika-raghavender",
      name: "Mallika Raghavender",
      avatar: "/creators/Mallika Raghavender.jpg",
      city: "Hyderabad",
      niche: "Fitness",
      followers: 650000,
      rating: 4.8,
      bio: "Dedicated to fitness, health, and empowering women through wellness content.",
      languages: ["Telugu", "English"],
      audienceType: "Women 18-35",
      region: "India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@mallikaraghavender", handle: "Mallika Raghavender" },
        { platform: "Instagram", url: "https://www.instagram.com/mallika_raghavender_official_", handle: "@mallika_raghavender_official_" }
      ],
      pastBrands: ["cult.fit", "Ajio"],
      reviews: []
    },

    // --- FASHION ---
    {
      id: "demon-pavan",
      name: "Demon Pavan",
      avatar: "/creators/demon-pavan.webp",
      city: "Hyderabad",
      niche: "Fashion",
      followers: 850000,
      rating: 4.7,
      bio: "Krishna Pavan, aka Demon Pavan, is a bold fashion and lifestyle icon. He blends high-intensity fitness with cutting-edge streetwear and urban style.",
      languages: ["Telugu", "Hindi", "English"],
      audienceType: "Gen Z",
      region: "India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@demon_pavan", handle: "Demon_Pavan_Official" },
        { platform: "Instagram", url: "https://www.instagram.com/demon_pavan", handle: "@demon_pavan" }
      ],
      pastBrands: ["Puma", "Monster Energy"],
      reviews: [{ clientName: "Arjun Mehta", rating: 4.7, comment: "Inspirational style!", date: "2025-12-05" }]
    },
    {
      id: "namratha-nitish",
      name: "Namratha Nitish",
      avatar: "/creators/namratha nitish.jpg",
      city: "Bangalore",
      niche: "Fashion",
      followers: 520000,
      rating: 4.7,
      bio: "Fashion and lifestyle influencer sharing daily style inspiration and beauty tips.",
      languages: ["Telugu", "English", "Kannada"],
      audienceType: "Women 18-35",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@namrathanitish1694", handle: "Namratha Nitish" },
        { platform: "Instagram", url: "https://www.instagram.com/namrathanitish/", handle: "@namrathanitish" }
      ],
      pastBrands: ["Nykaa", "Zivame"],
      reviews: []
    },
    {
      id: "srijaya",
      name: "Srijaya",
      avatar: "/creators/srijaya.jpg",
      city: "Hyderabad",
      niche: "Fashion",
      followers: 380000,
      rating: 4.6,
      bio: "Curating trends and personal style for the modern woman.",
      languages: ["Telugu", "English"],
      audienceType: "Students",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@srijaya434", handle: "Srijaya" },
        { platform: "Instagram", url: "https://www.instagram.com/srijaya434", handle: "@srijaya434" }
      ],
      pastBrands: ["H&M", "Zara"],
      reviews: []
    },
    {
      id: "shreemayi-reddy",
      name: "Shreemayi Reddy",
      avatar: "/creators/shreemayi.jpg",
      city: "Hyderabad",
      niche: "Fashion",
      followers: 410000,
      rating: 4.7,
      bio: "Style enthusiast exploring the intersection of traditional and modern fashion.",
      languages: ["Telugu", "English"],
      audienceType: "Millennials",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@shreemayireddyy", handle: "Shreemayi Reddy" },
        { platform: "Instagram", url: "https://www.instagram.com/shreemayireddyy", handle: "@shreemayireddyy" }
      ],
      pastBrands: ["Myntra", "Lakme"],
      reviews: []
    },
    {
      id: "ajay-hanumanthu",
      name: "Ajay Hanumanthu",
      avatar: "/creators/aye jude.jpg",
      city: "Hyderabad",
      niche: "Fashion",
      followers: 1200000,
      rating: 4.9,
      bio: "Aye Jude - Men's fashion, lifestyle, and grooming expert. Breaking fashion boundaries in India.",
      languages: ["Telugu", "English"],
      audienceType: "Men 18-35",
      region: "India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@ayejude", handle: "Aye Jude" },
        { platform: "Instagram", url: "https://www.instagram.com/ajayfromayejude", handle: "@ajayfromayejude" }
      ],
      pastBrands: ["Samsung", "Ray-Ban", "Levi's"],
      reviews: []
    },

    // --- FOOD ---
    {
      id: "soma-shekar",
      name: "Soma Shekar (Telugu Foodie)",
      avatar: "/creators/soma shekar.jpg",
      city: "Hyderabad",
      niche: "Food",
      followers: 850000,
      rating: 4.9,
      bio: "Exploring the best flavors of South India. The ultimate guide for Telugu food lovers.",
      languages: ["Telugu", "Hindi"],
      audienceType: "Parents",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@telugufoodie", handle: "Telugu Foodie" },
        { platform: "Instagram", url: "https://www.instagram.com/telugu_foodiess", handle: "@telugu_foodiess" }
      ],
      pastBrands: ["Zomato", "Swiggy"],
      reviews: []
    },
    {
      id: "tasty-teja",
      name: "Tasty Teja",
      avatar: "/creators/tasty teja.jpg",
      city: "Hyderabad",
      niche: "Food",
      followers: 2200000,
      rating: 4.9,
      bio: "Entertainer and food lover. Bringing you the tastiest reviews and fun food challenges.",
      languages: ["Telugu", "English"],
      audienceType: "Gen Z",
      region: "India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@tastytejaofficial", handle: "Tasty Teja Official" },
        { platform: "Instagram", url: "https://www.instagram.com/tastyteja", handle: "@tastyteja" }
      ],
      pastBrands: ["Coca-Cola", "KFC"],
      reviews: []
    },
    {
      id: "keerthi-raaz",
      name: "Keerthi Raaz",
      avatar: "/creators/keerthi raaz.jpg",
      city: "Hyderabad",
      niche: "Food",
      followers: 550000,
      rating: 4.7,
      bio: "Food and lifestyle vlogger sharing delicious recipes and restaurant discoveries.",
      languages: ["Telugu", "English"],
      audienceType: "Women 18-35",
      region: "India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@keerthiraaz", handle: "Keerthi Raaz" },
        { platform: "Instagram", url: "https://www.instagram.com/keerthi_raaz", handle: "@keerthi_raaz" }
      ],
      pastBrands: ["Amazon Fresh"],
      reviews: []
    },
    {
      id: "soulfulvlogs",
      name: "Soulful Vlogs",
      avatar: "/creators/soulfulvlogs.jpg",
      city: "Hyderabad",
      niche: "Food",
      followers: 480000,
      rating: 4.6,
      bio: "Catching the soul of food and travel across South India.",
      languages: ["Telugu", "English"],
      audienceType: "Travelers",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@soulfulsouthvlogss", handle: "Soulful South Vlogs" },
        { platform: "Instagram", url: "https://www.instagram.com/soulfulvlogs07", handle: "@soulfulvlogs07" }
      ],
      pastBrands: ["Uber Eats"],
      reviews: []
    },
    {
      id: "chandu-talks",
      name: "Chandana & Chandini's Talks",
      avatar: "/creators/chandana and chandini's talks..jpg",
      city: "Hyderabad",
      niche: "Food",
      followers: 620000,
      rating: 4.7,
      bio: "Duo vlogs sharing food experiences, lifestyle stories, and fun conversations.",
      languages: ["Telugu", "English"],
      audienceType: "Students",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@chandusquaretalkss", handle: "Chandu Square Talks" },
        { platform: "Instagram", url: "https://www.instagram.com/chandusquare_talkss", handle: "@chandusquare_talkss" }
      ],
      pastBrands: ["Licious"],
      reviews: []
    },

    // --- COMEDY ---
    {
      id: "ravi-mantri",
      name: "Ravi Mantri",
      avatar: "/creators/ravi-mantri.jpg",
      city: "Hyderabad",
      niche: "Comedy",
      followers: 2100000,
      rating: 4.9,
      bio: "Ravi Mantri is a celebrated comedian, author and storyteller. Known for 'Amma Diarylo Konni Pageelu' and his unique blend of humor and life stories.",
      languages: ["Telugu", "English"],
      audienceType: "Millennials",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@ravimantrii", handle: "RaviMantrii" },
        { platform: "Instagram", url: "https://www.instagram.com/ravimantrii", handle: "@ravimantrii" }
      ],
      pastBrands: ["Amazon", "Flipkart"],
      reviews: [{ clientName: "Aarav Sharma", rating: 5, comment: "Authentic storytelling at its best.", date: "2025-12-01" }]
    },
    {
      id: "sudheer-sudheer",
      name: "Sudigali Sudheer",
      avatar: "/creators/sudheer.jpg",
      city: "Hyderabad",
      niche: "Comedy",
      followers: 5200000,
      rating: 5.0,
      bio: "Sudheer Anand Bayana, known as Sudigali Sudheer, is a powerhouse of entertainment in the Telugu industry, famed for his comedy, hosting, and acting skills.",
      languages: ["Telugu", "Hindi", "English"],
      audienceType: "Gen Z & Millennials",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@sudheeranandbayana", handle: "SUDHEER ANAND BAYANA" },
        { platform: "Instagram", url: "https://www.instagram.com/sudheeranandbayana", handle: "@sudheeranandbayana" }
      ],
      pastBrands: ["Santoor", "Sprite"],
      reviews: [{ clientName: "Vikram Reddy", rating: 5, comment: "The King of entertainment!", date: "2025-12-10" }]
    },
    {
      id: "demon-pavan",
      name: "Demon Pavan",
      avatar: "/creators/demon-pavan-chat.jpg",
      city: "Hyderabad",
      niche: "Gaming",
      followers: 1200000,
      rating: 4.8,
      bio: "Demon Pavan - Top gaming content creator and streamer. Known for high-energy gameplay and entertaining commentary.",
      languages: ["Telugu", "English"],
      audienceType: "Gen Z",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@demonpavan", handle: "Demon Pavan" },
        { platform: "Instagram", url: "https://www.instagram.com/demonpavan", handle: "@demonpavan" }
      ],
      pastBrands: ["Asus ROG", "Monster Energy"],
      reviews: []
    },
    {
      id: "gnaneswar-kumar",
      name: "Gnaneswar Kumar (aura_things)",
      avatar: "/creators/Gnaneswar Kumar(aura_things).jpg",
      city: "Hyderabad",
      niche: "Comedy",
      followers: 450000,
      rating: 4.8,
      bio: "Aura Things - Relatable comedy skits and lifestyle humor for the younger generation.",
      languages: ["Telugu", "English"],
      audienceType: "Gen Z",
      region: "South India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@aura_things", handle: "Aura Things" },
        { platform: "Instagram", url: "https://www.instagram.com/aura_thingss", handle: "@aura_thingss" }
      ],
      pastBrands: ["Garena Free Fire"],
      reviews: []
    },
    {
      id: "emmanuel",
      name: "Emmanuel",
      avatar: "/creators/eammanuel.jpg",
      city: "Hyderabad",
      niche: "Comedy",
      followers: 1800000,
      rating: 4.9,
      bio: "Jabardasth fame comedian known for his impeccable timing and expressive humor.",
      languages: ["Telugu", "Hindi"],
      audienceType: "Family",
      region: "India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@jabardasthemmanuelofficial", handle: "Emmanuel Official" },
        { platform: "Instagram", url: "https://www.instagram.com/jabardasth_emmanuel", handle: "@jabardasth_emmanuel" }
      ],
      pastBrands: ["PhonePe"],
      reviews: []
    },
    {
      id: "avinash",
      name: "Avinash",
      avatar: "/creators/avinash.jpg",
      city: "Hyderabad",
      niche: "Comedy",
      followers: 2500000,
      rating: 5.0,
      bio: "Mukku Avinash - The master of mimicry and entertainment. Spreading joy through every video.",
      languages: ["Telugu", "Hindi", "English"],
      audienceType: "Family",
      region: "India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@mukkuavinashofficial", handle: "Mukku Avinash" },
        { platform: "Instagram", url: "https://www.instagram.com/jabardasth_avinash", handle: "@jabardasth_avinash" }
      ],
      pastBrands: ["Paytm", "Disney+ Hotstar"],
      reviews: []
    },

    // --- TRAVEL ---
    {
      id: "bangkok-pilla",
      name: "Bangkok Pilla",
      avatar: "/creators/bangkok-pilla.jpg",
      city: "Bangkok / Hyderabad",
      niche: "Travel",
      followers: 1500000,
      rating: 4.8,
      bio: "Sravani Varma, popularly known as Bangkok Pilla, shares her vibrant life in Thailand, blending Telugu culture with international travel and food vlogs.",
      languages: ["Telugu", "English"],
      audienceType: "Travelers",
      region: "Global",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@bangkokpilla", handle: "Bangkok Pilla" },
        { platform: "Instagram", url: "https://www.instagram.com/bangkok.pilla", handle: "@bangkok.pilla" }
      ],
      pastBrands: ["Tourism Thailand", "Myntra", "Samsung"],
      reviews: [{ clientName: "Neha Gupta", rating: 4.8, comment: "Love her travel recommendations!", date: "2025-11-25" }]
    },
    {
      id: "uma-traveler",
      name: "Uma Telugu Traveller",
      avatar: "/creators/uma traveller.jpg",
      city: "Hyderabad",
      niche: "Travel",
      followers: 950000,
      rating: 4.9,
      bio: "Exploring the world, one vlog at a time. The first Telugu world traveler documenting global cultures.",
      languages: ["Telugu", "English", "Hindi"],
      audienceType: "Adventure Seekers",
      region: "Global",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@umatelugutraveller", handle: "Uma Telugu Traveller" },
        { platform: "Instagram", url: "https://www.instagram.com/umatelugutraveller", handle: "@umatelugutraveller" }
      ],
      pastBrands: ["Goibibo", "Skyscanner"],
      reviews: []
    },
    {
      id: "abhigna-reddy",
      name: "Abhigna Reddy",
      avatar: "/creators/abhigna-reddy-chat.jpg",
      city: "Hyderabad",
      niche: "Travel",
      followers: 350000,
      rating: 4.7,
      bio: "Lifestyle and travel vlogger sharing stories from across the country.",
      languages: ["Telugu", "English"],
      audienceType: "Millennials",
      region: "India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@abhignareddylakkireddy", handle: "Abhigna Reddy" },
        { platform: "Instagram", url: "https://www.instagram.com/abhignaaaaaaaaa_", handle: "@abhignaaaaaaaaa_" }
      ],
      pastBrands: ["Airbnb"],
      reviews: []
    },
    {
      id: "anvesh",
      name: "Naa Anvesana", // Updated name display
      avatar: "/creators/naa-anvesana-chat.jpg",
      city: "Hyderabad",
      niche: "Travel",
      followers: 3200000,
      rating: 5.0,
      bio: "Naa Anveshana - Uncovering hidden gems around the world. Bringing global travel to the Telugu audience.",
      languages: ["Telugu", "English", "Spanish"],
      audienceType: "Travel Enthusiasts",
      region: "Global",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@naaanveshana", handle: "Naa Anveshana" },
        { platform: "Instagram", url: "https://www.instagram.com/naa_anveshana", handle: "@naa_anveshana" }
      ],
      pastBrands: ["Emirates", "Booking.com"],
      reviews: []
    },
    {
      id: "sanjana-sahithi",
      name: "Sanjana & Sahithi",
      avatar: "/creators/sanjana and sahithoi.jpg",
      city: "Hyderabad",
      niche: "Travel",
      followers: 780000,
      rating: 4.8,
      bio: "Akka and Chelli vlogs. Travel, fun, and lifestyle stories from two sisters.",
      languages: ["Telugu", "English"],
      audienceType: "Family",
      region: "India",
      socialLinks: [
        { platform: "YouTube", url: "https://youtube.com/@akkaandchelli", handle: "Akka and Chelli" },
        { platform: "Instagram", url: "https://www.instagram.com/akkaandchelli", handle: "@akkaandchelli" }
      ],
      pastBrands: ["Himalaya", "Sugar Cosmetics"],
      reviews: []
    }
  ];

  for (let i = 0; i < 75; i++) {
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[i % lastNames.length];
    const name = `${firstName} ${lastName}`;
    const city = indianCities[i % indianCities.length];
    const niche = niches[i % niches.length];
    const followers = Math.floor(Math.random() * 4900000) + 1000000;

    influencers.push({
      id: `inf-${i + 1}`,
      name,
      avatar: generateAvatar(name, i + 22),
      city,
      niche,
      followers,
      rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
      bio: `${name} is a popular ${niche.toLowerCase()} content creator from ${city}, known for engaging ${niche.toLowerCase()} content and brand collaborations across India.`,
      languages: pickN(languages, 2 + Math.floor(Math.random() * 2)),
      audienceType: pick(audienceTypes),
      region: city,
      socialLinks: [
        { platform: 'Instagram', url: '#', handle: `@${firstName.toLowerCase()}${lastName.toLowerCase()}` },
        { platform: 'YouTube', url: '#', handle: `${firstName} ${lastName}` },
        { platform: 'Twitter', url: '#', handle: `@${firstName.toLowerCase()}_${lastName.toLowerCase().slice(0, 3)}` },
      ],
      pastBrands: pickN(brands, 3 + Math.floor(Math.random() * 4)),
      reviews: [
        {
          clientName: `${pick(firstNames)} ${pick(lastNames)}`,
          rating: parseFloat((4 + Math.random()).toFixed(1)),
          comment: `Great collaboration with ${firstName}! Very professional and delivered amazing content on time.`,
          date: '2025-12-15',
        },
        {
          clientName: `${pick(firstNames)} ${pick(lastNames)}`,
          rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
          comment: `${firstName} brought excellent creative ideas to our campaign. Highly recommended!`,
          date: '2025-11-20',
        },
      ],
    });
  }

  return influencers;
}

export const sampleNotifications: Notification[] = [
  { id: 'n1', type: 'collaboration', title: 'New Collaboration Request', description: 'Divya wants to collaborate on a Handcrafted Banarasi Saree campaign', timestamp: '2 min ago', read: false },
  { id: 'n2', type: 'message', title: 'New Message Received', description: 'Sivaathmika sent you a message about the homemade pickles', timestamp: '15 min ago', read: false },
  { id: 'n3', type: 'review', title: 'New Review Posted', description: 'You received a 5-star rating from G दादी Traditional Pickles', timestamp: '1 hour ago', read: false },
  { id: 'n4', type: 'system', title: 'Profile Update Reminder', description: 'Complete your profile to increase visibility by 40%', timestamp: '3 hours ago', read: true },
  { id: 'n5', type: 'collaboration', title: 'Collaboration Accepted', description: 'Ananya accepted your collaboration request for block prints', timestamp: '5 hours ago', read: true },
  { id: 'n6', type: 'message', title: 'Message from Yashoda', description: 'Yashoda wants to discuss an Ethnic Fusion Wear campaign', timestamp: '1 day ago', read: true },
];

export const sampleChatThreads: ChatThread[] = [
  {
    id: 'chat1',
    participantName: 'Demon Pavan',
    participantAvatar: '/creators/demon-pavan-chat.jpg',
    participantRole: 'client',
    lastMessage: 'Sure, I would love to collaborate on this campaign!',
    lastTimestamp: '2 min ago',
    unread: 2,
    isOnline: true,
    lastSeen: 'Online',
    messages: [
      { id: 'm1', senderId: 'me', senderName: 'You', senderAvatar: '', text: 'Hi Demon Pavan! I loved your collection of Banarasi sarees. Would you be interested in a collaboration?', timestamp: '10:30 AM' },
      { id: 'm2', senderId: 'demon-pavan', senderName: 'Demon Pavan', senderAvatar: '/creators/demon-pavan-chat.jpg', text: 'Thank you so much! I appreciate your interest. What kind of collaboration did you have in mind?', timestamp: '10:35 AM' },
      { id: 'm3', senderId: 'me', senderName: 'You', senderAvatar: '', text: 'I am launching a new heritage series and would like to feature your sarees in my next set of reels.', timestamp: '10:40 AM' },
      { id: 'm4', senderId: 'demon-pavan', senderName: 'Demon Pavan', senderAvatar: '/creators/demon-pavan-chat.jpg', text: 'That sounds amazing! Our heritage weaves are perfect for that. Could you share more details about the budget and timeline?', timestamp: '10:45 AM' },
      { id: 'm5', senderId: 'me', senderName: 'You', senderAvatar: '', text: 'Budget is ₹75,000 for the full package. We need the content live by next month.', timestamp: '10:50 AM' },
      { id: 'm6', senderId: 'demon-pavan', senderName: 'Demon Pavan', senderAvatar: '/creators/demon-pavan-chat.jpg', text: 'Sure, I would love to collaborate on this campaign!', timestamp: '10:52 AM' },
    ],
  },
  {
    id: 'chat2',
    participantName: 'Naa Anvesana',
    participantAvatar: '/creators/naa-anvesana-chat.jpg',
    participantRole: 'client',
    lastMessage: 'I will send you the samples by Friday',
    lastTimestamp: '1 hour ago',
    unread: 0,
    isOnline: false,
    lastSeen: 'last seen 1 hour ago',
    messages: [
      { id: 'm7', senderId: 'me', senderName: 'You', senderAvatar: '', text: 'Hey Naa Anvesana, how are the pickle samples coming along?', timestamp: '9:00 AM' },
      { id: 'm8', senderId: 'anvesh', senderName: 'Naa Anvesana', senderAvatar: '/creators/naa-anvesana-chat.jpg', text: 'Going great! We have prepared the Avakaya and Gongura varieties.', timestamp: '9:15 AM' },
      { id: 'm9', senderId: 'me', senderName: 'You', senderAvatar: '', text: 'Perfect! When can I expect them?', timestamp: '9:20 AM' },
      { id: 'm10', senderId: 'anvesh', senderName: 'Naa Anvesana', senderAvatar: '/creators/naa-anvesana-chat.jpg', text: 'I will send you the samples by Friday', timestamp: '9:25 AM' },
    ],
  },
  {
    id: 'chat3',
    participantName: 'Abhigna Reddy',
    participantAvatar: '/creators/abhigna-reddy-chat.jpg',
    participantRole: 'client',
    lastMessage: 'Looking forward to working together! 🎉',
    lastTimestamp: '5 hours ago',
    unread: 1,
    isOnline: false,
    lastSeen: 'last seen 5 hours ago',
    messages: [
      { id: 'm11', senderId: 'abhigna-reddy', senderName: 'Abhigna Reddy', senderAvatar: '/creators/abhigna-reddy-chat.jpg', text: 'Hi! I saw your collaboration request for the block prints. Let\'s do it!', timestamp: 'Yesterday 4:00 PM' },
      { id: 'm12', senderId: 'me', senderName: 'You', senderAvatar: '', text: 'Awesome! We think your textiles are beautiful.', timestamp: 'Yesterday 4:15 PM' },
      { id: 'm13', senderId: 'abhigna-reddy', senderName: 'Abhigna Reddy', senderAvatar: '/creators/abhigna-reddy-chat.jpg', text: 'Looking forward to working together! 🎉', timestamp: 'Yesterday 4:30 PM' },
    ],
  },
];

export const sampleInfluencerChats: ChatThread[] = [
  {
    id: 'chat-brand-1',
    participantName: 'TechStart Inc.',
    participantAvatar: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    participantRole: 'client',
    lastMessage: 'We would like to sponsor your next gaming stream.',
    lastTimestamp: '10 min ago',
    unread: 1,
    isOnline: true,
    lastSeen: 'Online',
    messages: [
      { id: 'mb1', senderId: 'brand-1', senderName: 'TechStart Inc.', senderAvatar: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop', text: 'Hi! We have a new gaming peripheral launching soon. Are you interested in reviewing it?', timestamp: 'Yesterday 2:00 PM' },
      { id: 'mb2', senderId: 'me', senderName: 'You', senderAvatar: '', text: 'Hello! That sounds interesting. What kind of peripheral is it?', timestamp: 'Yesterday 2:30 PM' },
      { id: 'mb3', senderId: 'brand-1', senderName: 'TechStart Inc.', senderAvatar: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop', text: 'It is a mechanical keyboard with custom switches. We would like to sponsor your next gaming stream.', timestamp: 'Yesterday 3:00 PM' },
    ],
  },
  {
    id: 'chat-brand-2',
    participantName: 'EthnicVibes',
    participantAvatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop',
    participantRole: 'client',
    lastMessage: 'Do you do fashion hauls?',
    lastTimestamp: '3 hours ago',
    unread: 0,
    isOnline: false,
    lastSeen: 'last seen 3 hours ago',
    messages: [
      { id: 'mb4', senderId: 'brand-2', senderName: 'EthnicVibes', senderAvatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop', text: 'Loved your recent reel! Your style really resonates with our brand.', timestamp: 'Mon 10:00 AM' },
      { id: 'mb5', senderId: 'me', senderName: 'You', senderAvatar: '', text: 'Thank you! I appreciate that. I love ethnic wear.', timestamp: 'Mon 10:15 AM' },
      { id: 'mb6', senderId: 'brand-2', senderName: 'EthnicVibes', senderAvatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop', text: 'Do you do fashion hauls? We have a new collection suitable for the upcoming festive season.', timestamp: 'Mon 11:00 AM' },
    ],
  },
  {
    id: 'chat-client-3',
    participantName: 'Rahul Verma',
    participantAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    participantRole: 'client',
    lastMessage: 'Is the date confirmed for the shoot?',
    lastTimestamp: '1 day ago',
    unread: 0,
    isOnline: false,
    lastSeen: 'last seen 1 day ago',
    messages: [
      { id: 'mb7', senderId: 'me', senderName: 'You', senderAvatar: '', text: 'Hi Rahul, regarding the product shoot next week.', timestamp: 'Fri 4:00 PM' },
      { id: 'mb8', senderId: 'client-3', senderName: 'Rahul Verma', senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', text: 'Yes, we are finalizing the location. Will let you know by EOD.', timestamp: 'Fri 4:15 PM' },
      { id: 'mb9', senderId: 'client-3', senderName: 'Rahul Verma', senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', text: 'Is the date confirmed for the shoot? We prefer Saturday.', timestamp: 'Fri 5:30 PM' },
    ],
  },
];

export function formatFollowers(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
}
