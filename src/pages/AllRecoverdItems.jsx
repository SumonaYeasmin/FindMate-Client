import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const AllRecoveredItems = () => {
    const { user } = useContext(AuthContext);
    const [manageMyItems, setManageMyItems] = useState([]);
    const [isTableLayout, setIsTableLayout] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            // fetch(`http://localhost:5000/recoveredItems/email/${user?.email}`,)
            //     .then((res) => res.json())
            //     .then((data) => setManageMyItems(data));

            // axios.get(`http://localhost:5000/recoveredItems/email/${user?.email}`, { withCredentials: true })
            //     .then((res) => setManageMyItems(res.data));

            axiosSecure.get(`/recoveredItems/email/${user?.email}`)
                .then((res) => {
                    setManageMyItems(res.data)
                })
                .catch((error) => {
                    console.error(error)
                });
        }
    }, [user?.email]);

    return (
        <div className="container mx-auto p-4">
            <Helmet>
                <title>AllRecoverdItems | FindMate</title>
            </Helmet>
            <h1 className="text-2xl font-semibold mb-4 text-center">Recovered Items</h1>

            {/* Layout Toggle Button */}
            <div className="flex justify-end mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    onClick={() => setIsTableLayout(!isTableLayout)}
                >
                    {isTableLayout ? "Switch to Card View" : "Switch to Table View"}
                </button>
            </div>

            {/* If no items found */}
            {manageMyItems.length === 0 ? (
                <div className="text-center text-lg text-gray-500">
                    No recovered items found!
                </div>
            ) : isTableLayout ? (
                // Table Layout
                <div className="overflow-x-auto border-l border-r border-t rounded-lg">
                    <table className="min-w-full table-auto border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">SL No</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Thumbnail</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manageMyItems.map((item, idx) => (
                                <tr key={idx} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-4 py-2 text-sm text-gray-700">{idx + 1}</td>
                                    <td className="px-4 py-2">
                                        <img
                                            src={item.recoveredPersonThumbnail}
                                            alt={item.recoveredPersonName}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-700">{item.recoveredPersonName}</td>
                                    <td className="px-4 py-2 text-sm text-gray-700">{item.recoveredPersonEmail}</td>
                                    <td className="px-4 py-2 text-sm text-gray-700">
                                        {new Date(item.recoveredDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-700">{item.recoveredLocation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                // Card Layout
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {manageMyItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition duration-200"
                        >
                            <img
                                src={item.recoveredPersonThumbnail}
                                alt={item.recoveredPersonName}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800">{item.recoveredPersonName}</h2>
                                <p className="text-sm text-gray-600">Email: {item.recoveredPersonEmail}</p>
                                <p className="text-sm text-gray-600">
                                    Date: {new Date(item.recoveredDate).toLocaleDateString()}
                                </p>
                                <p className="text-sm text-gray-600">Location: {item.recoveredLocation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllRecoveredItems;
