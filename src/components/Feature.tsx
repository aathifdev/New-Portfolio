import { FaMobile, FaGlobe, } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { VscDebugConsole } from "react-icons/vsc";


const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Web Development"
            des="Web development refers to tasks associated with creating and maintaining websites that run online on a browser."
      icon={<CgWebsite />}
          />
          <Card
            title="Sofware Development"
            des="Software development refers to a set of computer science activities that are dedicated to the process of creating, designing, deploying, and supporting software."
            icon={<HiOutlineDesktopComputer />}
          />
          <Card
            title="Mobile Development"
            des="Mobile application development is the process of creating software applications that run on a mobile device."
            icon={<FaMobile />}
          />
          <Card
            title="Bug Fixing"
            des="Effective bug fixing is crucial for maintaining software quality and performance."
            icon={<VscDebugConsole />}
          />
          <Card
            title="Hosting Websites"
            des="Web hosting involves a service provider reserving server space for a website's data, enabling online access."
            icon={<FaGlobe />}
          />
          <Card
            title="Robatics & Automation"
            des="A robot is a programmable machine capable of carrying out tasks autonomously, in the case of Robotnik, or semi-autonomously."
            icon={<SiAntdesign />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
