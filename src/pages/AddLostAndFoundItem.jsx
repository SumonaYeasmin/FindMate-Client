import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";


const AddLostAndFoundItem = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form Submitted");
        const form = new FormData(e.target);
        const initialData = Object.fromEntries(form.entries());
        // console.log(initialData);

        // fetch("https://find-mate-server-side.vercel.app/allItems", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(initialData),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.insertedId) {
        //             toast.success("Items added successfully in the database!");
        //         }
        //     })
        //     .catch((error) => {
        //         toast.error(`Failed to create items: ${error.message}`);
        //     });

        // axios.post("https://find-mate-server-side.vercel.app/allItems", initialData, { withCredentials: true })
        //     .then((res) => {
        //         if (res.data.insertedId) {
        //             toast.success("Items added successfully in the database!");
        //         }
        //     })
        //     .catch((error) => {
        //         toast.error(`Failed to create items: ${error.message}`);
        //     });

        axiosSecure.post("/allItems", initialData)
            .then((res) => {
                if (res.data.insertedId) {
                    toast.success("Items added successfully in the database!");
                }
            })
            .catch((error) => {
                toast.error(`Failed to create items: ${error.message}`);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center  py-6">
            <Helmet>
                <title>AddLost&FoundItems | FindMate</title>
            </Helmet>
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
                    Add Lost & Found Item
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Post Type */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Post Type</label>
                        <select
                            name="postType"
                            required
                            defaultValue=''
                            className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        >
                            <option disabled value="">Select post type</option>
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
                            defaultValue=""
                            className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        >
                            <option disabled value="">Select Category</option>
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
                            required
                            placeholder="Enter location"
                            className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        />
                    </div>

                    {/* Date Lost/Found */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Date Lost/Found</label>
                        <DatePicker
                            // showIcon
                            name="date"
                            selected={startDate}
                            defaultValue="yyyy/mm/dd"
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
                            value={user?.displayName}
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
                            value={user?.email}
                            className="block w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 shadow-sm text-gray-800"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLostAndFoundItem;
