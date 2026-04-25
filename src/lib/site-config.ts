// Site-wide constants
export const SITE = {
  name: "MBA (International Business)",
  short: "MBA-IB · DSE",
  fullName: "MBA (International Business) — Department of Commerce, Delhi School of Economics",
  tagline: "Shaping global business leaders since 1967.",
  university: "University of Delhi",
  established: "1967",
  address: "Department of Commerce, Faculty of Commerce & Business Studies, Delhi School of Economics, University of Delhi, Delhi 110007, India",
  phone: "+91 11 2766 7725",
  email: "office@dsembaib.in",
  applicationPortal: "https://mbaadmission.uod.ac.in",
  departmentSite: "https://commerce.du.ac.in",
  socials: {
    instagram: "https://www.instagram.com/dsembaib/",
    linkedin: "https://www.linkedin.com/school/dsembaib/",
    youtube: "https://www.youtube.com/@dsembaib",
    facebook: "https://www.facebook.com/dsembaib/",
  },
  // Google Maps embed for Department of Commerce, DSE, DU
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0843394487856!2d77.20984797550042!3d28.687841175626175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0f4d2f3a89%3A0x1d3a2a01a2bb1234!2sDelhi%20School%20of%20Economics%2C%20University%20of%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000",
} as const;

export const NAV: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About MBA-IB", href: "/about" },
      { label: "Facilities", href: "/facilities" },
      { label: "Programme Brochure", href: "/programme-brochure" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions-1",
    children: [
      { label: "Admissions", href: "/admissions-1" },
      { label: "Admission Lists", href: "/admission-lists" },
      { label: "Registration", href: "/registration" },
      { label: "Prospective Recruiters", href: "/prospective-recruiters" },
    ],
  },
  { label: "Placements", href: "/placements" },
  {
    label: "Student Body",
    href: "/student-body",
    children: [
      { label: "Student Body", href: "/student-body" },
      { label: "IB Cell", href: "/ib-cell" },
      { label: "Finance Cell", href: "/finance-cell" },
      { label: "MarCom Cell", href: "/marcom-cell" },
      { label: "Media & PR Cell", href: "/media-and-pr-cell" },
      { label: "Sports Cell", href: "/sports-cell" },
      { label: "IISAC", href: "/iisac" },
      { label: "Corporate Relations", href: "/corporate-relations-team" },
      { label: "Alumni Committee", href: "/alumni-committee" },
    ],
  },
  {
    label: "Events",
    href: "/upcoming-events",
    children: [
      { label: "Upcoming Events", href: "/upcoming-events" },
      { label: "Synergy", href: "/synergy" },
      { label: "Erudition", href: "/erudition" },
      { label: "Symposia", href: "/symposia" },
      { label: "Ecclesia", href: "/ecclesia" },
      { label: "TEDx", href: "/tedx" },
      { label: "Disco", href: "/disco" },
    ],
  },
  {
    label: "Alumni",
    href: "/alumni",
    children: [
      { label: "Alumni", href: "/alumni" },
      { label: "Alumni Committee", href: "/alumni-committee" },
      { label: "Alumni Dinner", href: "/alumni-dinner" },
      { label: "Newsletters", href: "/newsletters" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "Batches",
    href: "/batch-2023-2025",
    children: [
      { label: "Batch 2023–2025", href: "/batch-2023-2025" },
      { label: "Batch 2022–2024", href: "/batch-2022-2024" },
      { label: "Batch 2021–2023", href: "/batch-2021-2023" },
      { label: "Batch 2020–2022", href: "/batch-2020-2022" },
      { label: "Time Table 2023–24", href: "/time-table-batch-of-2023-24" },
    ],
  },
];

export const TICKER_ITEMS = [
  "Admissions Open — MBA-IB Batch 2026–28",
  "Shortlisted Candidates for GDPI Announced",
  "Placement Report 2025 Now Available",
  "Synergy 2026 — Annual B-School Fest",
  "Erudition 2025 — 28th Annual Business Convention",
  "1st Place — Brand Aficionado, IIM Visakhapatnam",
];

/** Curated authentic photos from DSE's official Wix media bucket */
export const PHOTOS = {
  /** Batch group photo — used as hero background */
  batchGroup:
    "https://static.wixstatic.com/media/7fc140_4ddd35fc86e44fef858ecfbb010eb84e~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85/Batch_2_edited.jpg",
  /** DSE campus front / department building */
  campus:
    "https://static.wixstatic.com/media/7fc140_8b68aa2dd56547b287ce96f0a28ccb88~mv2.jpg/v1/fill/w_1200,h_640,al_c,q_85/7fc140_8b68aa2dd56547b287ce96f0a28ccb88~mv2.jpg",
  /** Classic DSE building shot — used for sub-page hero bg */
  department:
    "https://static.wixstatic.com/media/7fc140_a6889de2e80a47669b0a4e06e67106e9~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85/7fc140_a6889de2e80a47669b0a4e06e67106e9~mv2.jpg",
  /** Erudition 2025 event — campus life */
  erudition:
    "https://static.wixstatic.com/media/7fc140_eabc4b1632234b2ab1727a2f5513206a~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85/7fc140_eabc4b1632234b2ab1727a2f5513206a~mv2.jpg",
} as const;
