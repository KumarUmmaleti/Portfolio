import React from "react";
import { stackList } from "../data/ProjectData";
import { Technologies, Tech, TechImg, TechName } from "./About/AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function TechnologiesSection() {
  return (
    <div className="Container" id="technologies">
      <br></br><br></br><br></br>
      <div className="SectionTitle">Skills</div>
      <div className="BigCard">
        <Technologies>
          {stackList.map((stack, index) => (
            <ScrollAnimation animateIn="fadeInLeft" key={index}>
              <Tech className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            </ScrollAnimation>
          ))}
        </Technologies>
        </div>
      </div>
  );
}

export default TechnologiesSection;
