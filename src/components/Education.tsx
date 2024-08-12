import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - 2028</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Engineering Technology (BET) Honours Degree"
            subTitle="University of Kelaniya (2024 - 2028)"
            // result="3.90/4"
            des="The Bachelor of Engineering Technology is a four-year degree programe. There are four paths in this degree. I am involved in Robatics and Automation. Robotics and automation involve the design and use of machines to perform tasks with precision and efficiency. Robotics focuses on creating robots, while automation uses technology to streamline processes, reducing human intervention. Together, they enhance productivity in industries like manufacturing, healthcare, and logistics."
          />
          <ResumeCard
            title="Bachelor of Information Technology (BIT) External degree"
            subTitle="University of Colombo (2023 - 2026)"
            // result="4.75/5"
            des=" The University of Colombo's External Degree Program offers flexible learning opportunities for students who wish to pursue higher education while managing other commitments. The program provides undergraduate degrees in various disciplines, enabling students to study remotely at their own pace. It is designed to maintain the university's high academic standards, offering quality education and recognized qualifications to a broader audience, including those who cannot attend regular on-campus classes. "
          />
          <ResumeCard
            title="GCE Advanced Level"
            subTitle="Kekunagolla National School (2019 - 2021)"
            result="Z-core 1.7107"
            des="Completed the GCE Avanced Level examination in the stream of Engineering Technology. Obtained 2B and C passes in GCE Advanced Level examination."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Since 2022 </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer & Web Developer"
            subTitle="CenoDigital - (2023 - Present)"
            result="United Kingdom"
            des="I am the Co-Founder of CenoDigital, where I work in multiple roles, including HR, Project Manager, Software Developer and Web Developer."
          />
          <ResumeCard
            title="Software Engineer & Trainer"
            subTitle="IT Starter (Pvt) Ltd - (2022 - 2024)"
            result="Sri Lanka"
            des="I am also associated with IT Starter Pvt Ltd, where I work as a project manager, content writer and web developer."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="CenoDigital - (2022 - Present)"
            result="Sri Lanka"
            des="Led cross-functional teams of 6 members to successfully deliver a project, enhancing client satisfication by 80%."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
