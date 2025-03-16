import { useState } from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [links] = useState<string[]>([
    "О Компании",
    "Услуги",
    "Проекты",
    "Krones",
    "Контакты",
  ]);

  return (
    <div className="sm:flex">
      <div className="sm:max-w-[1920px] sm:w-full sm:mx-auto pt-5">
        <div className="flex items-center sm:px-20 px-4">
          <img src="/Vector.png" className="hidden sm:block" />
          <img src="/minilogo.png" className="block sm:hidden" />
          <div className="flex gap-3 ml-auto items-center">
            <div className="hidden lg:flex sm:flex gap-3 items-center">
            {links.map((link, index) => (
              <a
                href="#"
                className="px-10 py-3 text-[#5F737E] border border-[#F0F0F0]"
                key={index}
              >
                {link}
              </a>
            ))}
            </div>
            <a
              href="#"
              className="sm:text-2xl text-lg px-6 py-3 text-[#5F737E] border border-[#F0F0F0]"
            >
              <IoMdCall/> 
            </a>
            <a
              href="#"
              className="sm:text-2xl text-lg px-6 py-3 text-[#5F737E] border border-[#F0F0F0]"
            >
              <IoMdMail /> 
            </a>
            <a
              href="#"
              className="sm:text-2xl text-lg px-6 py-3 text-[#5F737E] border border-[#F0F0F0]"
            >
              <FaEarthAmericas /> 
            </a>
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
