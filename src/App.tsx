import Client from "./components/Client.tsx"
import Footer from "./components/Footer.tsx"
import Layout from "./components/Layout.tsx"
import Main from "./components/Main.tsx"
import Project from "./components/Project.tsx"
import Service from "./components/Service.tsx"

function App() {
  return (
    <Layout>
      <Main/> 
      <Service/>
      <Client/>
      <Project/>
      <Footer/>
    </Layout>
  )
}

export default App
