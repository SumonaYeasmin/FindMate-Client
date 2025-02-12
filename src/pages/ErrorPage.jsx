import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <img className="h-2/4" src="https://i.ibb.co.com/sv2WWXKW/404-Error-rafiki-removebg-preview.png" alt="" />
            <Link to="/" className="text-xl -mt-10 text-indigo-600 font-bold border border-indigo-500 rounded-full px-4 py-1 hover:bg-indigo-300 transition duration-300  bg-white ">
                🔙 Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
