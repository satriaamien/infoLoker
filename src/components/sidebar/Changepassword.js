import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbarr from "../navbar/Navbarr";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
const Changepassword = () => {
  // const [password, setPassword] = useState("");
  const [password, setPassword] = useState("");
  const user = JSON.parse(Cookies.get("user"));
  const navigate = useNavigate();
  const getId = user.id;
  useEffect(() => {
    console.log(getId);
    if (getId !== null) {
      axios
        .post(
          `https://dev-example.sanbercloud.com/api/change-password/${getId}}`,
          {
            headers: { Authorization: "Bearer" + Cookies.get("token") },
          }
        )
        .then((res) => {
          // Cookies.get("token", JSON.stringify(user), { expires: 1 });
          // console.log(Cookies.get("user"));
          console.log(res);
        });
    }
  }, [getId]);

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    const fetchData = () => {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/change-password/${getId}}`,
          { password },
          {
            headers: { Authorization: "Bearer" + Cookies.get("token") },
          }
        )
        .then((res) => {
          console.log(res);
          navigate("/");
        });
      // const password = input;
    };
    fetchData();
    // const password = input;
  };

  return (
    <Fragment>
      <Navbarr />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex items-center justify-center align-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <form
              onSubmit={handleSubmit}
              className="flex justify-center flex-col"
            >
              <div>
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  Hallo, {user.name}. Masukkan Password baru anda :
                  {/* {Cookies.get("user")} */}
                </p>
              </div>
              <div>
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  {/* {Cookies.get("user")} */}
                </p>
              </div>
              <div className="mb-4">
                <input
                  onChange={inputChangeHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  on
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">1</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Changepassword;
