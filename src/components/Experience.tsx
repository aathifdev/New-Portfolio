import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Since 2022 </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer & Web Developer"
            subTitle="CenoDigital - (2023 - Present)"
            result="Sri Lanka"
            des="I am the Co-Founder of CenoDigital, where I work in multiple roles, including HR, Project Manager, Software Developer and Web Developer."
          />
          <ResumeCard
            title="Software Engineer & Trainer"
            subTitle="IT Starter (Pvt) Ltd - (2022 - 2024)"
            result="Sri Lanka"
            des="I am also associated with IT Starter Pvt Ltd, where I work as a project manager, content writer and web developer."
          />
          {/* <ResumeCard
            title="Full Stack Developer"
            subTitle="CenoDigital - (2022 - Present)"
            result="Sri Lanka"
            des="Led cross-functional teams of 6 members to successfully deliver a project, enhancing client satisfication by 80%."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
