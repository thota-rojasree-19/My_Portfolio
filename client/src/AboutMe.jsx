import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about" className="about-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          Hello! I'm <span className="highlight">Rojasree</span>, a passionate <strong>Full Stack Developer</strong> dedicated to crafting elegant and
          responsive web applications that deliver seamless user experiences.
        </p>
        <p>
          I specialize in <span className="highlight">JavaScript, React, Node.js,</span> and modern web technologies.
          I love turning ideas into reality by writing clean, efficient code and continuously learning new skills.
        </p>
        <p>
          Outside of coding, I enjoy exploring innovative tech trends, contributing to open source, and constantly
          challenging myself to grow professionally.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
