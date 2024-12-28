
import { Link, useLoaderData } from "react-router-dom";

const LostAndFoundItems = () => {
    const allItems = useLoaderData();
    console.log(allItems);

    // const {thumbnail, title, description, category, location} = allItems;
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {
                allItems.map(item => (
                    <div className="my-10 flex justify-center items-center">
                        <div className=" bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out w-full">
                            {/* Card Image */}
                            <img
                                src={item.thumbnail}
                                alt="Card Thumbnail"
                                className="rounded-t-lg w-full h-48 object-cover"
                            />

                            {/* Card Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {item.title}
                                </h2>

                                {/* Short Information */}
                                <p className="mt-2 text-gray-600">
                                    {item.description}
                                </p>

                                {/* Extra Info */}
                                <div className="mt-4 flex justify-between items-center text-gray-700">
                                    <span className="text-sm font-medium">
                                        Location: {item.location}
                                    </span>
                                    <span className="text-sm font-medium">Category: {item.category}</span>
                                </div>

                                {/* View Details Button */}
                                <Link to={`/items/${item._id}`}>
                                    <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );

};

export default LostAndFoundItems;