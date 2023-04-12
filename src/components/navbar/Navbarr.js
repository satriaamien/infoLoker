import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
const Navbarr = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <div>
          <Link to="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              InfoLoker
            </span>
          </Link>
        </div>
        <div className="flex md:order-2 text-center ">
          {!Cookies.get("token") && (
            <Link to="/login">
              <Button>Login</Button>
              <Navbar.Toggle />
            </Link>
          )}
          {Cookies.get("token") && (
            <div>
              <Button onClick={handleLogout}>Logout</Button>
              <Navbar.Toggle />
            </div>
          )}
        </div>
        <div>
          <Navbar.Collapse>
            <Link to="/">
              <Navbar.Link>Beranda</Navbar.Link>
            </Link>
            <Link to="/job-vacancy">
              <Navbar.Link>Lowongan</Navbar.Link>
            </Link>
            {Cookies.get("token") && (
              <Link to="/dashboard">
                <Navbar.Link>Dashboard</Navbar.Link>
              </Link>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};
export default Navbarr;
