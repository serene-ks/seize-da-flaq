
import wordmark from "../assets/images/logo-wordmark.png";

export const eventConfig = {


  // ── Identity ────────────────────────────────────────────────
  
  event: {
    name: 'SEIZE DA FLAQ',
    organizer: 'Cyberonites Club',
    edition: '2026',
    taglinePrimary: 'Every Flag is a Mission. Every Mission Changes the City.',
    taglineSecondary: 'No Rules. Just Flags.',
    shortDescription:
      "Cyberonites Club's biggest National-Level Capture The Flag competition — an immersive, mission-based cybersecurity experience.",
  },

  // ── Branding assets ─────────────────────────────────────────
  // wordmark = primary 3D "SEIZE DA FLAQ" logo, used in navbar/hero.
  // badge    = hexagonal emblem w/ "NO RULES. JUST FLAGS." ribbon,
  //            used as favicon / secondary mark (e.g. footer, share cards).
  branding:{
wordmarkSrc: wordmark,
},


  // ── Countdown ───────────────────────────────────────────────
  // PLACEHOLDER — official schedule not finalized yet.

  countdown: {
    targetDate: '2026-03-15T09:00:00+05:30', // 15 March 2026, 9:00 AM IST
    timeZone: 'Asia/Kolkata',
    isPlaceholder: true, // flips to false once the real date is confirmed
    completedLabel: 'Mission Has Begun',
    unconfiguredLabel: 'Mission Date Will Be Announced Soon',
  },


  // ── Registration ────────────────────────────────────────────

  registration: {
    status: 'coming_soon', // 'coming_soon' | 'open' | 'closed'
    link: null, // e.g. 'https://cyberonites.com/register' once live
    teamSizeMin: 1,
    teamSizeMax: 3,
    expectedRegistrationsLabel: '2,000–3,000',
    targetTeamsLabel: '200–250',
  },


  // ── Mission Briefing (Master Reference Doc §1 — Event Overview) ─

missionBriefing: {
  eyebrow: "EVENT OVERVIEW",

  title: "MISSION BRIEFING",

  paragraphs: [
    "Cyberonites Club presents a National-Level Capture The Flag competition featuring an immersive GTA-inspired storyline, real-world cybersecurity challenges, strategic teamwork, and mission-based gameplay."
  ],
},

// main-ctf 
mainCtf: {
  eyebrow: "THE MAIN EVENT",

  title: "Main CTF Experience",

  description:
    "Face real-world cybersecurity challenges through an immersive GTA-inspired mission system featuring progressive waves, hidden objectives, and live competition.",

  features: [
    {
      title: "80–90 Challenges",
      description: "Real-world cybersecurity challenges across multiple domains.",
    },
    {
      title: "Mission Waves",
      description: "Challenges unlock progressively throughout the event.",
    },
    {
      title: "Live Leaderboard",
      description: "Track your team's ranking in real time.",
    },
    {
      title: "Hidden Bonus Flags",
      description: "Discover secret missions to earn bonus points.",
    },
    {
      title: "Final Heist",
      description: "Top teams battle for the championship.",
    },
  ],
},

// CTF Categories
categories: [
  {
    id: "web",
    title: "Web Exploitation",
    description:
      "Discover vulnerabilities in web applications through real-world attack scenarios.",
  },
  {
    id: "crypto",
    title: "Cryptography",
    description:
      "Break encryption schemes, decode secrets, and solve cryptographic puzzles.",
  },
  {
    id: "reverse",
    title: "Reverse Engineering",
    description:
      "Analyze compiled binaries and uncover hidden functionality and flags.",
  },
  {
    id: "forensics",
    title: "Digital Forensics",
    description:
      "Investigate files, memory dumps, and digital evidence to recover hidden data.",
  },
  {
    id: "pwn",
    title: "Binary Exploitation",
    description:
      "Exploit vulnerable programs using memory corruption and binary analysis.",
  },
  {
    id: "osint",
    title: "OSINT",
    description:
      "Gather intelligence using publicly available information and investigative skills.",
  },
  {
    id: "mobile",
    title: "Mobile Security",
    description:
      "Analyze Android applications and uncover mobile security weaknesses.",
  },
  {
    id: "network",
    title: "Network Security",
    description:
      "Capture packets, analyze network traffic, and identify attack vectors.",
  },
  {
    id: "stego",
    title: "Steganography",
    description:
      "Reveal hidden information concealed inside images, audio, and other media.",
  },
  {
    id: "blockchain",
    title: "Blockchain Security",
    description:
      "Explore smart contracts, decentralized systems, and blockchain vulnerabilities.",
  },
  {
    id: "misc",
    title: "Miscellaneous",
    description:
      "Unexpected puzzles and creative cybersecurity challenges beyond traditional domains.",
  },
  {
    id: "ai",
    title: "AI Security",
    description:
      "Investigate vulnerabilities, attacks, and defenses involving modern AI systems.",
  },
],


//  event structure

  structure: {
    totalDurationDays: 2,
    mainEventDurationHoursLabel: '22–24',
    actualGameplayHours: 18,
    qualification: {
      challengesLabel: '30–40',
      teamSizeLabel: '1–3',
    },
    grandFinale: {
      qualifiedParticipantsLabel: '350–400',
    },
    mainCtf: {
      totalChallengesLabel: '80–90',
      challengePoolLabel: '120–130',
      wavesLabel: '5–6',
      waveGapHours: 4,
      topTeamsPresentingLabel: '10–15',
    },
    sponsorshipTargetLabel: '₹5 Lakhs+',
  },


  // ── Live stat counters (Competition Overview section) ────────

  stats: [
    { id: 'gameplay', value: 18, suffix: 'H', label: 'Non-Stop Gameplay' },
    { id: 'registrations', value: 3000, prefix: '', suffix: '+', label: 'Expected Registrations', displayLabel: '2,000–3,000' },
    { id: 'teams', value: 250, suffix: '+', label: 'Target Teams', displayLabel: '200–250 Teams' },
    { id: 'teamSize', value: 3, prefix: '1–', label: 'Members / Team', isRange: true },
  ],
//  timeline 
timeline: [
  {
    id: 1,
    title: "Mission Briefing",
    date: "Coming Soon",
    time: "TBA",
    description:
      "The official announcement, event details, and registration portal go live.",
    icon: "briefing",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Registration Opens",
    date: "Coming Soon",
    time: "TBA",
    description:
      "Participants can register individually or as teams of up to three members.",
    icon: "register",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Registration Closes",
    date: "Coming Soon",
    time: "TBA",
    description:
      "Final opportunity to join the mission before registrations are locked.",
    icon: "lock",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Mission Deployment",
    date: "Coming Soon",
    time: "TBA",
    description:
      "Teams receive final instructions, platform access, and competition guidelines.",
    icon: "deploy",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Main CTF Begins",
    date: "Coming Soon",
    time: "TBA",
    description:
      "The national-level CTF officially begins with progressive challenge waves.",
    icon: "flag",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Mission Waves",
    date: "Throughout Event",
    time: "Every ~4 Hours",
    description:
      "New challenge waves unlock, introducing fresh missions and higher difficulty levels.",
    icon: "wave",
    status: "upcoming",
  },
  {
    id: 7,
    title: "Final Heist",
    date: "Coming Soon",
    time: "TBA",
    description:
      "The toughest missions unlock for the highest-ranked teams competing for the championship.",
    icon: "target",
    status: "upcoming",
  },
  {
    id: 8,
    title: "Grand Finale",
    date: "Coming Soon",
    time: "TBA",
    description:
      "Qualified teams present their solutions, strategies, and technical approaches before the judges.",
    icon: "trophy",
    status: "upcoming",
  },
  {
    id: 9,
    title: "Hall of Champions",
    date: "Coming Soon",
    time: "TBA",
    description:
      "Winners are announced, prizes are distributed, and SEIZE DA FLAQ champions are crowned.",
    icon: "award",
    status: "upcoming",
  },
],
  // ── Special activities (Master Reference Doc §10) ───────────
  specialActivities: [
    'Story-driven Missions',
    'Progressive Mission Waves',
    'Hidden Bonus Challenges',
    'Easter Eggs',
    'GTA-themed Announcements',
    'Team Presentations',
    'Live Leaderboard',
    'Interactive Engagement',
  ],

  // ── Past events (Brochure) ───────────────────────────────────
  pastEvents: [
    {
      id: 'escalatex-v2',
      name: 'EscalateX V2 — A Cybersecurity Extravaganza',
      date: 'November 8–9, 2025',
      description:
        'Expert talks by cybersecurity professionals paired with a hands-on CTF, bringing together industry experts and students.',
    },
    {
      id: 'intrusionx-2',
      name: 'IntrusionX — Second Edition',
      date: null,
      description:
        'A 36-hour non-stop cybersecurity hackathon spanning AI, blockchain, cloud, and IoT security challenges.',
    },
  ],

  // ── Sponsorship tiers (Brochure) ─────────────────────────────
  sponsorshipTiers: [
    { id: 'bronze', name: 'Bronze', amountLabel: 'Up to ₹15,000', access: 'Access · 01' },
    { id: 'silver', name: 'Silver', amountLabel: 'Up to ₹30,000', access: 'Access · 02' },
    { id: 'gold', name: 'Gold', amountLabel: 'Up to ₹50,000', access: 'Access · 03' },
    { id: 'title', name: 'Title Partner', amountLabel: '₹50,000 & above', access: 'Access · 04' },
  ],

  // ── Contact & social ──────────────────────────────────────────
  contact: {
    email: 'support@cyberonites.com',
    website: 'https://cyberonites.com/',
    instagram: { handle: '@official_cyberonites', url: 'https://instagram.com/official_cyberonites' },
    linkedin: { url: 'https://www.linkedin.com/company/cyberonites-club/' },
  },

  // faq details 
  faq: [
  {
    question: "Who can participate?",
    answer:
      "Students from colleges and universities across India can participate individually or in teams of up to three members.",
  },
  {
    question: "What is the team size?",
    answer:
      "Each team can have a minimum of one and a maximum of three members.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Registration details, including any applicable fee, will be announced when registrations officially open.",
  },
  {
    question: "When will registrations begin?",
    answer:
      "Registration dates will be announced through Cyberonites' official communication channels.",
  },
  {
    question: "Which challenge categories are included?",
    answer:
      "The competition features Web Exploitation, Cryptography, Reverse Engineering, Digital Forensics, Binary Exploitation, Mobile Security, Network Security, OSINT, Steganography, Blockchain Security, AI Security, Miscellaneous, and more.",
  },
  {
    question: "Do I need prior CTF experience?",
    answer:
      "No. The competition includes challenges ranging from beginner to expert, making it suitable for participants with different experience levels.",
  },
  {
    question: "How will winners be selected?",
    answer:
      "Teams will be ranked based on the number of flags captured and their total score on the live leaderboard.",
  },
  {
    question: "Where can I get updates?",
    answer:
      "All official announcements will be published through Cyberonites' website and social media channels.",
  },
],
  
};

export default eventConfig;
