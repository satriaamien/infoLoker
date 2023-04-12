import classes from "./subcontent1.module.css";
const SubContent1 = () => {
  return (
    <div className={`p-5 mt-10 text-center ${classes.cont} `}>
      <div className="text-gray-600 font-bold text-3xl pt-2 pb-2">
        <p> Mengapa memilih InfoLoker </p>
      </div>
      <div className={classes.point}>
        <div class="grid grid-cols-3 gap-4 mt-5">
          <div>
            <p>
              <span>1.</span> Jangakuan yang lebih luas
            </p>
            <p className={classes.subpoint}>
              Lebih dari 900+ Perusahaan yang telah mendaftar
            </p>
          </div>
          <div>
            <p>
              <span>2.</span> Daftar rekruitmen gratis
            </p>
            <p className={classes.subpoint}>
              Daftar secara gratis dengan akun anda
            </p>
          </div>
          <div>
            <p>
              <span>3.</span> Posting iklan Perusahaan anda
            </p>
            <p className={classes.subpoint}>
              Posting iklan untuk meningkatkan rekruitmen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubContent1;
