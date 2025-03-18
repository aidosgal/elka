import { useState, useEffect } from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";

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
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  
  const handleOutsideClick = () => {
    if (phoneModalOpen) {
      setPhoneModalOpen(false);
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [mobileMenuOpen, phoneModalOpen]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
    setPhoneModalOpen(false);
  };

  const togglePhoneModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhoneModalOpen(!phoneModalOpen);
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full">
        <div className="w-full pt-5">
          <div className="flex items-center sm:px-20 px-4">
            <img src="/Vector.png" className="hidden sm:block" />
            <img src="/minilogo.png" className="block sm:hidden" />
            
            <div className="flex gap-3 ml-auto items-center">
              {/* Desktop navigation links */}
              <div className="hidden lg:flex gap-3 items-center">
                {links.map((link, index) => (
                  <a
                    href="#"
                    className="sm:whitspace-nowrap px-10 py-3 text-[#5F737E] border border-[#F0F0F0]"
                    key={index}
                  >
                    {link}
                  </a>
                ))}
              </div>
              
              {/* Call button with dropdown */}
              <div className="relative">
                <a
                  href="#"
                  className="sm:text-2xl text-xl block sm:px-6 px-3 py-3 text-[#5F737E] border border-[#F0F0F0]"
                  onClick={togglePhoneModal}
                >
                  <IoMdCall /> 
                </a>
                
                {/* Phone dropdown positioned below the button */}
                {phoneModalOpen && (
                  <div 
                    className="absolute right-0 top-full mt-1 bg-white border border-[#f0f0f0] p-3 px-4 w-72 z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex flex-col">
                      <div className="mb-2 text-[#5f737e] text-sm">Контактная информация</div>
                      <div className="flex mt-4">
                        <div>
                          <div className="text-[#5f737e] text-sm">Название отделения</div>
                          <a href="tel:+71234567890" className="mb-1 mt-2 text-md">+7 727 258 25 68</a>
                        </div>
                        <div className="ml-auto">
                          <a
                            href="#"
                            className="sm:text-lg text-lg block sm:px-6 px-3 py-3 text-[#5F737E] border border-[#F0F0F0]"
                                                      >
                            <IoMdCall /> 
                          </a>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div>
                          <div className="text-[#5f737e] text-sm">Название отделения</div>
                          <a href="tel:+71234567890" className="mb-1 mt-2 text-md">+7 727 258 25 68</a>
                        </div>
                        <div className="ml-auto">
                          <a
                            href="#"
                            className="sm:text-lg text-lg block sm:px-6 px-3 py-3 text-[#5F737E] border border-[#F0F0F0]"
                          >
                            <IoMdCall /> 
                          </a>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div>
                          <div className="text-[#5f737e] text-sm">Название отделения</div>
                          <a href="tel:+71234567890" className="mb-1 mt-2 text-md">+7 727 258 25 68</a>
                        </div>
                        <div className="ml-auto">
                          <a
                            href="#"
                            className="sm:text-lg text-lg block sm:px-6 px-3 py-3 text-[#5F737E] border border-[#F0F0F0]"
                            onClick={togglePhoneModal}
                          >
                            <IoMdCall /> 
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="mt-7 text-sm text-[#5f737e]">Оставить заявку</div>
                        <input
                          className="border-b px-2 py-1 placeholder:text-black border-black w-full mt-2 text-lg"
                          placeholder="+7"
                        />
                        <div className="w-full mt-3 text-center py-3 text-sm bg-black text-white">Заказать звонок</div>
                        <div className="text-[#5f737e] text-xs mt-2">
                          Нажимая на кнопку, я даю свое согласие<br/>
                          на <span className="text-black">обработку персональных данных</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mail button */}
              <a
                href="#"
                className="sm:text-2xl text-xl sm:px-6 px-3 py-3 text-[#5F737E] border border-[#F0F0F0]"
              >
                <IoMdMail /> 
              </a>
              
              {/* Globe button */}
              <a
                href="#"
                className="sm:text-2xl text-xl sm:px-6 px-3 py-3 text-[#5F737E] border border-[#F0F0F0]"
              >
                <FaEarthAmericas /> 
              </a>
              
              {/* Hamburger menu (mobile only) */}
              <a
                href="#"
                className="sm:text-2xl lg:hidden text-xl sm:px-6 px-3 py-3 text-[#5F737E] border border-[#F0F0F0]"
                onClick={toggleMobileMenu}
              >
                <HiOutlineBars3 /> 
              </a>
            </div>
          </div>
          
          {/* Mobile menu - sliding from right */}
          {mobileMenuOpen && (
            <div 
              className="fixed top-0 right-0 h-full bg-white shadow-lg w-64 z-50 transform transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '80vw' }}
            >
              <div className="flex flex-col pt-16 w-full h-full">
                {links.map((link, index) => (
                  <a
                    href="#"
                    className="px-6 py-4 text-[#5F737E] hover:bg-gray-50"
                    key={index}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}
          
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
