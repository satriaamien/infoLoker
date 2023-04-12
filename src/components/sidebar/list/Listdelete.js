import Navbarr from "../../navbar/Navbarr";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Listdelete = () => {
  const [myData, setMyData] = useState(null);
  const [condition, setCondition] = useState(false);

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
    console.log("id", e.target.value);
    const idData = e.target.value;
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {
        headers: { Authorization: "Bearer" + Cookies.get("token") },
      })
      .then((res) => {
        console.log(res);
        setCondition(false);
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
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                          <td className="px-6 py-4">{item.company_name}</td>
                          <td className="px-6 py-4">{item.job_type}</td>
                          <td className="px-6 py-4">{item.job_tenure}</td>
                          <td className="px-6 py-4">{item.company_city}</td>
                          <button
                            type="button"
                            className=" px-6 py-4 text-cyan-500"
                            onClick={inputClick}
                            value={item.id}
                          >
                            Delete
                          </button>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Listdelete;
