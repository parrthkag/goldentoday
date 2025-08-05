import { useState } from "react";
import { Link, useNavigate } from "react-router";

const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch("http://localhost:8080/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                setSuccess("Account created successfully! Redirecting to login...");
                setTimeout(() => navigate("/login"), 1500);
            } else {
                const msg = await response.json();
                setError(msg.token || msg || "Email already exists!");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f8f9] flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg px-8 py-10 w-full max-w-sm flex flex-col items-center">
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
                    Create an Account
                </h3>
                <div className="text-sm text-gray-500 mb-4 text-center">
                    Sign up to access the portal
                </div>

                {error && <div className="text-red-500 text-xs mb-2">{error}</div>}
                {success && <div className="text-green-500 text-xs mb-2">{success}</div>}

                <form className="w-full space-y-4" onSubmit={handleSignUp}>
                    <div>
                        <label
                            className="block text-xs text-gray-600 font-semibold mb-1"
                            htmlFor="name"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118ca1]"
                            id="name"
                            placeholder="John Doe"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

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
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full bg-[#18aec5] hover:bg-[#118ca1] text-white font-semibold py-2 rounded-md transition"
                    >
                        Sign up
                    </button>
                </form>

                <div className="text-xs text-gray-500 mt-4">
                    Already have an account?
                    <Link to="/login" className="ml-1 text-[#118ca1] hover:underline">
                        Sign in
                    </Link>
                </div>
            </div>

            <div className="mt-6 text-[11px] text-gray-400">
                © 2025 WebChain-IT. All rights reserved.
            </div>
        </div>
    );
};

export default SignUp;