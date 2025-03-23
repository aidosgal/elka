import Client from "./components/Client.tsx"
import Footer from "./components/Footer.tsx"
import Main from "./components/Main.tsx"
import News from "./components/News.tsx"
import Project from "./components/Project.tsx"
import Service from "./components/Service.tsx"

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
