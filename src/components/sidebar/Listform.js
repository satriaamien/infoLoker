import { Fragment } from "react";
import Sidebar from "./Sidebar";
import Navbarr from "../navbar/Navbarr";
const Listform = (props) => {
  return (
    <Fragment>
      <Navbarr />
      <Sidebar />
      <div> Data List Form</div>
    </Fragment>
  );
};
export default Listform;
