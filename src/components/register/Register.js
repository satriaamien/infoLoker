import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [regInput, setRegInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setRegInput({ ...regInput, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, password } = regInput;
    axios
      .post("https://backendexample.sanbersy.com/api/register", {
        password,
        name,
        email,
      })
      .then((res) => {
        const { user, token } = res.data;
        console.log(res);
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("user", JSON.stringify(user), { expires: 1 });
        navigate("/");
        // console.log(res.data);
      });
  };

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={submitHandler}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="font-semibold mb-5 text-center  text-gray-700">
              Register Page
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={regInput.name}
                onChange={inputHandler}
              />
            </div>
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
                value={regInput.email}
                onChange={inputHandler}
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
                minLength="8"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="password"
                value={regInput.password}
                onChange={inputHandler}
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Daftar
              </button>
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
export default Register;
