import React from "react";
import {
  Image,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <>
      {/* Replace SVG with Image */}
      <img
        src="/wave1.svg" // Use the correct image path
        alt="Wave Background"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
      <ContactWrapper id="about">
        <div className="Container">
          <div className="SectionTitle">About Me</div>
          <div className="BigCard">
            <ScrollAnimation animateIn="fadeInLeft">
              <Image
                src="/youngboy.png"
                alt="youngboy"
              />
            </ScrollAnimation>
            <div className="AboutBio">
              <ScrollAnimation animateIn="fadeInLeft">
                Hello! My name is <strong>Kumar Ummaleti</strong>. I’m a computer science professional with expertise in AI/ML, web technologies, and data analysis. I’m currently pursuing my B.Tech in Computer Science and Engineering with a specialization in AI/ML at Vellore Institute of Technology-AP, Amaravati.
              </ScrollAnimation>
              <br />

              <ScrollAnimation animateIn="fadeInLeft">
                My passion for technology began with a strong focus on problem-solving. During my journey, I have gained valuable experience through various projects. I’ve worked with machine learning algorithms, web development technologies, and cloud platforms like Azure.
              </ScrollAnimation>

              <br />

              <ScrollAnimation animateIn="fadeInLeft">
                I’m especially excited about working on innovative AI/ML solutions, building user-friendly applications, and exploring data-driven insights. I’ve also been actively involved in leadership roles, such as being a co-lead in the Microsoft Student Chapter Club.
              </ScrollAnimation>

              {/* Resume Button */}
              <br />
              <ScrollAnimation animateIn="fadeInLeft">
                <a
                  className="btn PrimaryBtn"
                  href="https://drive.google.com/file/d/1Hbysyd88YArT4ElN3UFqp5aFjLmItosw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    textDecoration: "none",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "linear-gradient(135deg, #2575fc, #6a11cb)";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 15px rgba(37, 117, 252, 0.3)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "linear-gradient(135deg, #6a11cb, #2575fc)";
                    e.target.style.transform = "none";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Check out my Resume
                </a>
              </ScrollAnimation>

            </div>
          </div>
        </div>
      </ContactWrapper>
    </>
  );  
}

export default About;
