import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  ContactWrapper,
  ContactContainer,
  LeftSide,
  RightSide,
  FormWrapper,
  Input,
  TextArea,
  Button,
  ContactDetails,
  ContactItem,
  SocialIcons,
  SocialIcon,
} from "./ContactElements";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("ummaletikumar@gmail.com");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_hyqhf4r", "template_0bmcmpc", templateParams, "eDBzH2LHBrhTPZH9l")
      .then(
        () => {
          alert("Message Sent Successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <br></br><br></br><br></br>
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <ContactContainer>
              {/* Left Side - Contact Form */}
              <LeftSide>
                <div className="SectionTitle">Leave a Message</div>
                <FormWrapper onSubmit={handleSubmit}>
                  <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                  <TextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                  <Button type="submit">Send Message</Button>
                </FormWrapper>
              </LeftSide>

              {/* Right Side - Contact Details */}
              <RightSide>
                <h2>Contact Information</h2>
                <br></br>
                <ContactDetails>
                  <ContactItem>
                    <FaPhone />
                    <span>+91 7893768111</span>
                  </ContactItem>
                  <ContactItem>
                    <span>ummaletikumar@gmail.com</span>
                    <Tooltip
                      PopperProps={{ disablePortal: true }}
                      open={showTooltip}
                      onClose={() => setShowTooltip(false)}
                      title="Copied!"
                      TransitionComponent={Zoom}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      placement="bottom"
                    >
                      <IconButton onClick={copyToClipboard}>
                        <MdContentCopy size={24} />
                      </IconButton>
                    </Tooltip>
                  </ContactItem>
                  <SocialIcons>
                    <SocialIcon href="https://www.linkedin.com/in/kumar-ummaleti-88a465230" target="_blank">
                      <FaLinkedin />
                    </SocialIcon>
                    <SocialIcon href="https://github.com/KumarUmmaleti" target="_blank">
                      <FaGithub />
                    </SocialIcon>
                  </SocialIcons>
                </ContactDetails>
              </RightSide>
            </ContactContainer>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
