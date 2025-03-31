import News from "../components/home/News";
import Footer from "../components/layout/Footer";
import RouteBar from "../components/nav/RouteBar";

export default function NewsPage() {
  return (
    <div>
      <div className="px-20">
        <div className="py-10">
          <RouteBar />
        </div>
        <News />
      </div>
      <Footer />
    </div>
  )
}
