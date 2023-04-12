// import Navbarlogout from "../navbar/Navbarlogout";
import DashboardMenu from "./Dashboardmenu";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import Dashboardcontent from "./Dashboardcontent";
import Navbarr from "../navbar/Navbarr";
const Dashboardpage = () => {
  return (
    <DashboardMenu
      // nav={<Navbarlogout />}
      nav={<Navbarr />}
      sidebar={<Sidebar />}
      content={<Dashboardcontent />}
      footer={<Footer />}
    />
  );
};
export default Dashboardpage;
