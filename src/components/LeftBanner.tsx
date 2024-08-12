import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub, FaInstagram, FaLaravel } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";
import {resume} from "../assets/CV/Athifahd CV.pdf";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."," Web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Athif </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider ">
          Highly skilled web developer with experience in designing, developing, 
          and maintaining websites and web applications. Proficient in HTML, CSS, JavaScript, and 
          various web development frameworks such as React, NextJs, Laravel and Bootstrap. Strong 
          understanding of responsive design and cross-browser compatibility. Ability to effectively 
          communicate with clients and team members to deliver successful projects on time and within budget.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/aathifdev" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/aathifdev/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.instagram.com/aathifdev?igsh=MWR0aG92Z25pY21jOQ==" target="_blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaLaravel />
            </span>
          </div>
          
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Download Resume
          </h2>
          <div className="flex gap-4">
            <a href={resume} target="_blank">
              <span className="bannerIcon">
                <FaDownload />
              </span>
            </a>
          </div>
        </div>
      </div>

    </FadeIn>
  );
};

export default LeftBanner;
