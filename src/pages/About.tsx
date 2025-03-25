import Aim from "../components/about/Aim";
import Certificate from "../components/about/Certificate";
import Hero from "../components/about/Hero";
import History from "../components/about/History";
import Review from "../components/about/Review";
import Directions from "../components/common/Directions";
import Footer from "../components/layout/Footer";
import RouteBar from "../components/nav/RouteBar";

export default function About() {
    return (
        <div>
            <div className="mt-10">
                <Hero />
            </div>
            <div className="px-20 py-10">
                <RouteBar />
            </div>
            <History />
            <Directions />
            <Aim />
            <Certificate />
            <Review />
            <Footer />
        </div>
    )
}
