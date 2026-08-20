// Shared project data
export const PROJECTS = [
  {
    id: 1,
    slug: "university-assignment-portal",
    title: "University Assignment Portal",
    type: "Full Stack Web Application",
    description:
      "A centralized assignment submission and approval platform designed to replace scattered submissions through email and messaging platforms.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary"],
    liveUrl: "https://assignmentportal2026.vercel.app/",
    githubUrl: "https://github.com/rahul1454singh",
    previewImage: "/Screenshot 2026-08-11 125040.png",
    gallery: [
      { src: "/Screenshot 2026-08-11 125040.png", label: "Login Interface" },
      { src: "/Screenshot 2026-08-11 165444.png", label: "Admin Dashboard" },
      { src: "/Screenshot 2026-08-11 165523.png", label: "Student Dashboard" },
      { src: "/Screenshot 2026-08-11 165605.png", label: "Professor Dashboard" },
    ],
    details: {
      problem:
        "Students often submit assignments through scattered email or messaging channels, making submissions difficult to organize and review.",
      solution:
        "A centralized web platform where students can submit assignments and professors can review and approve/reject them.",
      roles: [
        { role: "ADMIN", desc: "Creates and manages student and professor accounts, ensuring secure platform access." },
        { role: "STUDENT", desc: "Uploads, edits, and deletes assignment submissions. Tracks real-time status updates and communicates directly with professors via integrated chat." },
        { role: "PROFESSOR", desc: "Views and downloads student assignments. Reviews submissions, updates approval status, and provides feedback through real-time chat with students." },
      ],
      storage: [
        { name: "MongoDB", desc: "Stores structured application data such as users and assignment information." },
        { name: "Cloudinary", desc: "Stores uploaded assignment files/PDFs." },
      ],
      whyBuilt:
        "My objective was to engineer a comprehensive, real-world system that transcends typical academic projects. By architecting this platform from the ground up, I gained practical expertise in designing secure RESTful APIs, implementing role-based access control, managing complex database schemas, and handling cloud-based file processing within a robust deployment pipeline.",
    },
  },
];

export const CERTIFICATES = [
  { title: "Programming in C", file: "/Programming in C -Certificate.pdf", type: "PDF" },
  { title: "Programming Fundamentals Python \u2013 Part 1", file: "/Programming Fundamentals Python - Part 1 Certificate.pdf", type: "PDF" },
  { title: "Programming Fundamentals Python \u2013 Part 2", file: "/Programming Fundamentals  Python - Part 2 Certificate.pdf", type: "PDF" },
  { title: "Linux Fundamentals", file: "/linux_ceterficate.pdf", type: "PDF" },
  { title: "HTML Certificate", file: "/HTML-Certificate.png", type: "Image" },
  { title: "Fundamentals of PHP", file: "/fundamantal php.pdf", type: "PDF" },
  { title: "Design Thinking", file: "/Design Thinking  certificate.pdf", type: "PDF" },
  { title: "CN Infonis", file: "/cn infonis  certificate.pdf", type: "PDF" },
  { title: "Apply AI \u2013 Analyze Customer Reviews", file: "/Apply_AI-_Analyze_Customer_Reviews_certificate_rahul1616-be23-chitkarauniversity-edu-in_72ec981b-ac1b-4d7c-9dcf-c6c647492414.pdf", type: "PDF" },
];
