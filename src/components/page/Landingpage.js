import Navbarr from "../navbar/Navbarr";
import Firstpage from "./Firstpage";
import Hero from "../hero/hero";
import Content from "../../content/Content";
import Footer from "../footer/Footer";
const Landingpage = () => {
  return (
    <>
      <Firstpage
        nav={<Navbarr />}
        herosection={<Hero />}
        content={<Content />}
        footer={<Footer />}
      />
    </>
  );
};
export default Landingpage;
