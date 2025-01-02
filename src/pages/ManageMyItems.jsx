import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const ManageMyItems = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const axiosSecure = useAxiosSecure();
    // const [manageMyItems, setManageMyItems] = useState([]);
    const [manageMyItems, setManageMyItems] = useState([]);
    // console.log(manageMyItems);

    useEffect(() => {
        // fetch(`http://localhost:5000/allItems/email/${user?.email}`, {withcredentials: true})
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setManageMyItems(data)
        //     })

        axiosSecure.get(`/allItems/email/${user?.email}`)
            .then(res => {
                // console.log(res.data);
                setManageMyItems(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [user?.email])

    const handleDelete = (id) => {
        console.log("Delete functionality will be here", id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allItems/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            const remainingItems = manageMyItems.filter(item => item._id !== id);
                            setManageMyItems(remainingItems);

                            Swal.fire({
                                icon: "success",
                                title: "Deleted!",
                                text: "Your item has been deleted."
                            })
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        Swal.fire({
                            icon: "error",
                            title: "Failed!",
                            text: "Failed to delete the item."
                        })
                    })
            }
        });

    };

    return (
        <div className="container mx-auto p-4">
            <Helmet>
                <title>ManageMyItems | FindMate</title>
            </Helmet>
            <h1 className="text-2xl font-semibold mb-4">Manage My Items</h1>

            {/* If no items found */}
            {manageMyItems.length === 0 ? (
                <div className="text-center text-lg text-gray-500">
                    You haven’t added any items yet!
                </div>
            ) : (
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-4 text-left text-base font-medium text-gray-500">Sl No</th>
                                <th className="px-4 py-4 text-left text-base  font-medium text-gray-500">Title</th>
                                <th className="px-4 py-4 text-left text-base font-medium text-gray-500">Category</th>
                                <th className="px-4 py-4 text-left text-base font-medium text-gray-500">Location</th>
                                <th className="px-4 py-4 text-left text-base font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manageMyItems.map((item, idx) => (
                                <tr key={item._id} className="bg-white border-b">
                                    <td className="px-4 py-4 text-base text-gray-700">{idx + 1}</td>
                                    <td className="px-4 py-4 text-base text-gray-700">{item.title}</td>
                                    <td className="px-4 py-4 text-base text-gray-700">{item.category}</td>
                                    <td className="px-4 py-4 text-base text-gray-700">{item.location}</td>
                                    <td className="px-4 py-4 text-base text-gray-700">
                                        <Link to={`/updatedItems/${item._id}`}>
                                            <button
                                                className="bg-blue-500 text-white py-1 md:py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                            >
                                                Update
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="ml-2 bg-red-500 text-white py-1 md:py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition-colors duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageMyItems;
