import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const PostDetails = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const navigate = useNavigate();
    const [recoveredDate, setRecoveredDate] = useState(new Date());
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data?.status === 'recovered') {
            toast.error('Item already recovered!');
            return;
        }

        const form = new FormData(e.target);
        const initialData = Object.fromEntries(form.entries());
        const itemId = data._id;
        const recoveredItem = { ...initialData, itemId, recoveredPersonThumbnail: user.photoURL };

        fetch('https://find-mate-server-side.vercel.app/recoveredItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recoveredItem),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success('Item recovered successfully!');
                navigate('/allRecovered');
            });

        setModalOpen(false);
    };

    return (
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg mt-16">
            <Helmet>
                <title>PostDetails | FindMate</title>
            </Helmet>
            <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                    src={data.thumbnail}
                    alt="Thumbnail"
                    className="w-28 h-28 md:w-36 md:h-36 rounded-lg shadow-md"
                />
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
                    <p className="text-gray-600">{data.description}</p>
                </div>
            </div>
            <div className="mt-6 border-t pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                        <strong>Post Type:</strong> {data.postType}
                    </div>
                    <div>
                        <strong>Category:</strong> {data.category}
                    </div>
                    <div>
                        <strong>Location:</strong> {data.location}
                    </div>
                    <div>
                        <strong>Contact Name:</strong> {data.contactName}
                    </div>
                    <div>
                        <strong>Email:</strong>{' '}
                        <a
                            href={`mailto:${data.contactEmail}`}
                            className="text-blue-500 hover:underline"
                        >
                            {data.contactEmail}
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <button
                    onClick={() => setModalOpen(true)}
                    className={`btn w-full md:w-auto text-white px-6 py-2 rounded-md ${
                        data.postType === 'Lost' ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'
                    }`}
                >
                    {data.postType === 'Lost' ? 'Found This!' : 'This is Mine!'}
                </button>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-96">
                        <h3 className="text-lg font-semibold mb-4">Recover Item Details</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="recoveredLocation" className="block text-gray-700">
                                    Recovered Location
                                </label>
                                <input
                                    type="text"
                                    name="recoveredLocation"
                                    placeholder="Enter recovery location"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="recoveredDate" className="block text-gray-700">
                                    Date
                                </label>
                                <DatePicker
                                    selected={recoveredDate}
                                    onChange={(date) => setRecoveredDate(date)}
                                    dateFormat="yyyy/MM/dd"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="recoveredPersonName"
                                        value={user.displayName}
                                        readOnly
                                        className="mt-1 p-2 w-full border rounded-md bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="recoveredPersonEmail"
                                        value={user.email}
                                        readOnly
                                        className="mt-1 p-2 w-full border rounded-md bg-gray-100"
                                    />
                                </div>
                                <div className="text-center">
                                    <img
                                        src={user.photoURL}
                                        alt="User"
                                        className="w-16 h-16 rounded-full mx-auto border"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
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
