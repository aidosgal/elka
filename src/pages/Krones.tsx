import Footer from "../components/layout/Footer";
import RouteBar from "../components/nav/RouteBar";

export default function Krones() {
  return (
    <div className="">
      <div className="px-20">
        <div className="py-10">
          <RouteBar />
        </div>
        <div className="text-4xl">Официальный партнер Krones</div>
        <div className="text-xl mt-10">
          Являясь официальными представителями немецкой компании Кронес в Центральной Азии, мы приобрели
          огромный опыт работы по данным направлениям и получили возможность доступа
          к европейским технологиям
        </div>
        <img src="/krones/item.png" className="mt-10" />
        <div className="grid grid-cols-4 gap-10 mt-10">
          <div className="px-5 py-7 border border-[#f0f0f0] text-white bg-[#0061AD] text-lg">Технологии</div>
          <div className="px-5 py-7 border border-[#f0f0f0] text-lg">Качество</div>
          <div className="px-5 py-7 border border-[#f0f0f0] text-lg">Инновации</div>
          <div className="px-5 py-7 border border-[#f0f0f0] text-lg">Стратегическое видение</div>
        </div>
        <div className="grid grid-cols-7 mt-10 gap-5">
          <div className="col-span-5 p-7 border gap-5 border-[#f0f0f0] grid grid-cols-5">
            <div className="col-span-2">
              <div className="grid grid-cols-3 gap-5">
                <img src="/krones/1.png" className="col-span-3" />
                <img src="/krones/2.png" className="" />
                <img src="/krones/3.png" className="" />
                <img src="/krones/4.png" className="" />
              </div>
            </div>
            <div className="col-span-3 text-sm">
              KRONES AG — ведущая специализированная компания по разработке, изготовлению и установке оборудования для разлива в бутылки, консервирования и пакетирования, чья активность лежит в диапазоне от поставок индивидуальных машин до проектов со сдачей «под ключ», включая законченные линии разлива в бутылки и консервирования для всех видов продуктов, напитков и молочных изделий, а также пивоваренные цеха и комплектные пивоварни. <br/><br/>

Фирма выпускает полный список установок и машин, охватывающий все сферы процесса производства и потока материалов от розлива до упаковки продукта и интегрирует комплектные IT-системы. Возможно также комплексное проектирование готовых заводов по изготовлению напитков. Krones AG является единственным производителем установок для розлива напитков, владеющим методом обработки и вторичной переработки ПЭТ «Bottle-to-Bottle-Recycling», дающим возможность вторичного использования бутылок в пищевой промышленности. Особое внимание компания посвящает экономии сырья при производстве бутылок из ПЭТ. Создав самую легкую на сегодняшний день бутылку из ПЭТ для негазированной воды весом 6,6 г, компания Krones выиграла в 2008 году немецкий приз в категории розничной упаковки. <br/>
При разработке новых установок и машин с наиболее лучшим использованием энергии и сырья фирма использует собственную программу развития и совершенствования «enviro». Документацию расхода средств подтверждает сертификат TÜV.
            </div>
          </div>
          <img src="/krones/graphic.png" className="col-span-2 w-full object-cover" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
