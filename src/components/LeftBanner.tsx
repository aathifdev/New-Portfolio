import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub, FaInstagram, FaLaravel, FaFacebook } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."," Web Developer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const handleDownload = () => {
    const cvUrl = 'Athifahd CV.pdf'
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
          A professional software engineer knows that writing clean, efficient code is both an art and a discipline. 
          Simplicity and clarity should always be prioritized, as they lead to maintainable and scalable solutions. 
          Remember, solving the problem comes before writing code.
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
            <a href="https://www.facebook.com/aathifdev?mibextid=qi2Omg&rdid=peG0wF5Zlcypax17&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FtLBMsBduzTQiYMvj%2F%3Fmibextid%3Dqi2Omg" target="_blank">
              <span className="bannerIcon">
                <FaFacebook />
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
              <span className="bannerIcon" onClick={handleDownload} style={{cursor: 'pointer'}}>
                <FaDownload />
              </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
