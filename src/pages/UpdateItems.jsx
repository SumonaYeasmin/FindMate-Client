import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData, useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const UpdateItems = () => {

    const loaderData = useLoaderData();
    const [startDate, setStartDate] = useState(loaderData.date);
    const navigate = useNavigate();
    const { _id, category, contactEmail, contactName, description, location, postType, thumbnail, title, date } = loaderData;

    const handleUpdated = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const updatedData = Object.fromEntries(form.entries());
        console.log(updatedData);
        fetch(`http://localhost:5000/allItems/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Item updated successfully!');
                    navigate('/myItems');
                }
            })
            .catch(error => {
                // console.error(error);
                toast.error(`Failed to update items: ${error.code}`);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center  py-6">
            <Helmet>
                <title>UpdateItems | FindMate</title>
            </Helmet>
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
                    Updated Items
                </h2>
                <form onSubmit={handleUpdated} className="space-y-6">
                    {/* Post Type */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Post Type</label>
                        <select
                            name="postType"
                            required
                            defaultValue={postType}
                            className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        >
                            <option value="Lost">Lost</option>
                            <option value="Found">Found</option>
                        </select>
                    </div>

                    {/* Thumbnail */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Thumbnail (URL)</label>
                        <input
                            type="url"
                            name="thumbnail"
                            placeholder="Enter image URL"
                            defaultValue={thumbnail}
                            required
                            className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        />
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            defaultValue={title}
                            required
                            className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                        <textarea
                            name="description"
                            placeholder="Enter description"
                            defaultValue={description}
                            rows="4"
                            required
                            className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                        <select
                            name="category"
                            required
                            defaultValue={category}
                            className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        >
                            <option value="Pets">Pets</option>
                            <option value="Documents">Documents</option>
                            <option value="Gadgets">Gadgets</option>
                        </select>
                    </div>


                    {/* Location */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={location}
                            required
                            placeholder="Enter location"
                            className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        />
                    </div>

                    {/* Date Lost/Found */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Date Lost/Found</label>
                        <DatePicker
                            name='date'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                            wrapperClassName="w-full"
                            dateFormat="yyyy/MM/dd"
                        />
                    </div>

                    {/* Contact Information */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Name</label>
                        <input
                            type="text"
                            name="contactName"
                            readOnly
                            defaultValue={contactName}
                            required
                            className="block w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 shadow-sm text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Email</label>
                        <input
                            type="email"
                            name="contactEmail"
                            readOnly
                            defaultValue={contactEmail}
                            className="block w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 shadow-sm text-gray-800"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                            Updated Items
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;