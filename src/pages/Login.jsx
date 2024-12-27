import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (e) => {

    }

    const handleGoogleLogin = (e) => {
        
    }

    return (
        <div className="flex flex-col justify-center my-8 shadow-lg rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form onSubmit={handleLogin} class="space-y-4">
                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" name="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email"
                        required />
                </div>

                {/* Password Field  */}
                <div>
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input type="password" name="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" required />
                    <label className="label">
                        <p className="label-text-alt link link-hover text-sm text-purple-600 hover:underline">Forgot password?</p>
                    </label>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >Login </button>
            </form>


            {/* Login with google */}
            <div className="flex justify-center mt-4">
                <button onClick={handleGoogleLogin} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 btn-wide">Login with Google</button>
            </div>
            <p className="text-gray-600 mt-3">
                New to this website? Please <Link to="/register"><span className="text-blue-600 font-bold hover:underline">Register</span></Link></p>
        </div>
    );
};

export default Login;