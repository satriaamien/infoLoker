import axios from "axios";
import { Fragment } from "react";
import Sidebar from "./Sidebar";
import Navbarr from "../navbar/Navbarr";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Listdatatable = () => {
  const [myData, setMyData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [search, setSearch] = useState("");
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    setLoadingData(true);
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((resp) => {
        setMyData(resp.data.data);
        console.log(resp.data.data);
        setLoadingData(false);
      });
  }, []);

  const inputReset = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((resp) => {
        setMyData(resp.data.data);
        setLoadingData(false);
        setValidate(true);
      });
  };
  const handleChangeSearch = (event) => {
    const searchData = event.target.value;
    console.log(searchData);
    setSearch(searchData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidate(true);

    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((resp) => {
        const data = resp.data.data;
        const searchDataName = data.filter((item) =>
          item.company_name.toLowerCase().includes(search.toLowerCase())
        );
        console.log(searchDataName);
        if (searchDataName) {
          setMyData(searchDataName);
          // console.log(searchDataName);
          setValidate(false);
        }
        //  if (searchDataName === true && search === true) {
        //   // setSearch([...searchData]);
        //   console.log("asik");
        // } else {
        //   console.log("salah");
        // }
      });
  };

  return (
    <Fragment>
      <Navbarr />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex flex-wrap items-center  text-center justify-evenly h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <div>
              <Link
                to="/dashboard/list-job-vacancy/form"
                className="flex items-center p-2 text-gray-900 bg-blue-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 whitespace-nowrap font-medium ">
                  Data form
                </span>
              </Link>
            </div>
            <div>
              <Link
                to="/dashboard/list-job-vacancy/create"
                className="flex items-center p-2 text-gray-900 bg-blue-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 whitespace-nowrap font-medium ">
                  Create Form
                </span>
              </Link>
            </div>
            <div>
              <Link
                to="/dashboard/list-job-vacancy/edit"
                className="flex items-center p-2 text-gray-900 bg-blue-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 whitespace-nowrap font-medium ">
                  Edit Form
                </span>
              </Link>
            </div>
            <div>
              <Link
                to="/dashboard/list-job-vacancy/delete"
                className="flex items-center p-2 text-gray-900 bg-blue-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 whitespace-nowrap font-medium ">
                  Delete Form
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64">
        <div className="flex">
          <form onSubmit={handleSubmit} className="flex items-center w-full">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                value={search}
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Company Name"
                onChange={handleChangeSearch}
                required
              />
            </div>

            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={inputReset}
          >
            <span className="">Reset</span>
          </button>
        </div>

        <div key="">
          <div className="relative overflow-x-auto">
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
                </tr>
              </thead>
              <tbody>
                {myData !== null &&
                  !loadingData &&
                  validate &&
                  myData.map((item) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.company_name}
                        </th>
                        <td className="px-6 py-4">{item.job_type}</td>
                        <td className="px-6 py-4">{item.job_tenure}</td>
                        <td className="px-6 py-4">{item.company_city}</td>
                      </tr>
                    );
                  })}

                {myData !== null &&
                  !loadingData &&
                  !validate &&
                  myData.map((item) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.company_name}
                        </th>
                        <td className="px-6 py-4">{item.job_type}</td>
                        <td className="px-6 py-4">{item.job_tenure}</td>
                        <td className="px-6 py-4">{item.company_city}</td>
                      </tr>
                    );
                  })}
                {myData !== null && loadingData && (
                  <p>Wait data, please wait</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Listdatatable;
