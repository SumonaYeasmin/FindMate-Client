import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const item = useLoaderData()
    // console.log(item)
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full overflow-hidden">
            {/* Thumbnail */}
            <img
                src={item.thumbnail}
                alt="Thumbnail"
                className="w-full h-64 object-cover"
            />

            {/* Content */}
            <div className="p-6">
                {/* Title and Post Type */}
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{item.title}</h1>
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full 
                    ${item.postType === "Found" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {item.postType}
                </span>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-relaxed">{item.description}</p>

                {/* Details Section */}
                <div className="mt-6 space-y-4">
                    <div className="flex items-center text-gray-700">
                        <strong className="w-32">Category:</strong>
                        <span>{item.category}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <strong className="w-32">Location:</strong>
                        <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <strong className="w-32">Contact Name:</strong>
                        <span>{item.contactName}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <strong className="w-32">Contact Email:</strong>
                        <span>{item.contactEmail}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex justify-end space-x-4">
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700">
                        Email Owner
                    </button>
                    <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400">
                        Back to List
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PostDetails;