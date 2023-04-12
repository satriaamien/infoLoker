import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import Navbarr from "../navbar/Navbarr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handlerInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    const { email, password } = input;
    axios
      .post("https://dev-example.sanbercloud.com/api/login", {
        email,
        password,
      })
      .then((res) => {
        const data = res.data;
        const { user, token } = data;
        console.log(data);
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("user", JSON.stringify(user), { expires: 1 });
        navigate("/");
      });
  };
  return (
    <div>
      <Navbarr />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={handlerSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={input.email}
                onChange={handlerInput}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Password
              </label>
              <input
                required
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="password"
                value={input.password}
                onChange={handlerInput}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to="/register"
              >
                Daftar
              </Link>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            ©2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
