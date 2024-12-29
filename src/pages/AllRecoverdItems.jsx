import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllRecoveredItems = () => {
    const { user } = useContext(AuthContext);
    const [manageMyItems, setManageMyItems] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/recoveredItems/email/${user?.email}`)
                .then((res) => res.json())
                .then((data) => setManageMyItems(data));
        }
    }, [user?.email]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4 text-center">Recovered Items</h1>

            {/* If no items found */}
            {manageMyItems.length === 0 ? (
                <div className="text-center text-lg text-gray-500">
                    No recovered items found!
                </div>
            ) : (
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
            )}
        </div>
    );
};

export default AllRecoveredItems;
