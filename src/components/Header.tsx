import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check login status on component mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/"); // redirect to home
    };

    return (
        <header className="mb-3 bg-gradient-to-r from-[#FFF8E2] to-[#FFEA8C] shadow-lg shadow-gray-500/50 flex items-center justify-between px-8 py-4">
            <div className="flex items-center space-x-3">
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

                {/* Conditional buttons */}
                {!isLoggedIn ? (
                    <>
                        <Link to="/signup">
                            <button className="bg-[#FFB800] text-white px-4 py-2 rounded font-semibold">
                                Sign-up
                            </button>
                        </Link>

                        <Link to="/login">
                            <button className="bg-black text-white px-4 py-2 rounded">
                                Login
                            </button>
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Logout
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Header;