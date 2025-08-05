import { Outlet } from "react-router"
import Header from "../components/Header"
import MainSection from "../components/MainSection"

const Home = () => {
  return (
    <div>
        <Header/>
        <MainSection/>

        <main className="flex-grow">
            <Outlet/>
        </main>
    </div>
  )
}

export default Home