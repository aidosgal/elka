import RouteBar from "../components/nav/RouteBar";
import Hero from "../components/projects/Hero";

export default function Projects() {
    return (
        <div>
            <Hero />
            <div className="px-20 py-20">
                <RouteBar />
            </div>
        </div>
    )
}
