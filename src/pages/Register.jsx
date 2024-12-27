import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {

    }

    const handleGoogleLogin  = () => {

    }

    return (
        <div className="flex flex-col justify-center my-8 shadow-lg rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
            <form onSubmit={handleRegister} className="space-y-4">

                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-gray-700">
                        Name
                    </label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" required />
                </div>
                {/* Photo URL Field */}
                <div>
                    <label htmlFor="photoURL" className="block text-gray-700">
                        Photo URL
                    </label>
                    <input type="text" id="photoURL" name="photoUrl" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your photo URL" required />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-gray-700">
                        Email
                    </label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
                </div>

                {/* Password Field */}
                <div className="relative">
                    <label htmlFor="password" className="block text-gray-700">
                        Password
                    </label>
                    <input type={showPassword ? 'text' : 'password'} id="password" name="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" required />
                    <a onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-4 bottom-2">
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </a>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300" >
                    Register
                </button>

                {/* handle Google Login */}

                <div className="flex justify-center mt-4">
                    <button onClick={handleGoogleLogin} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 btn-wide">Login with Google</button>
                </div>
                <p className="text-gray-600 mt-4 text-center">
                    Already have an account?{" "}
                    <Link to='/login'><span className="text-blue-700 font-bold text-base hover:underline cursor-pointer">
                        Login
                    </span></Link>
                </p>
            </form>
        </div>
    );
};

export default Register;