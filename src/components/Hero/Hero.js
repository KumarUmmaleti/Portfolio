import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Kumar.',
                  () => setShowSubtitle(true),
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A problem solver.',
                    1000,
                    'An innovative thinker.',
                    1000,
                    'A creative thinker.',
                    1000,
                    'An aspiring full-stack developer.',
                    1000,
                    "Let’s build something cool together.",
                    1000,
                    "Uhh... maybe check out my projects below!",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "You're still here? Seriously, my projects are awesome, go check them out!",
                    1000,
                    "You can scroll down, or... I could force you to 😉",
                    1000,
                    "Just kidding! Let’s connect!",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/youngboy.png"
                alt="youngboy"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img
                  src="/scroll-down.svg"
                  alt="scroll-down"
                />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
