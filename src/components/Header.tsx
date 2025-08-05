import { Link } from "react-router"




const Header = () => {
    return (
        <header className="mb-3 bg-gradient-to-r from-[#FFF8E2] to-[#FFEA8C] shadow-lg shadow-gray-500/50  flex items-center justify-between px-8 py-4">
            <div className="flex items-center space-x-3">
                {/* Add your logo source */}
                <img src="/Images/logo.png" alt="Golden Today Logo" className="h-10" />
                <span className="font-bold text-xl text-[#FFB800]">GOLDEN TODAY</span>
            </div>
            <nav className="flex items-center space-x-6">
                <Link to="/" className="text-gray-700 hover:text-[#FFB800]">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-[#FFB800]">About Us</Link>
                <Link to="/benefits" className="text-gray-700 hover:text-[#FFB800]">Benefits</Link>
                <Link to="/ayurvedic-kit" className="text-gray-700 hover:text-[#FFB800]">Ayurvedic Kit</Link>
                <Link to="/income-plan" className="text-gray-700 hover:text-[#FFB800]">Income Plan</Link>
                <Link to="/testimonial" className="text-gray-700 hover:text-[#FFB800]">Testimonial</Link>
                <Link to="/contact" className="text-gray-700 hover:text-[#FFB800]">Contact</Link>
                <button className="bg-[#FFB800] text-white px-4 py-2 rounded font-semibold">Sign-up</button>
                <button className="bg-black text-white px-4 py-2 rounded">Login</button>
            </nav>
        </header>
    )
}

export default Header