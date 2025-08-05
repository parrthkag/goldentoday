import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import AyurvedicKit from "./Pages/AyurvedicKit"
import Contact from "./Pages/Contact"
import IncomePlan from "./Pages/IncomePlan"
import Testimonial from "./Pages/Testimonial"
import Benefits from "./Pages/Benefits"
import SignUp from "./Authentication/SignUp"
import Login from "./Authentication/Login"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/benefits" element={<Benefits />} />
                <Route path="/ayurvedic-kit" element={<AyurvedicKit />} />
                <Route path="/income-plan" element={<IncomePlan />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App