/**
 * ============================================================
 * OMAR SHERIF — CV CONTENT
 * ============================================================
 * Every fact here comes directly from the uploaded resume
 * (Omar_Sherif_Resume_.pdf). Nothing professional was invented.
 *
 * A couple of small, deliberate choices worth knowing about:
 * - Exact date of birth from the CV is NOT displayed publicly
 *   (common practice for public-facing sites — easy to add back
 *   into the `about` section below if you want it shown).
 * - The phone number is reproduced exactly as written in the CV
 *   ("+0201147581907"). Worth double-checking that's the exact
 *   format you want live, since it has an unusual leading 0
 *   right after the +.
 * ============================================================
 */

const CV = {
  meta: {
    siteName: "Omar Sherif | PADI Instructor",
  },

  brand: {
    name: "OMAR SHERIF",
  },

  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Diving", href: "#diving" },
      { label: "Skills", href: "#skills" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    eyebrow: "PADI Instructor",
    name: "Omar Sherif El-saied",
    tagline:
      "",
    location: "Maadi, Cairo, Egypt",
    portrait: {
      src: "assets/img/portrait.jpg",
      alt: "Portrait of Omar Sherif in scuba gear on a jetty by the Red Sea.",
    },
    ctaPrimary: { label: "Download CV", href: "assets/files/Omar-Sherif-CV.pdf", download: true },
    ctaSecondary: { label: "Get in Touch", href: "#contact" },
  },

  about: {
    eyebrow: "About Me",
    title: "About Me",
    paragraphs: [
      "Dedicated PADI Scuba Diving Instructor with 4+ years of professional experience guiding diverse groups and teaching all levels. Passionate about marine education, diver mentorship, and promoting eco-friendly, responsible diving practices. Skilled in safety management, dive planning, and delivering unforgettable underwater experiences.
.",
      "Successfully completed the PADI Instructor Development Course (IDC) and further developed professional-level teaching and leadership skills. Eager to contribute to sustainable dive experiences while mentoring and inspiring divers at all levels.",
    ],
    interests: ["Volunteer work", "Inspiration", "Physical activities", "Music", "Photography", "Social causes"],
  },

  // Compact reverse-chronological overview of every role on the CV.
  experience: {
    eyebrow: "Professional Experience",
    title: "Where I've Worked",
    roles: [
      { title: "Dive Master", org: "Ducks Diving Center", location: "El Qusier", period: "05/2025 — Present" },
      { title: "Dive Master", org: "Freelancer", location: "Marsa Alam", period: "07/2024 — 05/2025" },
      { title: "Dive Master", org: "Dive Red Sea", location: "Makadi Bay", period: "04/2024 — 07/2024" },
      { title: "Graphic Designer / Motion Designer / Video Editor", org: "Plus One Up", location: "Cairo", period: "05/2020 — Present" },
      { title: "Dive Master", org: "Eazy Divers International", location: "Sharm El Sheikh", period: "08/2021 — 03/2022" },
    ],
  },

  // The diving-specific roles, expanded with detail.
  diving: {
    eyebrow: "Diving Experience",
    title: "Below the Surface, Professionally",
    roles: [
      { title: "Dive Master", org: "Ducks Diving Center", location: "El Qusier", period: "05/2025 — Present", bullets: [] },
      { title: "Dive Master", org: "Freelancer", location: "Marsa Alam", period: "07/2024 — 05/2025", bullets: [] },
      { title: "Dive Master", org: "Dive Red Sea", location: "Makadi Bay", period: "04/2024 — 07/2024", bullets: [] },
      {
        title: "Dive Master",
        org: "Eazy Divers International",
        location: "Sharm El Sheikh",
        period: "08/2021 — 03/2022",
        bullets: [
          "Guiding certified divers on recreational dives, ensuring safety and providing an enjoyable experience.",
          "Conducting dive site briefings to educate divers on the local marine life, underwater topography, and dive plan.",
          "Monitoring diving conditions, such as currents and visibility, and adjusting dive plans accordingly.",
          "Educating guests on environmentally responsible diving practices and promoting conservation efforts.",
          "Performing safety checks and conducting emergency procedures in the event of a diving incident.",
          "Assisting with dive equipment setup and maintenance, including tanks, regulators, and BCDs.",
        ],
      },
    ],
  },

  certifications: {
    eyebrow: "Certifications",
    title: "Certifications",
    items: [
      { name: "Advanced Open Water", date: "01/2018" },
      { name: "Emergency First Response", date: "10/2020" },
      { name: "Rescue Diver", date: "11/2020" },
      { name: "PADI Dive Master", date: "02/2022" },
      { name: "Graphic Design", date: "10/2022" },
      { name: "Multimedia Design", date: "02/2023" },
      { name: "PADI Instructor", date: "02/2026" },
    ],
  },

  skills: {
    eyebrow: "Skills",
    title: "Skills",
    items: [
      "Dive Planning", "Teaching", "Leadership", "Marine Life Knowledge",
      "Teamwork Skills", "Communication Skills", "Environmental Awareness",
      "Photoshop", "After Effects", "Audition", "Photography", "Video Editing",
    ],
  },

  education: {
    eyebrow: "Education",
    title: "Education",
    items: [
      {
        degree: "Bachelor of Physical Education (Diving Major)",
        school: "Helwan University",
        period: "09/2015 — 05/2020",
        detail: "Grade: 72.14%",
      },
    ],
  },

  languages: {
    eyebrow: "Languages",
    title: "Languages",
    items: [
      { name: "Arabic", level: "Native", value: 100 },
      { name: "English", level: "Intermediate", value: 60 },
    ],
  },

  creative: {
    eyebrow: "Creative / Graphic Design",
    title: "Beyond the Water",
    role: {
      title: "Graphic Designer / Motion Designer / Video Editor",
      org: "Plus One Up",
      location: "Cairo",
      period: "05/2020 — Present",
      bullets: [
        "Designing logos, packaging, brochures, and other marketing materials.",
        "Collaborating with clients and team members to understand project needs and goals.",
        "Creating digital and print ads and social media graphics.",
        "Conducting research and gathering inspiration to inform design decisions.",
        "Editing raw footage into polished, professional videos.",
        "Adding and timing sound effects, music, and voiceovers.",
        "Exporting videos in various formats for different platforms and devices.",
        "Utilizing industry-standard software such as Adobe After Effects.",
        "Developing and animating graphics, typography, and visual effects for video projects.",
        "Designing and animating logos and brand assets to be used in video content.",
      ],
    },
    project: { name: "SWOT TEAM", note: "Tourism Company" },
    behanceUrl: "https://www.behance.net/omaradv",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's Work Together",
    copy: "Available for dive guiding, instruction, and creative/video work. Reach out directly:",
    email: "omar.sheriff182@gmail.com",
    phone: "+0201147581907",
    location: "Maadi, Cairo, Egypt",
    linkedinUrl: "https://linkedin.com/in/omar-sherif-adv",
    behanceUrl: "https://www.behance.net/omaradv",
    instagramUrl: "https://www.instagram.com/omar_ssherif/",
  },

  footer: {
    tagline: "PADI Instructor",
  },
};
