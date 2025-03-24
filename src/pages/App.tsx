import Client from "../components/home/Client.tsx"
import Main from "../components/home/Main.tsx"
import News from "../components/home/News.tsx"
import Project from "../components/home/Project.tsx"
import Service from "../components/home/Service.tsx"
import Footer from "../components/layout/Footer.tsx"

function App() {
    return (
        <>
            <Main />
            <Service />
            <Client />
            <Project />
            <News />
            <Footer />
        </>
    )
}

export default App
