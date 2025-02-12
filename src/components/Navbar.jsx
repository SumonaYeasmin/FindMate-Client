import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";


const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                toast.success("User Logout Successful.");
            })
            .catch(error => {
                toast.error(error.code);
            })
    }

      // Theme Loaded localStorage 
      useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    // Theme Changes
    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };


    const links = (
        <div className="lg:flex gap-3 lg:gap-0 xl:gap-0 text-base md:text-lg lg:text-sm 2xl:text-lg font-semibold">
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/allItems" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>Lost & Found Items</NavLink>
            </li>
            <li>
                <NavLink to="/aboutUs" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>About Us</NavLink>
            </li>
        </div>
    );

    return (

        <div className="sticky top-0 z-50 backdrop-blur-md bg-opacity-50 border-b">
            <div className="navbar  container mx-auto">

            <div className="navbar container mx-auto px-4 relative">
                <button
                    onClick={toggleTheme}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-white shadow-md transition-transform transform hover:scale-110 absolute top-20 right-5`}
                >
                    {isDarkMode ? (
                        <MdOutlineLightMode size={24} />
                    ) : (
                        <MdOutlineDarkMode size={24} />
                    )}
                </button>

                <div className="navbar-start z-50">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn -ml-5 btn-ghost text-2xl md:text-3xl">FindMate</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end z-50">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user && <img
                                        data-tooltip-id="my-tooltip-1"
                                        alt="Profile"
                                        src={
                                            user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        } />
                                }
                            </div>

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to="/myItems" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>Manage My Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/addItems" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>Add Lost & Found Item</NavLink>
                            </li>
                            <li>
                                <NavLink to="/allRecovered" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>All Recoverd Items</NavLink>
                            </li>
                        </ul>
                    </div>


                    <Tooltip
                        id="my-tooltip-1"
                        place="bottom"
                        variant="info"
                        content={user?.displayName || 'Anonymous User'}
                        className="z-50"
                    />
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn text-sm md:text-lg px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-600 hover:to-indigo-600 rounded-lg hover:text-white transform transition duration-300 font-semibold">Log Out</button>
                            :
                            <Link to="/login" className="text-sm md:text-lg btn px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-600 hover:to-indigo-600 rounded-lg hover:text-white transform transition duration-300 font-semibold">Login</Link>
                    }
                </div>
        </div>
            </div>
            </div>
    );
};

export default Navbar;
