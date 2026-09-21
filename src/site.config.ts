// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Alejandro Dopico',
  role: 'Computer engineer and PhD researcher in AI',
  email: 'hello@dopico.dev',
  intro: "hey, i'm alejandro",
  lead: [
    "I'm a computer engineer based in Galicia. I'm currently an FPI-funded PhD researcher in AI at LIDIA, University of A Coruña.",
    "I work on AI and machine learning, mostly on making it more efficient when resources are limited. I'm a hackathon lover, and I've been helping organize HackUDC with GPUL <3.",
  ],
  description:
    'Alejandro Dopico is a computer engineer from Galicia and a PhD researcher in AI at LIDIA, University of A Coruña.',
  status: 'PhD researcher in AI · LIDIA, University of A Coruña',
  lore: [
    'My background is in computer engineering, and I have always been interested in building things with software. That gradually led me towards artificial intelligence and machine learning.',
    'I completed an MSc in Artificial Intelligence at the University of A Coruña, where my thesis focused on efficient incremental learning. The work later received the AEPIA Best Master’s Thesis Award at EVIA 2025.',
    'Hackathons have also been a big part of my path. I have participated in several over the years, won some of them, and since 2024 I have been part of the organization of HackUDC, helping run one of the main student hackathons at the University of A Coruña.',
    'I am now a PhD researcher at LIDIA, working on Frugal AI. Alongside research, I develop AI software, run experiments, teach, and keep working on technical projects that I find interesting.',
  ],
  contactNote: 'Email is the most reliable way to reach me.',
  social: [
    { label: 'GitHub', href: 'https://github.com/AlejandroDopico2' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alejandrodopicocastro' },
    { label: 'X', href: 'https://x.com/alexdopico_' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Research', href: '/research' },
  { label: 'Projects', href: '/work' },
  { label: 'CV', href: '/cv' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Notes', href: '/notes' },
  { label: 'About', href: '/about' },
] as const;
