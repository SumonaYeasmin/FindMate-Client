import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';

const PostDetails = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const navigate = useNavigate();
    const [recoveredDate, setRecoveredDate] = useState(new Date());
    const [modalOpen, setModalOpen] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(data?.status === 'recovered') {
            // console.log('Item already recovered!');
            toast.error('Item already recovered!');
            return;
        }

        const form = new FormData(e.target);
        const initialData = Object.fromEntries(form.entries());
        const itemId = data._id;
        const recoveredItem = { ...initialData, itemId, recoveredPersonThumbnail: user.photoURL };
        // console.log(recoveredItem);

        fetch('http://localhost:5000/recoveredItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recoveredItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success('Item recovered successfully!');
                navigate('/allRecovered');
            })


        setModalOpen(false);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
                <img
                    src={data.thumbnail}
                    alt="Thumbnail"
                    className="w-16 h-16 rounded-full mr-4"
                />
                <h2 className="text-2xl font-semibold text-gray-800">{data.title}</h2>
            </div>
            <div className="text-gray-600 mb-4">
                <p><strong>Post Type:</strong> {data.postType}</p>
                <p><strong>Category:</strong> {data.category}</p>
                <p><strong>Location:</strong> {data.location}</p>
                <p><strong>Description:</strong> {data.description}</p>
            </div>
            <div className="border-t pt-4 mt-4">
                <p className="text-gray-700 font-semibold">Contact Information</p>
                <p><strong>Name:</strong> {data.contactName}</p>
                <p><strong>Email:</strong> <a href={`mailto:${data.contactEmail}`} className="text-blue-500">{data.contactEmail}</a></p>
            </div>
            <div>
                {
                    data.postType === 'Lost' ? (
                        <button
                            onClick={() => setModalOpen(true)}
                            className='btn bg-red-500 hover:bg-red-700 text-white'>
                            Found This!
                        </button>
                    ) : (
                        <button
                            onClick={() => setModalOpen(true)}
                            className='btn bg-green-500 hover:bg-green-700 text-white'>
                            This is Mine!
                        </button>
                    )
                }
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="font-bold text-lg mb-4">Recover Item Details</h3>

                        <form onSubmit={handleSubmit}>
                            {/* Recovered Location */}
                            <div className="mb-4">
                                <label htmlFor="recoveredLocation" className="block text-sm font-medium text-gray-700">
                                    Recovered Location
                                </label>
                                <input
                                    type="text"
                                    name="recoveredLocation"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    placeholder="Enter location where the item was received"
                                    required
                                />
                            </div>

                            {/* Recovered Date */}
                            <div className="mb-4 w-full">
                                <label htmlFor="recoveredDate" className="block text-sm font-medium text-gray-700">
                                    Date
                                </label>
                                <DatePicker
                                    name='recoveredDate'
                                    selected={recoveredDate}
                                    placeholderText='Select Date'
                                    onChange={(date) => setRecoveredDate(date)}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    wrapperClassName="w-full"
                                    dateFormat="yyyy/MM/dd"
                                    required
                                />
                            </div>

                            {/* Recovered Person Info */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name='recoveredPersonName'
                                        value={user.displayName}
                                        readOnly
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name='recoveredPersonEmail'
                                        value={user.email}
                                        readOnly
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                                    <img
                                        src={user.photoURL}
                                        alt="User"
                                        className="w-16 h-16 rounded-full border border-gray-300 mt-2"
                                    />
                                </div>
                            </div>


                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="btn bg-gray-300 hover:bg-gray-500 text-black">
                                    Close
                                </button>
                                <button
                                    className="btn bg-blue-500 hover:bg-blue-700 text-white">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostDetails;
