
export default function Main() {
  return (
    <div>
      <div className="grid sm:grid-cols-6 grid-cols-1 mt-10 gap-8 sm:px-20 px-5">
        <div className="h-[300px] sm:h-full col-span-3 bg-gradient-to-r from-[#002E4A] to-[#0061AD] p-10 text-white relative">
          <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full"></div>

          <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full"></div>

          <div className="absolute bottom-3 left-3 w-2 h-2 bg-white rounded-full"></div>

          <div className="absolute bottom-3 right-3 w-2 h-2 bg-white rounded-full"></div>

          <div className="flex w-full h-full">
            <div className="mt-auto">
              <div className="sm:text-6xl text-4xl">ELKE COMPANY</div>
              <div className="text-xl">монтаж объектов под ключ</div>
            </div>

            <div className="ml-auto mb-auto">
              <img src="/Vector_corner.png" className="w-[25px] h-[25px] object-cover" />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <img src="/slider1.png" />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-8 mt-8 sm:px-20 px-5">
        <div className="flex w-full p-10 col-span-4 border border-[#F0F0F0] bg-[url(/Vector-map.png)] bg-no-repeat bg-right">
          <div className="mt-auto">
            <div className="text-[#0061AD]">[6 стран] [120+ успешных проектов]</div>
            <div className="sm:text-5xl text-3xl mt-3">Наши клиенты</div>
            <div className="inline-block px-10 py-3 bg-black text-white items-center mt-8 cursor-pointer">
              <div className="flex items-center gap-5">
                <div>Подробнее</div>
                <img src="/Vector_corner.png" className="w-[15px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <video autoPlay loop muted playsInline className="w-[500px]">
            <source src="/video-420p.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <img src="/company-bkr.png" className="mt-5 w-full" />
      <div className="mt-5 text-center px-5">
        <div className="text-[#0061AD] text-xl sm:text-2xl">О компании</div>
        <div className="sm:text-5xl text-3xl">
        <span className="text-[#0061AD]">ELKE COMPANY</span> —  ваш <span className="text-[#0061AD]">надежный партнер</span><br/>
в пищевой промышленности
        </div>
        <div className="mt-10 sm:text-xl text-lg">
          В мире индустриального производства качественные услуги играют ключевую роль.<br/> 
Знакомьтесь с ТОО «Elke Company — компанией, предлагающей решения, выходящие за рамки завтрашнего<br/>дня. ТОО «Elke Company» — компания, которая зарекомендовала себя как надежный поставщик услуг<br/>
по шеф-монтажу и пуско-наладки заводов для производства пищевой и не пищевой промышленности.
        </div>
      </div>
      <img src="/company-bkr.png" className="mt-5 w-full" />
    </div>
  );
};
