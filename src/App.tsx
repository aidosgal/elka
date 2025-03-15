import Client from "./components/Client.tsx"
import Footer from "./components/Footer.tsx"
import Layout from "./components/Layout.tsx"
import Main from "./components/Main.tsx"
import Service from "./components/Service.tsx"

function App() {
  return (
    <Layout>
      <Main/> 
      <Service/>
      <Client/>
      <Footer/>
    </Layout>
  )
}

export default App
