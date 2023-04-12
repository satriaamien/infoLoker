import art from "../assets/vectorart.jpg";
import Btn from "../components/material/btn";
const SubContent2 = () => {
  return (
    <div className="mt-10">
      <div class="grid grid-cols-3 gap-4 flex items-center ">
        <div className="py-4">
          <p className="text-3xl font-bold mb-1">Iklan loker di InfoLoker Gratis!</p>
          <p className="text-lg font-medium mb-5">Daftarkan sekarang juga, untuk pendaftaran pertama kali gratis </p>
          <Btn />
        </div>
        <div className="col-span-2">
          <img src={art} alt="lokerart" />
        </div>
      </div>
    </div>
  );
};

export default SubContent2;
