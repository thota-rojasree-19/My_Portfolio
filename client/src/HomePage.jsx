
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { SiMongodb } from 'react-icons/si';

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import "./HomePage.css";

function HomePage() {
  const sections = ["about", "education", "skills", "projects", "experience"];
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  // Animate skills bars on mount
  const [animateSkills, setAnimateSkills] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimateSkills(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  // Skills data
  const skills = {
    frontend: [
      { name: "React", level: 90, icon: <FaReact /> },
      { name: "JavaScript (ES6+)", level: 85, icon: <FaJsSquare /> },
      { name: "HTML5", level: 100, icon: <FaHtml5 /> },
      { name: "CSS3", level: 100, icon: <FaCss3Alt /> },
    ],
    backend: [
      { name: "Node.js", level: 85, icon: <FaNodeJs /> },
      { name: "Express.js", level: 80, icon: <FaNodeJs /> },
      { name: "MongoDB", level: 85, icon: <FaDatabase /> },
      { name: "REST APIs", level: 85, icon: <FaGithub /> },
    ],
    tools: [
      { name: "Git & GitHub", level: 90, icon: <FaGitAlt /> },
      { name: "Docker", level: 60, icon: <FaDocker /> },
    ],
  };

  // Projects data
  const projects = [
    {
      title: "Book & Dine Hub",
      description:
        "Book & Dine Hub is a user-friendly web application designed to streamline the reservation process for restaurants. It enables customers to easily book tables and rooms, place food orders, and manage their bookings online. The system features real-time availability checks, secure user authentication, and automated notifications to enhance both customer experience and restaurant operations.",
      tech: ["HTML5,React", "CSS3", "Node.js,MongoDB"],
      techIcons: [<FaHtml5 key="html" />,<FaReact key="react" />, <FaCss3Alt key="css" />, <FaNodeJs key="node.js" />,<FaGithub key="github" />,<SiMongodb key="mongodb" />],
    },
    {
      title: "HireHive",
      description:
        "HireHive is a user-friendly job portal that connects job seekers with employers, offering easy job search and application features. It helps candidates find the right jobs and employers find the best talent quickly and efficiently.",
      tech: ["HTML5,CSS3,React", "Node.js", "MongoDB"],
      techIcons: [<FaHtml5 key="html" />,<FaReact key="react" />, <FaCss3Alt key="css" />, <FaNodeJs key="node.js" />,<FaGithub key="github" />,<SiMongodb key="mongodb" />],
    },
  ];

  // Experience data
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Scihubss",
      duration: "May 2025 - Present",
      description: "Developing and maintaining web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality products on time."
    },
    {
      role: "Android Developer",
      company: "1Stop",
      duration: "October 2024 - November 2024",
      description: "Worked as an Android Development Intern at 1Stop, where I contributed to building and optimizing mobile app features using Kotlin and Android Studio. Gained hands-on experience in UI/UX design, API integration, and real-world app deployment processes."
    }
   
  ];

  // Render skill bars
  const renderSkillBars = (skillList) =>
    skillList.map(({ name, level, icon }) => (
      <div key={name} className="skill-bar">
        <span className="skill-name">
          <span className="skill-icon">{icon}</span> {name}
        </span>
        <div className="progress-bar" aria-label={`${name} skill level`}>
          <div
            className={`progress ${animateSkills ? "filled" : ""}`}
            style={{ "--progress-width": `${level}%` }}
            aria-valuenow={level}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    ));

  return (
    <motion.div
      className="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >

<nav className="navbar">
  {/* Logo (Optional) */}
  {/* <div className="logo">Rojasree</div> */}

  {/* Hamburger Menu */}
  <div
    className={`hamburger ${menuOpen ? "active" : ""}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
    role="button"
    tabIndex={0}
    onKeyPress={(e) => {
      if (e.key === "Enter") setMenuOpen(!menuOpen);
    }}
  >
    <span></span>
    <span></span>
    <span></span>
  </div>

  {/* Desktop Nav */}
  <ul className="nav-links">
    {sections.map((section) => (
      <li key={section}>
        <a
          href={`#${section}`}
          className={active === section ? "active" : ""}
          onClick={() => handleLinkClick(section)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      </li>
    ))}
  </ul>

  {/* Mobile Nav */}
  <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
    {sections.map((section) => (
      <a
        key={section}
        href={`#${section}`}
        className={active === section ? "active" : ""}
        onClick={() => {
          handleLinkClick(section);
          setMenuOpen(false); // close menu after click
        }}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </a>
    ))}
  </div>
