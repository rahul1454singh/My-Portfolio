import React, { useState } from 'react';

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
        { src: "Screenshot 2026-08-11 125058.png", label: "Admin Dashboard" },
        { src: "Screenshot 2026-08-11 125132.png", label: "Student Dashboard" },
        { src: "Screenshot 2026-08-11 125154.png", label: "Professor Dashboard" }
      ],
      details: {
        problem: "Students often submit assignments through scattered email or messaging channels, making submissions difficult to organize and review.",
        solution: "A centralized web platform where students can submit assignments and professors can review and approve/reject them.",
        roles: [
          { role: "ADMIN", desc: "Creates and manages student and professor accounts. Controls access." },
          { role: "STUDENT", desc: "Login, Select professor, Upload assignment, Submit assignment, Track workflow/status." },
          { role: "PROFESSOR", desc: "Login, View submissions, Review assignments, Approve/reject submissions." }
        ],
        storage: [
          { name: "MongoDB", desc: "Stores structured application data such as users and assignment information." },
          { name: "Cloudinary", desc: "Stores uploaded assignment files/PDFs." }
        ],
        whyBuilt: "My objective was to engineer a comprehensive, real-world system that transcends typical academic projects. By architecting this platform from the ground up, I gained practical expertise in designing secure RESTful APIs, implementing role-based access control, managing complex database schemas, and handling cloud-based file processing within a robust deployment pipeline."
      }
    }
  ];

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="nav-brand">Rahul Singh</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-actions">
            <div className="nav-socials">
              <a href="https://github.com/rahul1454singh" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rahul-singh-3239662b9/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <button onClick={() => setIsResumeOpen(true)} className="btn-secondary">Resume</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="section">
        <div className="container hero-wrapper">
          <div className="hero-content">
            <span className="hero-label">Computer Science Undergraduate</span>
            <h1 className="hero-title">Rahul Singh</h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-desc">
              I'm a Computer Science student who enjoys building full-stack web apps. I like connecting clean, easy-to-use interfaces with solid backend systems and databases to build complete, working products.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View Featured Project</a>
              <button onClick={() => setIsResumeOpen(true)} className="btn-secondary">View Resume</button>
            </div>
            <div className="career-status">
              <div className="status-dot"></div>
              <div>
                <p className="status-text">Open to Full-Time &amp; Remote Opportunities</p>
                <p className="status-loc">Open to relocation &middot; Open to remote</p>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-inner">
              <img src="nd.png" alt="Rahul Singh" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section bg-light" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-text-container">
            <div className="about-text">
              <p>I am a Computer Science undergraduate at Chitkara University. I am deeply interested in full-stack development, focusing specifically on understanding the intricate mechanics of web applications—from the initial user interaction on the frontend down to database transactions and API routing on the backend.</p>
              <p>I thrive on debugging Scalable issues, continuously learning new technologies, and ensuring that every component of a system works seamlessly together.</p>
              <p>My ultimate goal is to grow through challenging, real-world development experiences, refining my architectural skills to eventually become a highly capable senior software engineer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Programming</h3>
              <div className="skill-list">
                <span className="skill-tag">C</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Frontend</h3>
              <div className="skill-list">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Vite</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <div className="skill-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Database & Storage</h3>
              <div className="skill-list">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Mongoose</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Cloudinary</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Tools</h3>
              <div className="skill-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Thunder Client</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Concepts</h3>
              <div className="skill-list">
                <span className="skill-tag">Authentication</span>
                <span className="skill-tag">Authorization</span>
                <span className="skill-tag">MVC</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Database-driven apps</span>
                <span className="skill-tag">Basic DSA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container project-showcase">
          <h2 className="section-title">Featured Project</h2>
          
          {projects.map(project => (
            <div key={project.id}>
              <div className="project-hero">
                <div className="project-hero-content">
                  <p className="project-type">{project.type}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
                  </div>
                  <div className="project-actions">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">Live Demo</a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
                  </div>
                </div>
                
                <div className="project-screenshots-row">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} style={{ position: 'relative' }}>
                      <img 
                        src={img.src} 
                        alt={img.label} 
                        className="screenshot-preview" 
                        onClick={() => setSelectedImage(img.src)} 
                      />
                      <p style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 500, marginTop: '0.5rem', color: 'var(--text-gray)' }}>{img.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-details-grid">
                <div>
                  <div className="detail-section">
                    <h4>Overview</h4>
                    <p><strong>Problem:</strong> {project.details.problem}</p>
                    <p><strong>Solution:</strong> {project.details.solution}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>User Roles</h4>
                    <ul>
                      {project.details.roles.map(r => (
                        <li key={r.role}><strong>{r.role}:</strong> {r.desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="detail-section">
                    <h4>Data & Storage</h4>
                    <ul>
                      {project.details.storage.map(s => (
                        <li key={s.name}><strong>{s.name}:</strong> {s.desc}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4>Why I Built It</h4>
                    <p>{project.details.whyBuilt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="edu-card">
            <h3>Chitkara University</h3>
            <p className="edu-subtitle">Himachal Pradesh, India</p>
            <div className="edu-meta">
              <p>B.E. Computer Science and Engineering</p>
              <p>2023 – 2027 (Expected Graduation: August 2027)</p>
              <p>Current: 7th Semester</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME CTA */}
      <section className="section">
        <div className="container">
          <div className="resume-cta">
            <h2>Professional Resume</h2>
            <p>View my complete professional background, education, and technical skills.</p>
            <button onClick={() => setIsResumeOpen(true)} className="btn-primary">Open Resume Viewer</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-wrapper">
            <div className="contact-card">
              <h4>Email</h4>
              <a href="mailto:rahullsingh506@gmail.com">rahullsingh506@gmail.com</a>
            </div>
            <div className="contact-card">
              <h4>Phone / WhatsApp</h4>
              <p>+977 9864292613</p>
            </div>
            <div className="contact-card">
              <h4>Social Profiles</h4>
              <a href="https://github.com/rahul1454singh" target="_blank" rel="noreferrer" style={{ display: 'block', marginBottom: '0.25rem' }}>GitHub</a>
              <a href="https://www.linkedin.com/in/rahul-singh-3239662b9/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Rahul Singh. Built for real-world impact.</p>
      </footer>

      {/* RESUME MODAL */}
      {isResumeOpen && (
        <div className="modal-overlay" onClick={() => setIsResumeOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">Resume - Rahul Singh</span>
              <button className="modal-close" onClick={() => setIsResumeOpen(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <iframe src="fullstac.pdf" title="Resume PDF Viewer" className="resume-iframe"></iframe>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE GALLERY MODAL */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <div className="modal-header" style={{ border: 'none', justifyContent: 'flex-end', padding: '1rem' }}>
              <button className="modal-close" onClick={() => setSelectedImage(null)} style={{ color: 'white' }}>&times;</button>
            </div>
            <div className="modal-body" style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'transparent' }}>
              <img src={selectedImage} alt="Enlarged screenshot" className="gallery-modal-img" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
