import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
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
            des=" Yet bed any for travelling assistance indulgence unpleasing Not thoughts all exercise blessing. 
            Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
            src={projectThree}
          />
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
          <ProjectsCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
          />
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
