import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import {
  Mail, ChevronRight, ExternalLink, Code2, Layers, Database,
  Server, Terminal, BrainCircuit, FileText, Menu, X, User,
  GraduationCap, Award, MessageSquare, Rocket, Shield, BookOpen,
  Cpu, FolderOpen, Eye, Star, ArrowRight, FileBadge, MapPin, Calendar
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaWhatsapp as Whatsapp } from "react-icons/fa";
import {
  SiC, SiCplusplus, SiJavascript, SiMysql, SiHtml5, SiCss,
  SiTailwindcss, SiReact, SiVite, SiNodedotjs, SiExpress,
  SiMongodb, SiMongoose, SiCloudinary, SiGit, SiGithub, SiPostman, SiOpenjdk,
} from "react-icons/si";
import { PROJECTS, CERTIFICATES } from "./data/projects.js";

/* ─── Motion ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Data ─── */
const NAV_ITEMS = [
  { label: "About",          href: "#about",         icon: <User size={13} /> },
  { label: "Skills",         href: "#skills",        icon: <Code2 size={13} /> },
  { label: "Projects",       href: "#projects",      icon: <FolderOpen size={13} /> },
  { label: "Education",      href: "#education",     icon: <GraduationCap size={13} /> },
  { label: "Certifications", href: "#certifications",icon: <Award size={13} /> },
  { label: "Contact",        href: "#contact",       icon: <MessageSquare size={13} /> },
];

const SKILL_CATEGORIES = [
  {
    icon: <Code2 size={15} />, title: "Programming",
    tiles: [
      { icon: <SiC />, color: "#A8B9CC", label: "C", tooltip: "C" },
      { icon: <SiCplusplus />, color: "#00599C", label: "C++", tooltip: "C++" },
      { icon: <SiOpenjdk />, color: "#ED8B00", label: "Java", tooltip: "Java" },
      { icon: <SiJavascript />, color: "#F7DF1E", label: "JS", tooltip: "JavaScript" },
      { icon: <SiMysql />, color: "#4479A1", label: "SQL", tooltip: "SQL" },
    ],
  },
  {
    icon: <Layers size={15} />, title: "Frontend",
    tiles: [
      { icon: <SiHtml5 />, color: "#E34F26", label: "HTML", tooltip: "HTML5" },
      { icon: <SiCss />, color: "#1572B6", label: "CSS", tooltip: "CSS3" },
      { icon: <SiTailwindcss />, color: "#06B6D4", label: "TW", tooltip: "Tailwind CSS" },
      { icon: <SiJavascript />, color: "#F7DF1E", label: "JS", tooltip: "JavaScript" },
      { icon: <SiReact />, color: "#61DAFB", label: "React", tooltip: "React.js" },
      { icon: <SiVite />, color: "#646CFF", label: "Vite", tooltip: "Vite" },
    ],
  },
  {
    icon: <Server size={15} />, title: "Backend",
    tiles: [
      { icon: <SiNodedotjs />, color: "#339933", label: "Node", tooltip: "Node.js" },
      { icon: <SiExpress />, color: "#ffffff", label: "Express", tooltip: "Express.js" },
      { icon: <Terminal size={22} />, color: "#8b5cf6", label: "REST", tooltip: "REST APIs" },
    ],
  },
  {
    icon: <Database size={15} />, title: "Database & Storage",
    tiles: [
      { icon: <SiMongodb />, color: "#47A248", label: "Mongo", tooltip: "MongoDB" },
      { icon: <SiMongoose />, color: "#880000", label: "Mongoose", tooltip: "Mongoose" },
      { icon: <SiMysql />, color: "#4479A1", label: "MySQL", tooltip: "MySQL" },
      { icon: <SiCloudinary />, color: "#3448C5", label: "CDN", tooltip: "Cloudinary" },
    ],
  },
  {
    icon: <Terminal size={15} />, title: "Tools",
    tiles: [
      { icon: <SiGit />, color: "#F05032", label: "Git", tooltip: "Git" },
      { icon: <SiGithub />, color: "#ffffff", label: "GitHub", tooltip: "GitHub" },
      { icon: <Terminal size={22} />, color: "#8b5cf6", label: "VSCode", tooltip: "VS Code" },
      { icon: <SiPostman />, color: "#FF6C37", label: "Postman", tooltip: "Postman" },
      { icon: <Terminal size={22} />, color: "#8b5cf6", label: "Thunder", tooltip: "Thunder Client" },
    ],
  },
  {
    icon: <BrainCircuit size={15} />, title: "Concepts",
    tiles: [
      { icon: <Shield size={22} />, color: "#8b5cf6", label: "Auth", tooltip: "Authentication" },
      { icon: <Shield size={22} />, color: "#8b5cf6", label: "Authz", tooltip: "Authorization" },
      { icon: <Layers size={22} />, color: "#8b5cf6", label: "MVC", tooltip: "MVC Pattern" },
      { icon: <BrainCircuit size={22} />, color: "#8b5cf6", label: "DSA", tooltip: "Basic DSA" },
    ],
  },
];

