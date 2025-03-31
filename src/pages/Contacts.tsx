import { useEffect, useRef } from "react";
import RouteBar from "../components/nav/RouteBar";
import "2gis-maps";
import Footer from "../components/layout/Footer";

export default function Contacts() {
  const mapRef = useRef(null); 

  useEffect(() => {
    if (!mapRef.current) return;

    const DG = window.DG; 
    const map = DG.map(mapRef.current, {
      center: [43.221358, 76.932581], 
      zoom: 20,
    });

    return () => {
      map.remove(); 
    };
  }, []);

  return (
    <div>
      <div className="px-20 py-10">
        <RouteBar />
      </div>
      <div ref={mapRef} id="map" style={{ width: "100%", height: "500px" }}></div>
      <Footer />
    </div>
  );
}
