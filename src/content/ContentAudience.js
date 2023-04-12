const audience = [
  {
    nama: "Lutfi",
    deskripsi:
      "Kualitas penyediaan disini sangatlah akurat dan terpercaya, saya sangat merasa terbantu dengan InfoLoker",
  },
  {
    nama: "Andre",
    deskripsi:
      "Lowongan kerja terupdate dan banyak sekali pilihan yang disediakan oleh InfoLoker ini",
  },
  {
    nama: "Satria",
    deskripsi:
      "Saya sangat senang dengan InfoLoker karena website ini memberikan banyak sekali pilihan loker berdasarkan minat saya",
  },
];

const ContentAudience = () => {
  return (
    <div>
      <div className="text-medium font-bold mb-5 text-xl">
        <p>Apa Kata Mereka...? </p>
      </div>
      <div class="grid grid-cols-3 gap-10">
        {audience.map((item) => {
          return (
            <div className="shadow-lg rounded-lg p-3 bg-gray-200 ">
              <div className="font-semibold  underline text-m font-medium underline-offset-4 mb-1">
                {item.nama}
              </div>
              <div className="font-light text-ls ">{item.deskripsi}</div>
            </div>
          );
        })}
        {/* <div>01</div>
        <div>01</div>
        <div>01</div> */}
      </div>
    </div>
  );
};
export default ContentAudience;
