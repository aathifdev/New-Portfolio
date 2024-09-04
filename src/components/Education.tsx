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
          <h2 className="text-3xl md:text-4xl font-bold">Education Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Engineering Technology (BET) Honours Degree"
            subTitle="University of Kelaniya (2024 - 2028)"
            result="Pending"
            des="The Bachelor of Engineering Technology is a four-year degree programe. There are four paths in this degree. I am involved in Robatics and Automation."
          />
          <ResumeCard
            title="Bachelor of Information Technology (BIT) External degree"
            subTitle="University of Colombo (2023 - 2026)"
            result="Pending"
            des=" The University of Colombo's External Degree Program offers flexible learning opportunities for students who wish to pursue higher education while managing other commitments. "
          />
          <ResumeCard
            title="GCE Advanced Level"
            subTitle="Kekunagolla National School (2019 - 2021)"
            result="Z-core 1.7107"
            des="Completed the GCE Avanced Level examination in the stream of Engineering Technology. Obtained 2B and C passes in GCE Advanced Level examination."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
