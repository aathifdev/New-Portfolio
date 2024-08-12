import { FaMobile, FaGlobe, FaShoppingCart } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";


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
            title="Sofware Develop"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<HiOutlineDesktopComputer />}
          />
          <Card
            title="Web Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<CgWebsite />}
          />
          <Card
            title="E-Commerce"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaShoppingCart />}
          />
          <Card
            title="Mobile Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaMobile />}
          />
          <Card
            title="Hosting Websites"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaGlobe />}
          />
          <Card
            title="Robatics & Automation"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<SiAntdesign />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
