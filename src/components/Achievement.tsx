import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achivements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Water Rocket Comptition"
            subTitle="Organized by the Space Application Division of the Arthur C. Clarke Institute."
            result="view"
            link="https://nodejs.org/en"
            des="I am proud to have won the 3rd place at the annual water rocket competition in 2015."
          />
          <ResumeCard
            title="2nd Water Rocker Compatition"
            subTitle="organized by the Asia-Pacific Regional Space Agency Forum, held in Bali, Indonesia."
            result="view"
            link="https://laravel.com/"
            des=" I was also selected for the second competition held in Bali, Indonesia. Organized by the Asia-Pacific Regional Space Agency Forum."
          />
          <ResumeCard
            title="Robotics Workshop"
            subTitle="organized by SCCIP Japan Co. Ltd."
            result="view"
            link="https://laravel.com/"
            des=" I participated in a robotics workshop and created a small robot, organized by SCCIP Japan Co. Ltd."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achivements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Python Certificate"
            subTitle="CODL - University of Moratuwa"
            result="view"
            link="https://laravel.com/"
            des=" The CODL Python Certificate typically refers to a certification provided by a learning platform or organization for completing a course on Python programming. "
          />
          <ResumeCard
            title="Web Development Certificate"
            subTitle="CODL - University of Moratuwa"
            result="view"
            link="https://laravel.com/"
            des=" The CODL Web Development Certificate typically represents a certification awarded for completing a web development course or program offered by a specific institution or platform. "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
