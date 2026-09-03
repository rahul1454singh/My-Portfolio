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
  {
    id: 2,
    slug: "khanahub",
    title: "KhanaHub",
    type: "Full Stack Web Application",
    description:
      "A full-stack, real-time food delivery web application that handles the entire lifecycle of a food order: from browsing the menu to the delivery partner navigating to the customer's house.",
    technologies: ["React (Vite)", "CSS Variables", "Supabase", "PostgreSQL", "Deno (Edge Functions)", "Cloudinary", "Razorpay", "React-Leaflet", "OpenStreetMap", "Lucide React"],
    liveUrl: "https://khanahub.vercel.app/",
    githubUrl: "https://github.com/rahul1454singh/KhanaHub",
    previewImage: "/Screenshot 2026-09-03 214302.png",
    gallery: [
      { src: "/Screenshot 2026-09-03 214302.png", label: "Customer Menu & Landing Interface" },
      { src: "/Screenshot 2026-09-03 214328.png", label: "Our Menu and Secure Payment via Razorpay" },
      { src: "/Screenshot 2026-09-03 214354.png", label: "Owner Dashboard / Owner Panel" },
      { src: "/Screenshot 2026-09-03 214414.png", label: "Owner Can Edit Any Item" },
      { src: "/Screenshot 2026-09-03 214515.png", label: "Delivery Boy Live Location Toward Order Location & Send OTP" },
      { src: "/Screenshot 2026-09-03 214628.png", label: "Live Location of Delivery Boy (Customer Side)" },
      { src: "/Screenshot 2026-09-03 214637.png", label: "Customer Order Record" },
      { src: "/Screenshot 2026-09-03 215953.png", label: "Project Card (About Me Style)" },
    ],
    details: {
      problem:
        "Traditional food delivery apps often lack truly instant cross-platform updates, resulting in delayed notifications for customers and out-of-sync dashboards for restaurant owners and delivery partners.",
      solution:
        "A blazing-fast, real-time platform utilizing Supabase Realtime for instant synchronization across all user roles without page refreshes, and Cloudinary for optimized media delivery.",
      roles: [
        { role: "CUSTOMER", desc: "Browses a dynamic menu, filters by category/diet, drops a pin on an interactive Map, pays securely via Razorpay, and tracks their order status live (Pending ➔ Confirmed ➔ Out for Delivery ➔ Delivered)." },
        { role: "RESTAURANT OWNER", desc: "Uses a Live Order Hub that instantly alerts upon payment. Can Accept, Reject, and dispatch orders. Also features revenue analytics, top-selling items charts, and menu management." },
        { role: "DELIVERY PARTNER", desc: "Accesses an active delivery dashboard with Map routing to the customer's dropped pin, viewing fulfillment details to mark trips as 'Delivered'." },
      ],
      storage: [
        { name: "Supabase (PostgreSQL)", desc: "Powers the real-time database, authentication, and secure edge functions for payment verification." },
        { name: "Cloudinary", desc: "Hosts all media (hero video, logo, food images) utilizing f_auto and q_auto compression for instant mobile loading." },
      ],
      whyBuilt:
        "Designed to master real-time data sync, secure edge functions, and advanced media optimization. The challenge was ensuring perfect state synchronization between three distinct user dashboards simultaneously while keeping the application extremely fast and responsive.",
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
