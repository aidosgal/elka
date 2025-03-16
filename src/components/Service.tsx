import { useState } from "react";

interface ServiceType {
  name: string;
  title: string;
  description: string;
  image_url: string;
  video_url: string;
}

export default function Service() {
  const [services] = useState<ServiceType[]>([
    {
      name: "Инжиниринг",
      title: "Проектирование труб, план размещения оборудования",
      description: "Наша команда инженеров разрабатывает детальный проект, который включает все необходимые элементы для успешного выполнения работы. Мы работаем в тесном сотрудничестве с клиентами, чтобы все детали были учтены.",
      video_url: "/eng.mp4",
      image_url: "/ING.png",
    },
    {
      name: "Механический монтаж",
      title: "Механический монтаж",
      description: "Сборка, установка и наладка промышленного оборудования.",
      video_url: "/eng.mp4",
      image_url: "/ING.png",
    },
    {
      name: "Электрический монтаж",
      title: "Электромонтаж",
      description: "Прокладка кабелей, подключение автоматизированных систем.",
      video_url: "/eng.mp4",
      image_url: "/ING.png",
    },
    {
      name: "Монтаж трубопроводов",
      title: "Монтаж трубопроводов",
      description: "Сварка, сборка и изоляция труб на объектах.",
      video_url: "/eng.mp4",
      image_url: "/ING.png",
    },
    {
      name: "Монтаж изоляции",
      title: "Изоляция труб",
      description: "Утепление трубопроводов, защита от коррозии.",
      video_url: "/eng.mp4",
      image_url: "/ING.png",
    },
    {
      name: "Купажные отделения",
      title: "Купажные отделения",
      description: "Автоматизация процессов смешивания жидкостей.",
      video_url: "/eng.mp4",
      image_url: "/ING.png",
    },
    {
      name: "Запуск объекта под ключ",
      title: "Объект под ключ",
      description: "От проектирования до запуска производства.",
      video_url: "/eng.mp4",
      image_url: "/ING.png",
    }
  ]);

  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="px-5 md:px-20 mt-10 flex flex-col">
      <div className="text-center">
        <div className="text-xl text-[#0061AD]">ELKE COMPANY</div>
        <div className="text-4xl">Услуги компании</div>
      </div>

      <div className="flex sm:flex-wrap sm:w-full w-[450px] overflow-x-auto whitespace-nowrap sm:justify-center gap-3 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelectedService(index)}
            className={`px-10 py-3 cursor-pointer transition-colors duration-300 ${selectedService === index
              ? "bg-[#0061AD] text-white"
              : "border border-[#F0F0F0]"
              }`}
          >
            {service.name}
          </div>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-4 grid-cols-1 gap-8">
        <div className="sm:col-span-2">
          <video
            className="w-full"
            autoPlay
            muted
            loop
            src={services[selectedService].video_url}
          />
        </div>

        <div className="h-full w-full">
          <img
            src={services[selectedService].image_url}
            alt={services[selectedService].name}
            className="h-full w-full"
          />
        </div>

        <div className="flex flex-col w-full p-5 border border-[#F0F0F0]">
          <img src="news-arrow.png" className="ml-auto mb-auto" />
          <div className="text-xl sm:mt-auto mb-4 mt-10"> 
            {services[selectedService].title}
          </div>
          <div className="text-md text-gray-700">
            {services[selectedService].description}
          </div>
        </div>
      </div>
      <div className="flex mx-auto gap-4 items-center bg-black text-white text-lg px-10 mt-10 py-3">
        <div>Все услуги</div>
        <img src="/Vector_corner.png" className="w-[20px]" />
      </div>
    </div>
  );
}
