import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, X, Eye } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiCloudinary } from "react-icons/si";
import { PROJECTS } from "../data/projects.js";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const TECH_ICONS = {
  "React.js": { icon: <SiReact size={14} />, color: "#61DAFB" },
  "Node.js": { icon: <SiNodedotjs size={14} />, color: "#339933" },
  "Express.js": { icon: <SiExpress size={14} />, color: "#ffffff" },
  "MongoDB": { icon: <SiMongodb size={14} />, color: "#47A248" },
  "Mongoose": { icon: <SiMongoose size={14} />, color: "#880000" },
  "Cloudinary": { icon: <SiCloudinary size={14} />, color: "#3448C5" },
};

export default function ProjectDetail() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const project = PROJECTS[0];

  // Returns the full detailed project view layout with gallery and descriptive breakdowns
  return (
    <div className="detail-page">
      <div className="container mb-12">
        <button className="back-btn" onClick={() => { navigate("/"); setTimeout(() => { const el = document.getElementById("projects"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 100); }}>
          <ArrowLeft size={16} /> Back to Portfolio
        </button>
      </div>

      <motion.div className="container" variants={stagger} initial="hidden" animate="visible">
        <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto mb-12">
          <span className="badge mb-4">{project.type}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">{project.title}</h1>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-8">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {project.technologies.map(tech => (
              <span key={tech} className="project-tech-tag" style={{ borderColor: TECH_ICONS[tech]?.color + "40" }}>
                {TECH_ICONS[tech] && <span style={{ color: TECH_ICONS[tech].color }}>{TECH_ICONS[tech].icon}</span>}
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink size={16} /> Live Demo</a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={16} /> Source Code</a>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-8">
          <img src={project.gallery[0].src} alt={project.gallery[0].label} className="detail-img-main cursor-pointer" onClick={() => setSelectedImage(project.gallery[0].src)} />
        </motion.div>

        <motion.div variants={fadeUp} className="detail-gallery-grid mb-16">
          {project.gallery.slice(1).map((img, i) => (
            <div key={i} className="gallery-card" onClick={() => setSelectedImage(img.src)}>
              <img src={img.src} alt={img.label} />
              <p>{img.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="glass-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white"><div className="w-1.5 h-6 bg-[var(--accent)] rounded-full" /> Overview</h3>
            <p className="text-white mb-4 leading-relaxed"><strong className="text-white">Problem:</strong> {project.details.problem}</p>
            <p className="text-white mb-8 leading-relaxed"><strong className="text-white">Solution:</strong> {project.details.solution}</p>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white"><div className="w-1.5 h-6 bg-[var(--accent)] rounded-full" /> Roles & Flow</h3>
            <ul className="space-y-4">
              {project.details.roles.map((r, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <span className="badge self-start text-[0.65rem]">{r.role}</span>
                  <span className="text-white text-sm leading-relaxed">{r.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white"><div className="w-1.5 h-6 bg-[var(--accent)] rounded-full" /> Infrastructure</h3>
            <ul className="space-y-4 mb-8">
              {project.details.storage.map((s, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <strong className="text-white">{s.name}</strong>
                  <span className="text-white text-sm">{s.desc}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white"><div className="w-1.5 h-6 bg-[var(--accent)] rounded-full" /> Why I Built It</h3>
            <p className="text-white text-sm leading-relaxed p-5 bg-[var(--bg-muted)] border border-[var(--border-base)] rounded-xl italic">
              "{project.details.whyBuilt}"
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="relative" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedImage(null)}><X size={20} /></button>
              <img src={selectedImage} alt="Preview" className="gallery-modal-img" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
