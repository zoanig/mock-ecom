import AnimatedButton from "../Components/AnimatedButton";
import { BgCircles } from "../Components/BgCircles";
import FeaturedProducts from "../Components/FeaturedProducts";
import HeroSection from "../Components/HeroSection";
import ValueProposition from "../Components/ValueProposition"

const Home = () => {
  return (
    <>
    <BgCircles />
        <HeroSection />
        <ValueProposition />
        <FeaturedProducts />
        <div className="flex justify-center p-10">
          <AnimatedButton value={"Explore More"} onClick={() => {}} transparent={true} />
        </div>
    </>
  );
};

export default Home;