</nav>




      {/* Intro Section */}
      <section className="intro section">
        <h1>
          Hi, I'm <span className="name">Rojasree</span>
        </h1>
        <h2>
           A{" "}
          <span className="typewriter">
            <Typewriter
              words={["Full Stack Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p>
          Welcome to my portfolio website. Here you'll find my projects, skills,
          and how to contact me.
        </p>
        <a href="#contact" className="btn-primary">
          Let's Connect
        </a>

        <img src="roja.jpeg" className="profile-photo"></img>
      </section>

      {/* About Section */}
      <section id="about" className="section about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            Hello! I'm <span className="highlight"> Rojasree</span>,a passionate{" "}
            <strong>Full Stack Developer</strong>dedicated to crafting elegant and
            responsive responsive web applications that deliver seamless user experiences using MERN stack.
          </p>
          <p>
            I specialize in<span className="highlight">JavaScript, React,Node.js</span>,and modern web technologies.
            I love turning ideas into reality by writing clean, efficient code and continuously learning new skills.
          </p>
          <p>
            Outside of coding,I enjoy exploring innovative tech trends,contributing to open source,and constantly
            challenging myself to grow professionally.
          </p>
          <p>
            I love the process of bringing ideas to life through code.Whether it’s crafting interactive front-end interfaces or designing efficient backend systems,I find joy in every step of building something meaningful.I’m particularly passionate about learning new technologies,experimenting with modern UI/UX designs,and solving real-world problems with innovative solutions.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-container">
        <h2 className="section-title">Education</h2>
        <ul className="education-list">
          <li>
            <strong>B.Tech in Computer Science Engineering</strong> 
            <pre> Rajiv Gandhi University of Knowledge Technologies. (2022 - Pursuing)</pre>
            <pre><strong>CGPA:8.68</strong> </pre>
          </li>
          <li>
            <strong>Pre-University Course </strong>
            <pre> Rajiv Gandhi University of Knowledge Technologies. (2020 - 2022)</pre>
            <pre><strong>CGPA:8.98</strong> </pre>
          </li>
          <li>
            <strong>Secondary Board of Education</strong>
            <pre> A.P.Model School. (2019 - 2020)</pre>
            <pre><strong>CGPA:10</strong> </pre>


          </li>
        </ul>




      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-category">
          <h3>Frontend</h3>
          {renderSkillBars(skills.frontend)}
        </div>

        <div className="skills-category">
          <h3>Backend</h3>
          {renderSkillBars(skills.backend)}
        </div>

        <div className="skills-category">
          <h3>Tools & Technologies</h3>
          {renderSkillBars(skills.tools)}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(({ title, description, techIcons, github, demo }, idx) => (
            <motion.div
              key={title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="tech-icons">{techIcons.map((icon, i) => (
                <span key={i} className="tech-icon">{icon}</span>
              ))}</div>
              <div className="project-links">
                <a href={github} target="_blank" rel="noreferrer" className="btn-secondary">
                  GitHub
                </a>
                {demo && (
                  <a href={demo} target="_blank" rel="noreferrer" className="btn-secondary">
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-container">
        <h2>Experience</h2>
        {experiences.map(({ role, company, duration, description }, i) => (
          <motion.div
            key={`${role}-${i}`}
            className="experience-item"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
          >
            <h3>{role}</h3>
            <h4>{company}</h4>
            <p className="duration">{duration}</p>
            <p>{description}</p>
          </motion.div>
        ))}
      </section>
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-description">Feel free to reach out for collaborations or just a friendly hello! 😊</p>
        <div className="contact-links">
            <a href="mailto:rojii3824@gmail.com" className="contact-link" target="_blank" rel="noreferrer">
            📧 rojii3824@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/thota-rojasree-8b15b3280" className="contact-link" target="_blank" rel="noreferrer">
            💼 LinkedIn
            </a>
            <a href="https://github.com/thota-rojasree-19" className="contact-link" target="_blank" rel="noreferrer">
            🐙 GitHub
            </a>
           
        </div>
        </section>

    </motion.div>

    

  );
}

export default HomePage;


