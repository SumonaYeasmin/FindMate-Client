import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate(); 
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <Helmet>
                <title>Error | FindMate</title>
            </Helmet>
            <img className="h-2/4" src="https://i.ibb.co.com/sv2WWXKW/404-Error-rafiki-removebg-preview.png" alt="" />
            <div className="space-x-2">
                <button
                    onClick={() => navigate(-1)}
                    className="text-xl -mt-10 text-indigo-600 font-bold border border-indigo-500 rounded-full px-4 py-1 hover:bg-indigo-300 transition duration-300  bg-white "
                >
                    Go Back
                </button>
                <Link to="/" className="text-xl -mt-10 text-indigo-600 font-bold border border-indigo-500 rounded-full px-4 py-1 hover:bg-indigo-300 transition duration-300  bg-white ">
                    🔙 Go Back Home
                </Link>

            </div>

        </div>
    );
};

export default NotFound;
