import hero from "../../assets/hero.jpg";
import classes from "./hero.module.css";
// import Search from "../material/Search";

const Hero2 = () => {
  return (
    <>
      <div className="text-4xl text-gray-700  font-bold mb-1">
        Let's Hiring Work With InfoLoker!
      </div>
      <div className="text-2xl text-gray-600 font-medium mb-2 text-center">
        Easy to apply
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <div className={classes.wrap}>
      <img className="w-full opacity-80" src={hero} alt="HeroSection" />
      <div className={classes.item}>
        <Hero2 />
      </div>
    </div>
  );
};
export default Hero;
