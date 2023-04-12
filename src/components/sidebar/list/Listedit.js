import { useEffect } from "react";
import Navbarr from "../../navbar/Navbarr";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
const Listedit = () => {
  const [condition, setCondition] = useState(false);
  const [myData, setMyData] = useState(null);
  const [idEdit, setIdEdit] = useState("");

  const [dataSubmit, setDataSubmit] = useState({
    company_name: "",
    job_type: "",
    job_tenure: "",
    company_city: "",
  });

  useEffect(() => {
    if (condition === false) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((resp) => {
          setMyData(resp.data.data);
          console.log(resp.data.data);
        });
      setCondition(true);
    }
  }, [setCondition, condition]);

  const inputClick = (e) => {
    const value = e.target.value;
    setIdEdit(value);
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${value}`)
      .then((res) => {
        console.log(res.data);
        const { company_name, job_type, job_tenure, company_city } = res.data;
        setDataSubmit({
          company_name,
          job_type,
          job_tenure,
          company_city,
        });
      })
      .catch((err) => alert(err));
    // setDataSubmit()
    // const { company_name, job_type, job_tenure, company_city } = value;
    // setDataSubmit({
    //   company_name,
    //   job_type,
    //   job_tenure,
    //   company_city,
    // });
    // console.log(value);
  };
  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setDataSubmit({ ...dataSubmit, [name]: value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const idData = idEdit;
    console.log(idData);
    console.log(dataSubmit);
    const { company_name, job_type, job_tenure, company_city } = dataSubmit;
    axios
      .put(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
        { company_name, job_type, job_tenure, company_city },
        {
          headers: { Authorization: "Bearer" + Cookies.get("token") },
        }
      )
      .then((res) => {
        setCondition(false);
        alert("Data Has Been Update");
      });
  };
  return (
    <>
      <Navbarr />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Company Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Job Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tenure
                    </th>
                    <th scope="col" className="px-6 py-3">
                      City
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myData !== null &&
                    myData.map((item) => {
                      return (
                        <tr
                          key={item.id}
                          className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        >
                          <td className="px-6 py-4">{item.company_name}</td>
                          <td className="px-6 py-4">{item.job_type}</td>
                          <td className="px-6 py-4">{item.job_tenure}</td>
                          <td className="px-6 py-4">{item.company_city}</td>
                          <td className="px-6 py-4">
                            <button
                              className="text-cyan-600"
                              onClick={inputClick}
                              value={item.id}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <div className="mt-5">
              <form onSubmit={handlerSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="company_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                    onChange={inputHandler}
                    name="company_name"
                    value={dataSubmit.company_name}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="job_type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Type
                  </label>
                  <input
                    type="text"
                    id="job_type"
                    name="job_type"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                    onChange={inputHandler}
                    value={dataSubmit.job_type}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="job_tenure"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tenure
                  </label>
                  <input
                    type="text"
                    id="job_tenure"
                    name="job_tenure"
                    onChange={inputHandler}
                    value={dataSubmit.job_tenure}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="company_city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="company_city"
                    name="company_city"
                    onChange={inputHandler}
                    value={dataSubmit.company_city}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Listedit;
