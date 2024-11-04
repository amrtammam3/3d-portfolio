import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="full stack developer react-laravel"
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
             I am passionate about building responsive, user-centric web applications. Skilled in both front-end and back-end technologies, I thrive on solving complex problems and transforming ideas into functional, engaging
             digital experiences. My passion for continuous learning and collaboration drives me to stay updated with
            industry trends and best practices. I enjoy collaborating with diverse teams to bring projects to life and
            exceed client expectations. 
        </p>{" "}
        <br />
        <p>
        i brings together elegant front-end design and powerful back-end architecture. My work bridges the gap between user experience and technical performance, ensuring each solution is scalable, resilient, and designed to meet business goals. 
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <a href="https://github.com/amrtammam3"><AiFillGithub className="social-btn" /></a>
          <a href="https://www.linkedin.com/in/amr-tammam-885562177/"><AiFillLinkedin className="social-btn" /></a>   
          
          <div>
            <h3>01104595495</h3>
            <p>amrtammam30@gmail.com</p>
          </div>
                 
          
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="/Amr Tammam.pdf" className="primary-btn">
            Download Resume
          </a>
          <a href="#" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;