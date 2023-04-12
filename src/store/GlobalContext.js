import { createContext } from "react";
import { useState } from "react";

const GlobalProvider = (props) => {
  const [datas, setDatas] = useState(null);
  const [getData, setGetData] = useState(null);
  const [trigerDetail, setTrigerDetail] = useState(false);
  const [validate, setValidate] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        datas,
        setDatas,
        getData,
        setGetData,
        trigerDetail,
        setTrigerDetail,
        validate,
        setValidate,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext();

export default GlobalProvider;
