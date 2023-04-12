import ContentAudience from "./ContentAudience";
import classes from "./content.module.css";
import SubContent1 from "./Subcontent1";
import SubContent2 from "./Subcontent2";
const Content = () => {
  return (
    <>
      <div className={`sm:container sm-auto mx-auto mt-10 ${classes.cont} `}>
        <ContentAudience />
        <SubContent1 />
        <SubContent2 />
      </div>
    </>
  );
};
export default Content;
