import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectFive, projectFour, projectOne, projectSix, projectThree, projectTwo,  } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Resturant Web"
            des=" Gericht restaurants are known for delivering the highest level of customer service.
            Guests expect elegant ambiance, upscale table settings, and a menu with higher price points. "
            src={projectOne}
            
          />
          <ProjectsCard
            title="Travel App"
            des=" We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. 
            We can help you on an adventure around the world in just one app"
            src={projectTwo}
          />
          <ProjectsCard
            title="Modern AI Web"
            des=" Moder AI empowers your business with cutting-edge AI solutions, enhancing efficiency and innovation. 
            Discover tailored AI services that drive growth, streamline operations, and unlock your potential."
            src={projectThree}
          />
          <ProjectsCard
            title="E-Commerce Website"
            des=" Experience immersive sound with AirPods Pro. Featuring active noise cancellation, 
            customizable fit, and superior audio quality, they deliver unparalleled listening comfort and clarity wherever you go."
            src={projectFour}
          />
          <ProjectsCard
            title="BUG Fixing"
            des=" Bug fixing is the process of identifying, analyzing, and resolving issues or flaws in software that cause it to behave unexpectedly, produce incorrect results, or perform inefficiently."
            src={projectFive}
          />
          <ProjectsCard
            title="Internet of Things (IOT) "
            des=" The Internet of Things (IoT) represents a significant technological advancement, where everyday objects are interconnected through the internet, allowing them to send and receive data. "
            src={projectSix}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
