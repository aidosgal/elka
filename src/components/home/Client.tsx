import { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Client() {
  const logosRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const [mapVisible, setMapVisible] = useState(false);
  const [visibleMarkers, setVisibleMarkers] = useState<number[]>([]);
  
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
  ];
  
  const markers = [
    { top: "30%", left: "20%" },
    { top: "45%", left: "35%" },
    { top: "25%", left: "55%" },
    { top: "60%", left: "70%" },
    { top: "70%", left: "45%" },
    { top: "50%", left: "80%" },
  ];

  useEffect(() => {
    const logoTrack = logosRef.current;
    if (!logoTrack) return;
    
    const clonedItems = [...logoTrack.children].map(item => item.cloneNode(true));
    clonedItems.forEach(item => {
      logoTrack.appendChild(item);
    });
    
    const animate = () => {
      if (!logoTrack) return;
      
      if (logoTrack.scrollLeft >= logoTrack.scrollWidth / 2) {
        logoTrack.scrollLeft = 0;
      } else {
        logoTrack.scrollLeft += 1;
      }
      requestAnimationFrame(animate);
    };
    
    const animation = requestAnimationFrame(animate);
    
    const mapTimer = setTimeout(() => {
      setMapVisible(true);
    }, 500);
    
    markers.forEach((_, index) => {
      const markerTimer = setTimeout(() => {
        setVisibleMarkers(prev => [...prev, index]);
      }, 1000 + index * 500);
      
      return () => clearTimeout(markerTimer);
    });
    
    return () => {
      cancelAnimationFrame(animation);
      clearTimeout(mapTimer);
    };
  }, []);

  return (
    <div className="w-full py-16 sm:px-20 px-4 overflow-hidden">
      <div className="mt-20 border-t border-[#F0F0F0]"></div>
      <div className="mt-20 mb-20 border-t border-[#F0F0F0]"></div>
      <div className="flex flex-col text-center justify-center mx-auto">
        <p className="text-lg text-[#0061AD]">ELKE COMPANY</p>
        <h2 className="text-3xl md:text-4xl mt-2 mb-6">Наши клиенты</h2>
        <p className="w-[450px] mx-auto mb-8">
          Среди наших клиентов — как крупные международные корпорации, так и малые локальные предприятия.
          Мы гордимся тем, что смогли помочь многим компаниям оптимизировать свои производственные процессы по всему миру.
        </p>
        <div className="flex mb-10 mx-auto gap-4 items-center bg-black text-white text-lg px-10 mt-5 py-3">
          <div>Подробнее</div>
          <img src="/Vector_corner.png" className="w-[20px]" />
        </div>
      </div>
      
      {/* Carousel with blurred edges */}
      <div className="relative mb-8" ref={carouselContainerRef}>
        {/* Left blur gradient */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        
        {/* Carousel content */}
        <div className="overflow-hidden">
          <div
            ref={logosRef}
            className="flex gap-8 py-4 overflow-x-scroll scrollbar-hide"
            style={{ 
              scrollBehavior: "smooth", 
              msOverflowStyle: "none", 
              scrollbarWidth: "none"
            }}
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[200px] flex items-center justify-center bg-white">
                <img src={logo} alt={`Client logo ${index + 1}`} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Right blur gradient */}
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
      
      {/* Map with sequentially appearing markers */}
      <div className={`relative transition-opacity duration-1000 ${mapVisible ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src="/Clients-map.png"
          alt="Карта клиентов"
          className="w-full h-auto"
        />
        
        {/* Map markers appearing one by one */}
        {markers.map((marker, index) => (
          visibleMarkers.includes(index) && (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{
                top: marker.top,
                left: marker.left,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <FaMapMarkerAlt className="text-[#0061AD] text-4xl drop-shadow-lg" />
              <div className="absolute top-0 left-0 w-full h-full bg-[#0061AD] opacity-25 rounded-full animate-ping" />
            </div>
          )
        ))}
      </div>
    </div>
  );
}
