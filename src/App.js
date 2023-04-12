import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Landingpage from "./components/page/Landingpage";
import Dashboardpage from "./components/dashboard/Dashboardpage";
import Listdatatable from "./components/sidebar/Listdatatable";
// import Dataform from "./components/sidebar/Dataform";
import Listform from "./components/sidebar/Listform";
import Profile from "./components/sidebar/Profile";
import Changepassword from "./components/sidebar/Changepassword";
import Lowongan from "./components/page/Lowongan";
import Halamandetail from "./components/halamandetail/Halamandetail";
import GlobalProvider from "./store/GlobalContext";
import Login from "./components/login/Login";
import Cookies from "js-cookie";
import Register from "./components/register/Register";
import Listedit from "./components/sidebar/list/Listedit";
import Listdelete from "./components/sidebar/list/Listdelete";
import Listcreate from "./components/sidebar/list/Listcreate";

function App() {
  const LoginRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    }
  };
  const DashboardRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return <Navigate to={"/"} />;
    } else if (Cookies.get("token") !== undefined) {
      return props.children;
    }
  };
  const RegisterRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    }
  };
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Landingpage />}></Route>
            <Route
              path="/login"
              element={
                <LoginRoute>
                  <Login />
                </LoginRoute>
              }
            ></Route>
            <Route
              path="/register"
              element={
                <RegisterRoute>
                  <Register />
                </RegisterRoute>
              }
            ></Route>
            <Route path="/job-vacancy" element={<Lowongan />}></Route>
            <Route
              path="/job-vacancy/:idData"
              element={<Halamandetail />}
            ></Route>
            <Route
              path="/dashboard"
              element={
                <DashboardRoute>
                  <Dashboardpage />
                </DashboardRoute>
              }
            ></Route>
            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <DashboardRoute>
                  <Listdatatable />
                </DashboardRoute>
              }
            ></Route>
            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                <DashboardRoute>
                  <Listform />
                </DashboardRoute>
              }
            ></Route>
            <Route
              path="/dashboard/list-job-vacancy/create"
              element={
                <DashboardRoute>
                  <Listcreate />
                </DashboardRoute>
              }
            ></Route>
            <Route
              path="/dashboard/list-job-vacancy/edit"
              element={
                <DashboardRoute>
                  <Listedit />
                </DashboardRoute>
              }
            ></Route>
            <Route
              path="/dashboard/list-job-vacancy/delete"
              element={
                <DashboardRoute>
                  <Listdelete />
                </DashboardRoute>
              }
            ></Route>
            <Route path="/dashboard/profile" element={<Profile />}></Route>
            <Route
              path="/dashboard/change-password/:IdData"
              element={
                <DashboardRoute>
                  <Changepassword />
                </DashboardRoute>
              }
            ></Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
