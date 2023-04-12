import { Accordion } from "flowbite-react";
import { useContext, useState } from "react";
import { GlobalContext } from "../../store/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./Search.module.css";
const Search = (props) => {
  const { validate, setValidate } = useContext(GlobalContext);
  const [filterSearch, setFilterSearch] = useState({
    job_type: "",
    job_tenure: "",
    company_city: "",
  });
  const [search, setSearch] = useState("");
  const [allData, setAllData] = useState(null);
  // const [filterJobType, setFilterJobType] = useState(null);

  const handleChangeSearch = (event) => {
    const searchData = event.target.value;
    console.log(searchData);
    setSearch(searchData);
  };

  // useEffect(() => {
  //   axios
  //     .get("https://dev-example.sanbercloud.com/api/job-vacancy")
  //     .then((resp) => {
  //       const data = resp.data.data;
  //       const datajob = data.map((item) => item.data.job_type);
  //       console.log(datajob);
  //       setFilterJobType(datajob);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidate(true);
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((resp) => {
        const data = resp.data.data;
        // console.log(data);

        // const index = data.findIndex(
        //   (element) =>
        //     element.company_name.toLowerCase() === search.toLowerCase()
        // );
        // console.log("index", data[index]);
        // setSearch(data[index]);

        // const searchDataName = data.filter((item) =>
        //   item.company_name.toLowerCase().includes(search.toLowerCase())
        // );
        // console.log(searchDataName);

        const hasilsearchData = data.filter((item) => {
          return Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase());
        });
        console.log(hasilsearchData);
        setAllData(hasilsearchData);

        // if (searchDataName === true && searchData === true) {
        //   // setSearch([...searchData]);
        //   console.log("asik");
        // } else {
        //   console.log("salah");
        // }
      });
    setValidate(false);
    setSearch("");
  };

  const handleChangeFilter = (e) => {
    setFilterSearch({ ...filterSearch, [e.target.name]: e.target.value });
  };

  const handlerFilterSubmit = (e) => {
    e.preventDefault();
    setValidate(true);

    console.log(filterSearch);
    const fetchData = async () => {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((resp) => {
          const data = resp.data.data;
          console.log(data);

          const filterData = data.filter((item) => {
            return (
              item.job_tenure.toLowerCase() ===
                filterSearch.job_tenure.toLowerCase() ||
              item.job_type.toLowerCase() ===
                filterSearch.job_type.toLowerCase() ||
              item.company_city.toLowerCase() ===
                filterSearch.company_city.toLowerCase()
            );
          });
          setAllData(filterData);
          console.log("filterData", filterData);
        })
        .catch((err) => alert("data error"));
    };
    fetchData();
    setFilterSearch({
      job_type: "",
      job_tenure: "",
      company_city: "",
    });
    setValidate(false);
  };
  console.log(validate);
  return (
    <div>
      {console.log("allData", allData)}
      <div>
        <div className="text-3xl text-gray-700  font-bold mb-1">
          Let's Hiring Work With InfoLoker!
        </div>
        <div className="text-xl text-gray-600 font-medium mb-2">
          Easy to apply
        </div>
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
                placeholder="Search"
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
            onClick={() => {
              setValidate(true);
            }}
          >
            <span className="">Reset</span>
          </button>
        </div>
        <form onSubmit={handlerFilterSubmit}>
          <div className="mt-5">
            <Accordion alwaysOpen={true}>
              <Accordion.Panel>
                <Accordion.Title>Filter</Accordion.Title>
                <Accordion.Content>
                  <div className="mb-2 text-gray-500 dark:text-gray-400">
                    <div>
                      <label
                        htmlFor="small-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Job type
                      </label>
                      <input
                        onChange={handleChangeFilter}
                        value={filterSearch.job_type}
                        name="job_type"
                        type="text"
                        id="small-input"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mb-2 text-gray-500 dark:text-gray-400">
                    <div>
                      <label
                        htmlFor="small-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Job Tenure
                      </label>
                      <input
                        onChange={handleChangeFilter}
                        value={filterSearch.job_tenure}
                        type="text"
                        id="small-input"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="job_tenure"
                      />
                    </div>
                  </div>
                  <div className="mb-2 text-gray-500 dark:text-gray-400">
                    <div>
                      <label
                        htmlFor="small-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        City
                      </label>
                      <input
                        onChange={handleChangeFilter}
                        value={filterSearch.company_city}
                        type="text"
                        id="small-input"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="company_city"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Filter
                  </button>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </form>
      </div>
      <div className="flex flew-wrap gap-6 mt-5 mb-5">
        {/* {allData === null && !validate && <p>Pencarian tidak tersedia</p>} */}
        {allData !== null &&
          !validate &&
          allData.map((item) => {
            return (
              // <Link to="/job-vacancy" key={item.id} className="">
              <div
                key={item.id}
                className={`${classes.card} max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
              >
                <Link to={`/job-vacancy/${item.id}`}>
                  <img
                    src={`${item.company_image_url}`}
                    className="rounded-t-lg"
                    alt="logo"
                  />
                </Link>
                <div className="p-5">
                  <Link to={`/job-vacancy/${item.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.company_name}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.title}
                  </p>
                  <Link
                    Link
                    to={`/job-vacancy/${item.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              // </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Search;