const TECH_ICONS = {
  "React.js": { icon: <SiReact size={12} />, color: "#61DAFB" },
  "Node.js": { icon: <SiNodedotjs size={12} />, color: "#339933" },
  "Express.js": { icon: <SiExpress size={12} />, color: "#ffffff" },
  "MongoDB": { icon: <SiMongodb size={12} />, color: "#47A248" },
  "Mongoose": { icon: <SiMongoose size={12} />, color: "#880000" },
  "Cloudinary": { icon: <SiCloudinary size={12} />, color: "#3448C5" },
};

/* ─── Main Component ─── */
const App = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State management for navigation, certificates display limit, and mobile menu toggle
  const [activeSection, setActiveSection] = useState("home");
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  // Scroll animation and active section tracking logic — triggers highlight each time a section enters viewport
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "education", "certifications", "contact"];
    const observer = new IntersectionObserver((entries) => {
      // Find the most visible section
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: "-40% 0px -60% 0px" });

    sections.forEach(sec => {
      const el = document.getElementById(sec);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);
  const project = PROJECTS[0];

  return (
    <div className="app-container">


      {/* Hero section — main introduction with name, title, profile image, and CTA buttons */}
      <section id="home" className="hero-section">
        <div className="ambient-glow ambient-glow-top" />
        <div className="ambient-glow ambient-glow-bottom" />
        <div className="container relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 pt-20">
          <motion.div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start" variants={stagger} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="section-eyebrow mb-4"><Cpu size={12} className="inline mr-2" />Computer Science Undergraduate</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">Rahul Singh</motion.h1>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--accent)" }}>Full Stack Developer</motion.h2>
            <motion.p variants={fadeUp} className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10" style={{ color: "var(--text-body)" }}>
              👋Hey , I'm an aspiring full-stack developer who loves bringing ideas to life through complete web applications — pairing clean, intuitive interfaces with solid backend systems and databases. I'm currently exploring full-stack development opportunities and open to remote work.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-4 w-fit mx-auto md:mx-0">
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#projects" className="btn-primary">View Featured Project</a>
                <a href="/fullstac.pdf" target="_blank" rel="noreferrer" className="btn-secondary"><FileText size={18} /> Open Resume</a>
              </div>
              <div className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-purple-500/40 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
                <span className="text-purple-400 font-medium text-sm tracking-wide">Open to Opportunities</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="relative mt-8 md:mt-0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="hero-img-frame">
              <img src="/nd.png" alt="Rahul Singh" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 z-10 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-[#1a1a1a] border border-[rgba(139,92,246,0.3)] text-[#8b5cf6] shadow-lg">
              <Star size={14} fill="currentColor" /> Full Stack
            </div>
          </motion.div>
        </div>
      </section>

      {/* About section — brief professional summary, core values, and background overview */}
      <section id="about" className="section" style={{ background: "var(--bg-base)" }}>
        <motion.div className="container" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "0px", amount: 0.1 }}>
          <div className="section-header">
            <motion.div variants={fadeUp} className="section-icon-tile"><User size={20} /></motion.div>
            <motion.span variants={fadeUp} className="section-eyebrow">Who I Am</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">About Me</motion.h2>
            <motion.div variants={fadeUp} className="title-underline" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="edu-card">
              <div className="edu-header" style={{ alignItems: "center", minHeight: "auto", marginBottom: "1.5rem" }}>
                <div className="edu-icon">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="edu-title mb-0 text-xl">My Mission</h3>
                </div>
              </div>
              <p className="edu-desc text-base">
                My ultimate goal is to grow through challenging, real-world development experiences, refining my architectural skills to eventually become a highly capable senior software engineer.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="edu-card">
              <div className="edu-header" style={{ alignItems: "center", minHeight: "auto", marginBottom: "1.5rem" }}>
                <div className="edu-icon">
                  <Layers size={24} />
                </div>
                <div>
                  <h3 className="edu-title mb-0 text-xl">Full Stack Enthusiast</h3>
                </div>
              </div>
              <p className="edu-desc text-base">
                I am deeply interested in full-stack development, focusing specifically on understanding the intricate mechanics of web applications—from the frontend UI all the way to backend database transactions.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="edu-card">
              <div className="edu-header" style={{ alignItems: "center", minHeight: "auto", marginBottom: "1.5rem" }}>
                <div className="edu-icon">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h3 className="edu-title mb-0 text-xl">Problem Solver</h3>
                </div>
              </div>
              <p className="edu-desc text-base">
                I thrive on debugging scalable issues, continuously learning new technologies, and ensuring that every component of a complex system works seamlessly together.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills section — renders skill and tech stack cards grouped by technical areas */}
      <section id="skills" className="section" style={{ background: "var(--bg-base)" }}>
        <motion.div className="container" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "0px", amount: 0.1 }}>
          <div className="section-header">
            <motion.div variants={fadeUp} className="section-icon-tile"><Code2 size={20} /></motion.div>
            <motion.span variants={fadeUp} className="section-eyebrow">What I Work With</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Technical Expertise</motion.h2>
            <motion.div variants={fadeUp} className="title-underline" />
          </div>
          <div className="skills-grid">
            {SKILL_CATEGORIES.map((cat, i) => (
              <motion.div key={i} variants={fadeUp} className="skill-category-card">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">{cat.icon}</div>
                  <span className="font-bold text-sm uppercase tracking-wider text-white font-sans">{cat.title}</span>
                </div>
                <div className="skill-tiles">
                  {cat.tiles.map((tile, j) => (
                    <span key={j} className="skill-tile" data-tooltip={tile.tooltip} style={{ "--tile-color": tile.color }}>
                      <span style={{ color: tile.color }}>{tile.icon}</span>
                      <span className="skill-label">{tile.label}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Project section — showcases primary portfolio piece with key metrics and tech stack */}
      <section id="projects" className="section" style={{ background: "var(--bg-base)" }}>
        <motion.div className="container" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "0px", amount: 0.1 }}>
          <div className="section-header">
            <motion.div variants={fadeUp} className="section-icon-tile"><Rocket size={20} /></motion.div>
            <motion.span variants={fadeUp} className="section-eyebrow">What I've Built</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Featured Projects</motion.h2>
            <motion.div variants={fadeUp} className="title-underline" />
          </div>
          <div className="flex flex-col gap-10">
            {PROJECTS.map((proj) => (
              <motion.div key={proj.id} variants={scaleUp} className="project-card-wrapper" onClick={() => navigate(`/project/${proj.slug}`)}>
                <div className="project-img-container">
                  <img src={proj.previewImage} alt="Project Preview" className="project-preview-img" />
                </div>
                <div className="project-content">
                  <span className="text-sm font-bold text-[var(--accent)] tracking-wider uppercase mb-2 block font-sans">{proj.type}</span>
                  <h3 className="text-3xl font-bold mb-3 text-white">{proj.title}</h3>
                  <p className="mb-6 text-base leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.technologies.map(tech => (
                      <span key={tech} className="project-tech-tag font-sans">
                        {TECH_ICONS[tech] && <span style={{ color: TECH_ICONS[tech].color }}>{TECH_ICONS[tech].icon}</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <button className="btn-primary py-2 px-5 text-sm" onClick={(e) => { e.stopPropagation(); navigate(`/project/${proj.slug}`); }}>
                      Details <ArrowRight size={14} />
                    </button>
                    {proj.liveUrl && (
                      <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="btn-secondary py-2 px-5 text-sm" onClick={e => e.stopPropagation()}>
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary py-2 px-5 text-sm" onClick={e => e.stopPropagation()}>
                        <Github size={14} /> Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education section — academic background displayed in aligned vertical cards */}
      <section id="education" className="section" style={{ background: "var(--bg-base)" }}>
        <motion.div className="container" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "0px", amount: 0.1 }}>
          <div className="section-header">
            <motion.div variants={fadeUp} className="section-icon-tile"><GraduationCap size={20} /></motion.div>
            <motion.span variants={fadeUp} className="section-eyebrow">Academic Background</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Education</motion.h2>
            <motion.div variants={fadeUp} className="title-underline" />
          </div>
          
          <div className="edu-grid">
            {/* Degree 1 */}
            <motion.div variants={scaleUp} className="edu-card">
              <div className="edu-header">
                <div className="edu-icon">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="edu-title">Bachelor of Engineering — Computer Science Engineering</h3>
                  <p className="edu-institution">Chitkara University</p>
                </div>
              </div>
              <div className="edu-meta">
                <div className="edu-meta-item">
                  <Calendar size={14} className="text-[var(--accent)]" /> 2023 - Expected 2027
                </div>
                <div className="edu-meta-item">
                  <MapPin size={14} className="text-[var(--accent)]" /> Himachal Pradesh, India
                </div>
              </div>
              <p className="edu-desc">
                Currently pursuing a Bachelor of Engineering. Maintaining a strong academic record with a CGPA of <span className="text-[var(--accent)] font-bold">7.42</span>.
              </p>
            </motion.div>

            {/* Degree 2 */}
            <motion.div variants={scaleUp} className="edu-card">
              <div className="edu-header">
                <div className="edu-icon">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="edu-title">Higher Secondary (XII)</h3>
                  <p className="edu-institution">Kathmandu Model College, Bagbazar</p>
                </div>
              </div>
              <div className="edu-meta">
                <div className="edu-meta-item">
                  <Calendar size={14} className="text-[var(--accent)]" /> 2021 - 2022
                </div>
                <div className="edu-meta-item">
                  <MapPin size={14} className="text-[var(--accent)]" /> Kathmandu, Nepal
                </div>
              </div>
              <p className="edu-desc">
                Completed Higher Secondary education with a focus on Physics, Chemistry, Computer Science, and Mathematics. Graduated with <span className="text-[var(--accent)] font-bold">71%</span>.
              </p>
              <div className="edu-tags">
                <span className="project-tech-tag font-sans">Mathematics</span>
                <span className="project-tech-tag font-sans">Physics</span>
                <span className="project-tech-tag font-sans">Problem Solving</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Certifications section — grid displaying earned certificates with PDF preview capabilities */}
      <section id="certifications" className="section" style={{ background: "var(--bg-base)" }}>
        <motion.div className="container" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "0px", amount: 0.1 }}>
          <div className="section-header">
            <motion.div variants={fadeUp} className="section-icon-tile"><Award size={20} /></motion.div>
            <motion.span variants={fadeUp} className="section-eyebrow">Credentials</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Certifications</motion.h2>
            <motion.div variants={fadeUp} className="title-underline" />
          </div>
          <div className="cert-grid">
            {CERTIFICATES.slice(0, showAllCertificates ? CERTIFICATES.length : 3).map((cert, i) => (
              <motion.div key={i} variants={fadeUp} className="cert-card">
                <div className="cert-preview">
                  {cert.type === "Image" ? (
                    <img src={cert.file} alt={cert.title} />
                  ) : (
                    <Document file={cert.file} loading={<div className="text-[var(--text-muted)] text-sm">Loading Preview...</div>} error={<div className="text-[var(--text-muted)] text-sm">Preview Unavailable</div>}>
                      <Page pageNumber={1} width={400} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                  )}
                </div>
                <div className="cert-content">
                  <span className="cert-type-badge font-sans"><FileText size={12} /> {cert.type}</span>
                  <h3 className="cert-title">{cert.title}</h3>
                  <a href={encodeURI(cert.file)} target="_blank" rel="noreferrer" className="cert-view-btn">
                    <Eye size={16} /> View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          {CERTIFICATES.length > 3 && (
            <div className="mt-12 flex justify-center">
              <button 
                className="btn-primary"
                onClick={() => setShowAllCertificates(!showAllCertificates)}
              >
                {showAllCertificates ? "Show Less Certificates" : "View All Certificates"}
              </button>
            </div>
          )}
        </motion.div>
      </section>

      {/* Contact section — links to email, github, linkedin, and whatsapp for direct communication */}
      <section id="contact" className="section" style={{ background: "var(--bg-base)" }}>
        <motion.div className="container" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "0px", amount: 0.1 }}>
          <div className="section-header">
            <motion.div variants={fadeUp} className="section-icon-tile"><MessageSquare size={20} /></motion.div>
            <motion.span variants={fadeUp} className="section-eyebrow">Get In Touch</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Let's Connect</motion.h2>
            <motion.div variants={fadeUp} className="title-underline" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.a variants={fadeUp} href="mailto:rahullsingh506@gmail.com" className="contact-card">
              <div className="contact-icon-wrap" style={{ "--icon-color": "var(--accent)", "--icon-glow": "rgba(139, 92, 246, 0.3)", color: "var(--accent)" }}>
                <Mail size={28} />
              </div>
              <div className="text-center">
                <span className="contact-label block mb-1">Email</span>
                <span className="contact-value">rahullsingh506@gmail.com</span>
              </div>
            </motion.a>
            <motion.div variants={fadeUp} className="contact-card">
              <div className="contact-icon-wrap" style={{ "--icon-color": "#25D366", "--icon-glow": "rgba(37, 211, 102, 0.3)", color: "#25D366" }}>
                <Whatsapp size={28} />
              </div>
              <div className="text-center">
                <span className="contact-label block mb-1">WhatsApp</span>
                <span className="contact-value">+977 9864292613</span>
              </div>
            </motion.div>
            <motion.a variants={fadeUp} href="https://github.com/rahul1454singh" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon-wrap" style={{ "--icon-color": "#ffffff", "--icon-glow": "rgba(255, 255, 255, 0.3)", color: "#ffffff" }}>
                <Github size={28} />
              </div>
              <div className="text-center">
                <span className="contact-label block mb-1">GitHub</span>
                <span className="contact-value font-sans">rahul1454singh</span>
              </div>
            </motion.a>
            <motion.a variants={fadeUp} href="https://www.linkedin.com/in/rahul-singh-3239662b9/" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon-wrap" style={{ "--icon-color": "#0A66C2", "--icon-glow": "rgba(10, 102, 194, 0.3)", color: "#0A66C2" }}>
                <Linkedin size={28} />
              </div>
              <div className="text-center">
                <span className="contact-label block mb-1">LinkedIn</span>
                <span className="contact-value">Rahul Singh</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </section>

      <footer style={{ background: "var(--bg-base)" }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rahul Singh. Built for real-world impact.</p>
        </div>
      </footer>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-[200] p-2 bg-[var(--bg-card)] border border-[var(--border-base)] rounded-lg shadow-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="md:hidden fixed inset-0 z-[140] bg-black/60 backdrop-blur-sm" 
              onClick={closeMenu} 
            />
            <motion.div 
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%" }} 
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-0 left-0 bottom-0 w-64 max-w-[80%] z-[150] bg-[var(--bg-base)] p-6 pt-20 flex flex-col border-r border-[var(--border-base)] shadow-2xl overflow-y-auto"
            >
              <a href="#home" onClick={closeMenu} className="text-2xl font-bold text-[var(--text-primary)] mb-8">Rahul</a>
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <a key={item.href} href={item.href} onClick={closeMenu} className={`mobile-nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}>
                    {item.icon} {item.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 mt-auto border-t border-[var(--border-base)]">
                <a href="https://github.com/rahul1454singh" target="_blank" rel="noreferrer" className="nav-link p-2" aria-label="GitHub"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/rahul-singh-3239662b9/" target="_blank" rel="noreferrer" className="nav-link p-2" aria-label="LinkedIn"><Linkedin size={24} /></a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Navbar component (Desktop) — handles navigation, scroll-spy active highlighting, and social links */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}
        className="navbar hidden md:block !z-[9999] bg-[#09090b]/70 backdrop-blur-xl" role="navigation" aria-label="Primary navigation"
      >
        <div className="nav-container">
          <a href="#home" className="nav-brand">Rahul</a>
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href.slice(1)}>
                <a href={item.href} className={`nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href="https://github.com/rahul1454singh" target="_blank" rel="noreferrer" className="nav-link" style={{padding: '0.4rem'}} aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/rahul-singh-3239662b9/" target="_blank" rel="noreferrer" className="nav-link" style={{padding: '0.4rem'}} aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default App;
