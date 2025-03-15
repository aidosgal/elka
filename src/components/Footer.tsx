import { HiArrowSmallUp } from "react-icons/hi2";
import { IoMdMap } from "react-icons/io";

export default function Footer() {
  return (
    <div className="px-20 py-5 pt-20 bg-[#1A1A1A] text-white">
      <div className="grid grid-cols-23 gap-5">
        <div className="grid grid-cols-4 border border-[#f0f0f01a] p-7 col-span-16">
          <div>
            <div className="text-[#fcfcfc80] text-sm">Карта сайта</div>
            <div className="text-md mt-5">Главная</div>
            <div className="text-md mt-5">Услуги</div>
            <div className="text-md mt-5">О нас</div>
            <div className="text-md mt-5">Галерея</div>
            <div className="text-md mt-5">Наши клиенты</div>
            <div className="text-md mt-5">Krones</div>
            <div className="text-md mt-5">Конакты</div>
          </div>
          <div className="border-r border-[#f0f0f01a]">
            <div className="text-[#fcfcfc80] text-sm">Услуги</div>
            <div className="text-md mt-5">Механический монтаж</div>
            <div className="text-md mt-5">Электрический монтаж</div>
            <div className="text-[#fcfcfc80] mt-5 text-sm">Монтаж трубопроводов</div>
            <div className="text-md mt-5">Теплоизоляция трубопроводов</div>
            <div className="text-md mt-5">Инжиниринг</div>
            <div className="text-md mt-5">Купажные отделения</div>
            <div className="text-md mt-5">Запуск объекта под ключ</div>
          </div>
          <div className="col-span-2 px-7">
            <div className="text-[#fcfcfc80] text-sm">Адрес</div>
            <div className="mt-7">Алматинская обл., Карасайский<br />район, Райымбекский С.О., с.<br /> Булакты, Учетный квартал 587,<br />283</div>
            <div className="inline-block mt-5">
              <div className="text-white gap-4 px-10 py-2 border border-white flex items-center">
                <IoMdMap className="text-2xl" />
                <div>Показать на карте</div>
              </div>
            </div>
            <div className="mt-10">Республика Казахстан, г. Алматы,<br />пр. Аль-Фараби, д.65</div>
            <div className="inline-block mt-5">
              <div className="text-white gap-4 px-10 py-2 border border-white flex items-center">
                <IoMdMap className="text-2xl" />
                <div>Показать на карте</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#f0f0f01a] p-7 col-span-6">
          <div className="text-[#fcfcfc80] text-sm">Телефон</div>
          <div className="text-md mt-5">8 (727) 258 25 68</div>
          <div className="text-md mt-2">8 (727) 258 37 71</div>
          <div className="text-md mt-2">8 (727) 258 25 69</div>
          <div className="text-[#fcfcfc80] mt-10 text-sm">Email</div>
          <div className="text-md mt-5">krones.kz@gmail.com</div>
        </div>
        <div className="border border-[#f0f0f01a] pt-5 col-span-1 flex flex-col items-center">
          <div className="flex flex-col items-center text-3xl border-b pb-5 w-full border-[#f0f0f01a]">
            <HiArrowSmallUp />
          </div>
          <div className="transform rotate-90 origin-center mt-20 pl-5">
            <span className="whitespace-nowrap text-[#fcfcfc80]">В начало страницы</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10 pb-10 border-b border-[#f0f0f01a]">
        <div className="col-span-2">
          <div className="mt-auto text-[#fcfcfc80] text-sm">Оставить заявку</div>
          <input
            className="border-b px-2 py-1 text-xl placeholder:text-white border-white w-[300px] mt-5"
            placeholder="+7"
          />
          <div className="flex mt-5 gap-5">
            <div className="px-10 py-3 border border-white">
              Заказать звонок
            </div>
            <div className="text-[#fcfcfc80]">
              Нажимая на кнопку, я даю свое согласие<br/>
              на <span className="text-white">обработку персональных данных</span>
            </div>
          </div>
        </div>
        <div className="text-[#fcfcfc80] flex flex-col">
          <div className="mt-auto text-sm">Сертификат регистрации</div>
          <div className="mt-2 text-white">ISO 9001:2015</div>
        </div>
        <div className="text-right text-sm text-[#fcfcfc80] flex flex-col">
          <div className="mt-auto">Политика конфиденциальности</div>
          <div className="mt-2">Персональные данные</div>
        </div>
      </div>
      <div className="flex mt-5 text-sm">
        <div className="text-[#fcfcfc80]">
          ТОО “ELKE COMPANY”, 2025©
        </div>
        <div className="ml-auto">
          Дизайн и разработка
        </div>
      </div>
      <img src="/Logo-footer.png" className="w-full mt-40"/>
    </div>
  );
};
