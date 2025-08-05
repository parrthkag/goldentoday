import { Outlet } from "react-router"
import Header from "../components/Header"
import MainSection from "../components/MainSection"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
        <Header/>
        <MainSection/>

        <main className="flex-grow">
            <Outlet/>
        </main>

        <Footer/>
    </div>
  )
}

export default Home