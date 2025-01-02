import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestLostAndFindItems = () => {
    const [latestItems, setLatestItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/latestItems')
            .then(res => res.json())
            .then(data => {
                setLatestItems(data);
            })
    }, []);

    return (
        <div className='container mx-auto px-2 mb-10'>
            <h1 className=' text-lg md:text-2xl font-semibold my-2'>Latest Lost & Found Items({latestItems.length})</h1>
            {latestItems.length === 0 && <p>No items found!</p>}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {latestItems.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white p-4 shadow-md rounded-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-t-md"
                        />
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-gray-800 truncate">{item.title}</h2>
                            <p className="text-base text-gray-600 mt-2 truncate">{item.descriptions}</p>
                            <p className="text-base text-gray-600 mt-1">Location: {item.location}</p>
                            <p className="text-base text-gray-600">Date: {item.date}</p>
                        </div>
                        <Link 
                            to={`/items/${item._id}`} 
                            className="block mt-4 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white py-2 px-4 rounded-lg shadow hover:from-indigo-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
            <div className='text-center mt-4'>
                <Link to="/allItems" className="btn mt-4 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white py-2 px-16 rounded-lg shadow hover:from-indigo-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">See All</Link>
            </div>
        </div>
    );
};

export default LatestLostAndFindItems;
