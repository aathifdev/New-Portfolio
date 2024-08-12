import { bannerImg } from "../assets";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[350px] h-[450px] lgl:w-[525px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[400px] h-[350px] lgl:w-[525px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadow-shadowOne flex justify-center items-center"></div>
    </FadeIn>
  );
};

export default RightBanner;
