// Update email / phone / links anytime.

export const personal = {
  name: "Sahaya Antho Jenifer",
  shortName: "Jenifer",
  initials: "SAJ",
  role: "Full-Stack Developer · B.Tech IT",
  tagline:
    "Building thoughtful, full-stack web experiences with the MERN ecosystem.",
  objective:
    "Apply technical knowledge and problem-solving skills to develop efficient solutions while continuously learning and contributing in a collaborative, growth-oriented environment.",
  location: "Kovilpatti, Tamil Nadu, India",
  email: "jenisolomon2005@gmail.com",
  phone: "+91 70109 17269",
  availability: "Open to internships & full-time roles · 2026–27",
  // Set this to the path of your profile image (place image at app/frontend/src/assets/profile.jpg)
  photo: "/src/assets/profile.jpeg",
};

export const socials = [
  {
    label: "LinkedIn",
    handle: "sahaya-antho-jenifer",
    href: "https://linkedin.com/in/sahaya-antho-jenifer-5bba4528a",
    icon: "Linkedin",
  },
  {
    label: "GitHub",
    handle: "Sajenifer",
    href: "https://github.com/Sajenifer",
    icon: "Github",
  },
  {
    label: "LeetCode",
    handle: "Sahaya_Antho_Jenifer",
    href: "https://leetcode.com/u/Sahaya_Antho_Jenifer/",
    icon: "Code2",
  },
  {
    label: "GeeksforGeeks",
    handle: "jenisoloox1e",
    href: "https://www.geeksforgeeks.org/profile/jenisoloox1e",
    icon: "BookOpen",
  },
];

export const stats = [
  { value: "8.37", label: "CGPA · 5th Sem" },
  { value: "3+", label: "Full-Stack Projects" },
  { value: "2", label: "Internships" },
  { value: "3", label: "Events Organized" },
];

export const skills = [
  {
    category: "Programming Languages",
    icon: "Code",
    items: ["Java"],
  },
  {
    category: "Web Technologies",
    icon: "Globe",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "Boxes",
    items: ["React.js", "Node.js", "Express.js"],
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
  
];

export const projects = [
  {
    id: "p1",
    title: "Internship Application System",
    summary:
      "Full-stack platform that matches students to internships with skill-based scoring and admin verification.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Implemented a skill-based matching algorithm for student-internship fit.",
      "Designed role-based authentication and admin verification to prevent fake registrations.",
      "Optimized application workflow and DB operations, reducing manual effort.",
    ],
    
  },
  {
    id: "p2",
    title: "Content Management System (CMS)",
    summary:
      "Web-based CMS to create, manage, and organize digital content with multi-user CRUD workflows.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    highlights: [
      "Built complete CRUD modules to streamline content workflow for multiple users.",
      "Optimized DB operations and content retrieval for better performance.",
      "Designed a clean editorial UI focused on speed and clarity.",
    ],
    
  },
  {
    id: "p3",
    title: "Auto Call Cut-Off System",
    summary:
      "Productivity tool that auto-declines calls during meetings using Google Calendar, with emergency call passthrough.",
    stack: ["React Native", "Google Calendar API", "Android","Call service APIs"],
    highlights: [
      "Integrated Google Calendar API to auto-detect meetings and decline incoming calls.",
      "Customizable response messages and an emergency-call allow-list.",
      "Tracked missed and emergency calls to give users a clean follow-up dashboard.",
    ],
    
  },
];

export const internships = [
  {
    company: "Younder Bots Private Limited",
    role: "Frontend Developer Intern",
    location: "Kovilpatti, Tamil Nadu",
    points: [
      "Developed responsive UIs in React with reusable components and clean state management.",
      "Integrated REST APIs across full-stack features, improving usability and reliability.",
      "Collaborated on production releases and code reviews.",
    ],
  },
  {
    company: "Prodigy InfoTech",
    role: "Android Development Intern",
    location: "Remote",
    points: [
      "Built Android mini-projects exploring native UI components and lifecycle.",
      "Practiced layouts, intents, and event handling on real device builds.",
    ],
  },
];

export const education = [
  {
    school: "National Engineering College",
    degree: "B.Tech, Information Technology",
    score: "CGPA 8.37 (up to 5th sem)",
    location: "Kovilpatti, Tamil Nadu",
    period: "2023 — 2027",
  },
  {
    school: "Everest Mariappa Nadar Higher Secondary School",
    degree: "HSC (12th Standard)",
    score: "85.67%",
    location: "Kovilpatti, Tamil Nadu",
    period: "2022 — 2023",
  },
];

export const certifications = [
  {
    title: "Generative AI Software Development",
    issuer: "Simplilearn",
  },
  {
    title: "Database Design",
    issuer: "Oracle",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
  },
];

export const eventsParticipated = [
  {
    title: "Coding Event — AAA College",
    date: "03 Apr 2024",
    note: "Solved programming problems under time constraints; sharpened logical thinking and accuracy.",
  },
  {
    title: "Debug the Code — MEBCO College",
    date: "19 & 20 Feb 2025",
    note: "Identified and fixed errors in given programs; improved attention to code flow.",
  },
  {
    title: "Hackathon 2025 — MEBCO College",
    date: "19 & 20 Feb 2025",
    note: "Team-based hackathon building real-world solutions under tight timelines.",
  },
  {
    title: "Hack Among Us — Heritage Institute of Technology, Kolkata",
    date: "10 & 11 Mar 2026",
    note: "Coding challenges and logical tasks with cross-college collaboration.",
  },
];

export const eventsConducted = [
  {
    title: "Bug Bash — Coding Contest",
    role: "Organizer",
    body: "Two-round contest (paper-based error spotting + system debugging) at college symposium. Led planning, coordination, and round management.",
  },
  {
    title: "Squodex — Web Arena",
    role: "Student Coordinator",
    body: "Web development event with UI redesign + HTML/CSS template rounds. Handled participant flow and event ops.",
  },
  {
    title: "CodeNet — CSI Event",
    role: "Student Coordinator",
    body: "OS / C / Networks quiz round + a hidden-message hunt inside HTML & JS files. Co-managed planning & smooth execution.",
  },
];

export const volunteer = [
  {
    role: "Press — Incharge",
    org: "Information Technology Association (ITA)",
  },
  {
    role: "Technical Executive",
    org: "Computer Society of India (CSI)",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];