import axios from "axios";
import halaman from "./Halamandetail.module.css";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../store/GlobalContext";
import Navbarr from "../navbar/Navbarr";
import Footer from "../footer/Footer";
import { Fragment } from "react";
import classes from "../../content/content.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Loading from "../material/Loading";
const Halamandetail = (props) => {
  const { getData, setGetData, setValidate } = useContext(GlobalContext);
  const [loadingData, setLoadingData] = useState(true);
  const { idData } = useParams();
  useEffect(() => {
    setLoadingData(true);
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((resp) => {
        // console.log(resp.data);
        setGetData(resp.data.data);
        setLoadingData(false);
        setValidate(true);
      })
      .catch((err) => err);
  }, [setGetData, setValidate]);

  // console.log(typeof(getData.data[0].title));
  //   const itemData = getData.data.filter(
  //     (item, i) => parseInt(item.id) === parseInt(idData)
  //   );
  // console.log("getData", getData);

  const ContentHalaman = (props) => {
    const filtered =
      props.getData !== null &&
      props.getData.filter((item) => parseInt(item.id) === parseInt(idData));

    return (
      <div>
        {filtered.map((items) => {
          return (
            <>
              <div key={items.id}>
                <ul>
                  <div className="font-semibold">
                    <li>
                      <img
                        src={`${items.company_image_url}`}
                        className={halaman.image}
                        alt="logo"
                      />
                      <p className="mt-2">PT. {items.company_name}</p>
                    </li>
                    <li>{items.title}</li>
                    <li>
                      IDR {`${items.salary_min} - IDR ${items.salary_max}`}
                    </li>
                    <li>IDR {`${items.job_type} - IDR ${items.job_tenure}`}</li>
                    <li>{items.company_city}</li>
                  </div>
                  <li className="mt-10 mb-5">
                    <p className="mb-1 font-medium">Job Description :</p>
                    <p>{items.job_description}</p>
                  </li>
                  <li className="mb-5">
                    <p className="font-medium mb-1">Qualification :</p>
                    <p>{items.job_qualification}</p>
                  </li>
                </ul>
                <div className="mb-10">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Hirring Now
                    </span>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  };

  return (
    <Fragment>
      <Navbarr />
      <div className={`container mx-auto ${classes.cont}`}>
        <div className="font-semibold text-2xl text-center mb-5 ">
          {/* <p>{`Open Recruitment as ${getData.title} `}</p> */}
        </div>
        {/* {console.log(getData)} */}
        <div className="font-normal mb-3 text-3xl text-center">
          <p> Hirring Now!</p>
        </div>
        <div>
          {/* {console.log(
            getData !== null &&
              
          )} */}

          {getData !== null && !loadingData && (
            <ContentHalaman getData={getData} />
          )}
          {loadingData && <Loading />}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default Halamandetail;
