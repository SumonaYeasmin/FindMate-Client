import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const LostAndFoundItems = () => {
    const allItems = useLoaderData();
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const categories = [...new Set(allItems.map(item => item.category))];

    const filteredItems = allItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.location.toLowerCase().includes(searchText.toLowerCase());
        const matchesCategory = !selectedCategory || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Helmet>
                <title>Lost & Found Items | FindMate</title>
            </Helmet>
            <h1 className="text-center text-2xl font-semibold mt-7">Lost and Found Items</h1>

            <div className="my-4 flex justify-center items-center">
                <input
                    type="text"
                    placeholder="Search by title or location"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="w-full mb-4 max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
            </div>

            {filteredItems.length === 0 && (
                <p className="text-center text-red-500 text-2xl mt-10">
                    No Items found for "<span className="font-semibold text-purple-600">{searchText}</span>".
                    Please try a different search term.
                </p>
            )}

            <div className="container mx-auto px-4 flex justify-end mb-5">
                <div className="relative w-48">
                    <input
                        type="text"
                        value={selectedCategory || "Sort by Category"}
                        readOnly
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none cursor-pointer bg-indigo-600 text-white transition-transform duration-100 hover:bg-indigo-800 hover:scale-105"
                    />
                    {dropdownOpen && (
                        <ul className="absolute right-0 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-40 overflow-y-auto z-10 text-black">
                            <li
                                onClick={() => { setSelectedCategory(""); setCurrentPage(1); setDropdownOpen(false); }}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                            >
                                All Categories
                            </li>
                            {categories.map(category => (
                                <li
                                    key={category}
                                    onClick={() => { setSelectedCategory(category); setCurrentPage(1); setDropdownOpen(false); }}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="px-2 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {currentItems.map(item => (
                    <div key={item._id} className="my-1 flex justify-center items-center">
                        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out w-full">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="rounded-t-lg w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                                <div className="mt-4 flex justify-between items-center text-gray-700">
                                    <span className="text-sm font-medium">Location: {item.location}</span>
                                    <span className="text-sm font-medium">Category: {item.category}</span>
                                </div>
                                <Link to={`/items/${item._id}`}>
                                    <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
     <div className="container mx-auto px-4">
     <div className="border border-indigo-200 rounded-xl p-1 shadow-sm bg-white  mt-10 mb-10">
         <div className="flex flex-wrap justify-center gap-2">
             {[...Array(totalPages).keys()].map(num => (
                 <button
                     key={num + 1}
                     onClick={() => paginate(num + 1)}
                     className={`px-4 py-2 border rounded-lg transition duration-200 ease-in-out ${
                         currentPage === num + 1
                             ? "bg-indigo-600 text-white border-indigo-600"
                             : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                     }`}
                 >
                     {num + 1}
                 </button>
             ))}
         </div>
     </div>
 </div>
            )}
        </div>
    );
};

export default LostAndFoundItems;
