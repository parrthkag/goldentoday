import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Save token to localStorage
                localStorage.setItem("token", data.token);
                // Redirect to profile page
                navigate("/");
            } else {
                const msg = await response.json();
                setError(msg.token || "Invalid Credentials");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f8f9] flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg px-8 py-10 w-full max-w-sm flex flex-col items-center">
                {/* Top icon */}
                <div className="bg-[#118ca1] rounded-full p-3 mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 13l4-4 4 4m-4-4v12"
                        />
                    </svg>
                </div>

                <h2 className="text-xl font-bold text-gray-700">Prescription Pro</h2>
                <p className="text-gray-400 text-sm -mt-1 mb-6">
                    Digital Prescription Management
                </p>

                <h3 className="text-lg font-semibold text-[#118ca1] text-center mb-1">
                    Welcome Back
                </h3>
                <div className="text-sm text-gray-500 mb-4 text-center">
                    Sign in to your medical portal
                </div>

                {error && <div className="text-red-500 text-xs mb-2">{error}</div>}

                <form className="w-full space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label
                            className="block text-xs text-gray-600 font-semibold mb-1"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118ca1]"
                            id="email"
                            placeholder="doctor@hospital.com"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label
                            className="block text-xs text-gray-600 font-semibold mb-1"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118ca1]"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full bg-[#18aec5] hover:bg-[#118ca1] text-white font-semibold py-2 rounded-md transition"
                    >
                        Sign in
                    </button>
                </form>

                <div className="text-xs text-gray-500 mt-4">
                    Don’t have an account?
                    <Link to="/signup" className="ml-1 text-[#118ca1] hover:underline">
                        sign up
                    </Link>
                </div>
            </div>

            <div className="mt-6 text-[11px] text-gray-400">
                © 2025 WebChain-IT. All rights reserved.
            </div>
        </div>
    );
};

export default Login;