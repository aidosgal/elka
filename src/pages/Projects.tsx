import Directions from "../components/common/Directions";
import Footer from "../components/layout/Footer";
import RouteBar from "../components/nav/RouteBar";
import Hero from "../components/projects/Hero";
import Map from "../components/projects/Map";

export default function Projects() {
    return (
        <div>
            <Hero />
            <div className="px-20 py-20">
                <RouteBar />
            </div>
            <Map />
            <Directions />
            <Footer />
        </div>
    )
}
