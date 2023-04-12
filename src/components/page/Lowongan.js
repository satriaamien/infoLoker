import { Fragment } from "react";
import axios from "axios";
import Navbarr from "../navbar/Navbarr";
import { useState } from "react";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import classes from "../../content/content.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";
import Loading from "../material/Loading";
import Search from "../material/Search";

const Btnhire = (props) => {
  //   const navigate = useNavigate();
  //   navigate(`/job-vacancy/${props.idData}`);
  const { setGetData } = useContext(GlobalContext);

  return (
    <Fragment>
      <Link to={`/job-vacancy/${props.idData}`}>
        <button
          onClick={(btnHandler) => {
            setGetData(props.detailData);
          }}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get Detail
        </button>
      </Link>
    </Fragment>
  );
};

const Lowongan = () => {
  const { datas, setDatas, validate } = useContext(GlobalContext);
  const [loadingData, setLoadingData] = useState(true);
  useEffect(() => {
    setLoadingData(true);
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((resp) => {
        setDatas(resp.data);
        setLoadingData(false);
      })
      .catch((err) => alert("data error"));
  }, [setDatas]);

  // const Showdisplay = (display) => {
  //   console.log(display);
  // };

  return (
    <>
      <Navbarr />
      <div className={`container mx-auto ${classes.cont}`}>
        <div className="font-semibold text-2xl text-center mb-5 ">
          Segera daftarkan diri anda
        </div>
        <Search />
        {/* <div className="font-medium mb-3 mt-5">
          Lowongan dapat dilihat sebagai berikut :
        </div> */}
        <div>
          {validate &&
            datas !== null &&
            !loadingData &&
            datas.data.map((item, i) => {
              return (
                <div key={item.id} className="mb-5">
                  <ul>
                    <li className="font-semibold mb-1">{`${i + 1}. ${
                      item.company_name
                    }`}</li>
                    <li>
                      <p>Position : {`${item.title}`} </p>
                    </li>
                    <li>
                      <p className="font">Job Type : {`${item.job_type}`}</p>
                    </li>
                    <li>
                      <p className="font">Tenure : {`${item.job_tenure}`}</p>
                    </li>
                    <li>
                      <p className="font">City : {`${item.company_city}`}</p>
                    </li>
                    <li>
                      <p>
                        Salary :{" "}
                        {`Rp. ${item.salary_min} - Rp. ${item.salary_max}`}{" "}
                      </p>
                    </li>
                    <li className="mt-2 w-full">
                      <Btnhire idData={item.id} detailData={item} />
                    </li>
                  </ul>
                </div>
              );
            })}
          {loadingData && <Loading />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lowongan;
