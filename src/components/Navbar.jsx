import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";


const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                toast.success("User Logout Successful.");
            })
            .catch(error => {
                toast.error(error.code);
            })
    }

    const links = (
        <div className="lg:flex gap-3 lg:gap-0 xl:gap-0 text-base md:text-lg lg:text-sm 2xl:text-lg font-semibold">
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/lost-items" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>Lost Items</NavLink>
            </li>
        </div>
    );

    return (

        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
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
                <a className="btn btn-ghost text-3xl">FindMate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user && <img
                                    data-tooltip-id="my-tooltip-1"
                                    alt="Photo"
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
                            <NavLink to="/found-items" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>Found Items</NavLink>
                        </li>
                        <li>
                            <NavLink to="/add-items" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>Add Items</NavLink>
                        </li>
                        <li>
                            <NavLink to="/all-recoverd" className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-base md:text-lg lg:text-sm 2xl:text-lg' : ''}>All Recoverd</NavLink>
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
    );
};

export default Navbar;
