import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  ChevronRight, 
  ExternalLink,
  Code2,
  Layout,
  Database,
  Server,
  Terminal,
  BrainCircuit,
  FileText,
  Menu,
  X
} from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "University Assignment Portal",
      type: "Full Stack Web Application",
      description: "A centralized assignment submission and approval platform designed to replace scattered submissions through email and messaging platforms.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary"],
      liveUrl: "https://assignmentportal2026.vercel.app/",
      githubUrl: "https://github.com/rahul1454singh",
      gallery: [
        { src: "Screenshot 2026-08-11 125040.png", label: "Login Interface" },
        { src: "Screenshot 2026-08-11 165444.png", label: "Admin Dashboard" },
        { src: "Screenshot 2026-08-11 165523.png", label: "Student Dashboard" },
        { src: "Screenshot 2026-08-11 165605.png", label: "Professor Dashboard" }
      ],
      details: {
        problem: "Students often submit assignments through scattered email or messaging channels, making submissions difficult to organize and review.",
        solution: "A centralized web platform where students can submit assignments and professors can review and approve/reject them.",
        roles: [
          { role: "ADMIN", desc: "Creates and manages student and professor accounts, ensuring secure platform access." },
          { role: "STUDENT", desc: "Uploads, edits, and deletes assignment submissions. Tracks real-time status updates and communicates directly with professors via integrated chat." },
          { role: "PROFESSOR", desc: "Views and downloads student assignments. Reviews submissions, updates approval status, and provides feedback through real-time chat with students." }
        ],
        storage: [
          { name: "MongoDB", desc: "Stores structured application data such as users and assignment information." },
          { name: "Cloudinary", desc: "Stores uploaded assignment files/PDFs." }
        ],
        whyBuilt: "My objective was to engineer a comprehensive, real-world system that transcends typical academic projects. By architecting this platform from the ground up, I gained practical expertise in designing secure RESTful APIs, implementing role-based access control, managing complex database schemas, and handling cloud-based file processing within a robust deployment pipeline."
      }
    }
  ];

  // Optimized minimal animations for lag-free scrolling
  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-100' : 'py-5 bg-transparent'}`}
      >
        <div className="container nav-container">
          <a href="#home" className="nav-brand text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-green to-accent-green">Rahul Singh</a>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 list-none m-0 items-center">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => {
              const lower = item.toLowerCase();
              return (
                <li key={lower}>
                  <a 
                    href={`#${lower}`} 
                    className={`text-sm font-bold transition-all ${activeSection === lower ? 'text-primary-green border-b-2 border-primary-green pb-1' : 'text-slate-600 hover:text-primary-green'}`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
              <a href="https://github.com/rahul1454singh" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-primary-green transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/rahul-singh-3239662b9/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-primary-green transition-colors"><Linkedin size={20} /></a>
            </div>
            <a href="fullstac.pdf" target="_blank" rel="noreferrer" className="btn-secondary px-5 py-2 text-sm">
              Open Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-b border-gray-100 px-6 py-4"
          >
            <ul className="flex flex-col gap-4 list-none m-0">
              <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-600 hover:text-primary-green">About</a></li>
              <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-600 hover:text-primary-green">Skills</a></li>
              <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-600 hover:text-primary-green">Projects</a></li>
              <li><a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-600 hover:text-primary-green">Education</a></li>
              <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-600 hover:text-primary-green">Contact</a></li>
            </ul>
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100">
              <div className="flex gap-4">
                <a href="https://github.com/rahul1454singh" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-primary-green transition-colors"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/rahul-singh-3239662b9/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-primary-green transition-colors"><Linkedin size={24} /></a>
              </div>
              <a href="fullstac.pdf" target="_blank" rel="noreferrer" className="btn-secondary flex-1 text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Open Resume
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* HERO SECTION */}
      <section id="home" className="section hero-section relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 pt-12 pb-24 md:py-32">
          <motion.div 
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-primary-green text-sm font-bold tracking-wide uppercase mb-6">Computer Science Undergraduate</motion.span>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-4">Rahul Singh</motion.h1>
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl text-slate-600 font-semibold mb-6">Full Stack Developer</motion.h2>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
              I am a passionate software developer who enjoys building full-stack web apps. I like connecting clean, easy-to-use interfaces with solid backend systems and databases to build complete, working products.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
              <a href="#projects" className="btn-primary group">
                View Featured Project <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="fullstac.pdf" target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2">
                <FileText size={18} /> Open Resume
              </a>
            </motion.div>
            <motion.div variants={fadeIn} className="flex items-center gap-4 px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl shadow-sm">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900">Open to Full-Time &amp; Remote</p>
                <p className="text-xs text-slate-500">Relocation &middot; Remote</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-shrink-0 relative w-64 h-64 md:w-96 md:h-96 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          >
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 relative z-10">
              <img src="nd.png" alt="Rahul Singh" className="w-full h-full object-cover" />
            </div>
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-green/20 to-accent-green/20 blur-3xl -z-10 rounded-[3rem]"></div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section relative bg-white">
        <motion.div 
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 variants={fadeIn} className="section-title">About Me</motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div variants={fadeIn} className="relative">
              <div className="absolute -inset-4 bg-green-50 rounded-[3rem] -z-10 rotate-3"></div>
              <div className="glass-card p-10 md:p-12 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-green text-white flex items-center justify-center rounded-xl shadow-lg">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">My Mission</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  My ultimate goal is to grow through challenging, real-world development experiences, refining my architectural skills to eventually become a highly capable senior software engineer.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={staggerContainer} className="flex flex-col gap-6">
              <motion.div variants={fadeIn} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-green-200 transition-colors">
                <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Full Stack Enthusiast</h4>
                <p className="text-slate-600">I am deeply interested in full-stack development, focusing specifically on understanding the intricate mechanics of web applications—from the frontend UI all the way to backend database transactions.</p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-green-200 transition-colors">
                <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Problem Solver</h4>
                <p className="text-slate-600">I thrive on debugging scalable issues, continuously learning new technologies, and ensuring that every component of a complex system works seamlessly together.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section bg-slate-50 relative">
        <motion.div 
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 variants={fadeIn} className="section-title">Technical Expertise</motion.h2>
          <motion.div variants={staggerContainer} className="skills-grid">
            {[
              { icon: <Code2 className="text-primary-green" />, title: "Programming", skills: ["C", "C++", "Java", "JavaScript", "SQL"] },
              { icon: <Layout className="text-primary-green" />, title: "Frontend", skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Vite"] },
              { icon: <Server className="text-primary-green" />, title: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
              { icon: <Database className="text-primary-green" />, title: "Database & Storage", skills: ["MongoDB", "Mongoose", "MySQL", "Cloudinary"] },
              { icon: <Terminal className="text-primary-green" />, title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Thunder Client"] },
              { icon: <BrainCircuit className="text-primary-green" />, title: "Concepts", skills: ["Authentication", "Authorization", "MVC", "Basic DSA"] }
            ].map((category, idx) => (
              <motion.div key={idx} variants={fadeIn} className="skill-card hover-glow">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                  <div className="p-2 bg-green-50 rounded-lg">{category.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800 m-0">{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section bg-slate-50">
        <motion.div 
          className="container project-showcase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
        >
          <motion.h2 variants={fadeIn} className="section-title">Featured Project</motion.h2>
          
          {projects.map(project => (
            <motion.div key={project.id} variants={fadeIn} className="flex flex-col gap-12">
              {/* Top Banner */}
              <div className="glass-card flex flex-col lg:flex-row overflow-hidden border border-gray-100 p-0 shadow-lg group">
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-green-50 text-primary-green text-xs font-bold uppercase tracking-wider rounded-md mb-4 self-start">{project.type}</span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary group flex items-center gap-2 shadow-md hover:shadow-xl">
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2">
                      <Github size={16} /> Source Code
                    </a>
                  </div>
                </div>
                
                {/* Hero Feature Image (first from gallery) */}
                <div className="flex-1 min-h-[300px] lg:min-h-[auto] relative overflow-hidden bg-slate-100 flex items-center justify-center border-l border-gray-100">
                  <img 
                    src={project.gallery[0].src} 
                    alt={project.gallery[0].label} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 cursor-pointer"
                    onClick={() => setSelectedImage(project.gallery[0].src)} 
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-r-3xl pointer-events-none"></div>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.gallery.slice(1).map((img, idx) => (
                  <div key={idx} className="glass-card p-2 hover:-translate-y-1 transition-transform cursor-pointer" onClick={() => setSelectedImage(img.src)}>
                    <div className="overflow-hidden rounded-xl h-48 bg-slate-100">
                      <img src={img.src} alt={img.label} className="w-full h-full object-cover object-top" />
                    </div>
                    <p className="text-center text-sm font-semibold mt-3 mb-1 text-slate-600">{img.label}</p>
                  </div>
                ))}
              </div>

              {/* Technical Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="glass-card p-8 md:p-10">
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-4"><div className="w-2 h-6 bg-primary-green rounded-full"></div> Overview</h4>
                    <p className="text-slate-600 mb-3"><strong className="text-slate-800">Problem:</strong> {project.details.problem}</p>
                    <p className="text-slate-600"><strong className="text-slate-800">Solution:</strong> {project.details.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-4"><div className="w-2 h-6 bg-primary-green rounded-full"></div> Roles & Flow</h4>
                    <ul className="space-y-4">
                      {project.details.roles.map((r, idx) => (
                        <li key={idx} className="flex flex-col gap-1">
                          <strong className="text-slate-800 bg-slate-100 px-2 py-1 rounded-md self-start text-sm">{r.role}</strong> 
                          <span className="text-slate-600 text-sm leading-relaxed">{r.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="glass-card p-8 md:p-10 flex flex-col gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-4"><div className="w-2 h-6 bg-primary-green rounded-full"></div> Infrastructure</h4>
                    <ul className="space-y-4">
                      {project.details.storage.map((s, idx) => (
                        <li key={idx} className="flex flex-col gap-1">
                          <strong className="text-slate-800 text-sm">{s.name}</strong>
                          <span className="text-slate-600 text-sm">{s.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-4"><div className="w-2 h-6 bg-primary-green rounded-full"></div> Why I Built It</h4>
                    <p className="leading-relaxed text-slate-600 italic bg-green-50/50 p-6 rounded-2xl border border-green-100">"{project.details.whyBuilt}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section bg-white relative">
        <motion.div 
          className="container flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="w-full max-w-4xl text-center">
            <motion.h2 variants={fadeIn} className="section-title">Education</motion.h2>
            <motion.div variants={scaleUp} className="bg-slate-50 p-1 rounded-3xl border border-slate-100 shadow-sm inline-block w-full">
              <div className="bg-white rounded-[1.35rem] p-8 md:p-16 border border-slate-100 flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-green to-accent-green"></div>
                <div className="w-16 h-16 bg-green-50 text-primary-green flex items-center justify-center rounded-2xl mb-6 shadow-inner">
                  <BrainCircuit size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Chitkara University</h3>
                
                <div className="w-full max-w-xl bg-slate-50 rounded-2xl p-6 md:p-8 text-center border border-slate-100 shadow-sm transition-all hover:shadow-md">
                  <p className="font-extrabold text-xl md:text-2xl text-slate-800 mb-2">B.E. Computer Science</p>
                  <p className="text-slate-600 font-medium mb-4">Expected Graduation: 2027</p>
                  <p className="text-slate-800 font-semibold text-lg">Current CGPA: <span className="text-primary-green font-bold text-xl ml-1">7.19</span> / 10</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* RESUME CTA */}
      <section className="section bg-white relative">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
        >
          <motion.div variants={scaleUp} className="bg-slate-50 border border-slate-100 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-sm">
            <div className="w-16 h-16 bg-green-50 text-primary-green flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-inner">
              <FileText size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">Explore My Professional Journey</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Access my comprehensive resume detailing academic achievements, technical proficiencies, and project experiences.
            </p>
            <a 
              href="fullstac.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-primary-green text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-green-700 transition-all duration-200 text-base"
            >
              Open Resume
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section relative pb-32">
        <motion.div 
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 variants={fadeIn} className="section-title">Let's Connect</motion.h2>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.a variants={fadeIn} href="mailto:rahullsingh506@gmail.com" className="glass-card flex flex-col items-center justify-center p-8 md:p-12 hover:-translate-y-2 hover:shadow-xl transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="text-primary-green w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Email</h4>
              <span className="text-slate-600 font-medium group-hover:text-primary-green transition-colors text-center w-full truncate px-2">rahullsingh506@gmail.com</span>
            </motion.a>
            
            <motion.div variants={fadeIn} className="glass-card flex flex-col items-center justify-center p-8 md:p-12 hover:-translate-y-2 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="text-primary-green w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h4>
              <span className="text-slate-600 font-medium">+977 9864292613</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="glass-card flex flex-col items-center justify-center p-8 md:p-12 hover:-translate-y-2 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Github className="text-primary-green w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Profiles</h4>
              <div className="flex gap-4">
                <a href="https://github.com/rahul1454singh" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-primary-green hover:text-white transition-colors shadow-sm"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/rahul-singh-3239662b9/" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-primary-green hover:text-white transition-colors shadow-sm"><Linkedin size={24} /></a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <footer className="relative bg-white z-10 border-t border-gray-100">
        <p className="opacity-70">&copy; {new Date().getFullYear()} Rahul Singh. Built for real-world impact.</p>
      </footer>

      {/* IMAGE GALLERY MODAL */}
      {selectedImage && (
        <div className="modal-overlay backdrop-blur-xl bg-black/80" onClick={() => setSelectedImage(null)}>
          <motion.div 
            className="modal-content bg-transparent shadow-none" 
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="modal-header border-none justify-end p-4">
              <button className="modal-close text-white hover:text-gray-300 hover:rotate-90 transition-transform" onClick={() => setSelectedImage(null)}>&times;</button>
            </div>
            <div className="modal-body flex justify-center bg-transparent">
              <motion.img 
                src={selectedImage} 
                alt="Enlarged screenshot" 
                className="gallery-modal-img shadow-2xl rounded-xl ring-1 ring-white/10"
                layoutId={`img-${selectedImage}`}
              />
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default App;
