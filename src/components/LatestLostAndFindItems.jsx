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
    console.log(latestItems);

    return (
        <div className='container mx-auto px-2 mb-10'>
            <h1>Latest Lost & Found Items({latestItems.length})</h1>
            {latestItems.length === 0 && <p>No items found!</p>}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {latestItems.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 shadow-md rounded-md">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                        <p className="text-sm text-gray-600">{item.descriptions}</p>
                        <p className="text-sm text-gray-600">{item.location}</p>
                        <p className="text-sm text-gray-600">{item.date}</p>
                        <Link to={`/items/${item._id}`} className="block mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">View Details</Link>
                    </div>
                ))}
            </div>
            <div className='text-center mt-4'>
                <Link to="/allItems" className="btn mt-4 bg-indigo-600 text-white py-2 px-16 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">See All</Link>
            </div>
        </div>
    );
};

export default LatestLostAndFindItems;