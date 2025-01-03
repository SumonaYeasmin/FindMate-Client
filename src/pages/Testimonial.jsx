import { motion } from "framer-motion";

const Testimonial = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-16 container mx-auto">
            <div className="container mx-auto px-6 lg:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                    What Our Users Say
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <p className="text-gray-600 italic">
                            "I lost my wallet at the park, and within 2 days, someone returned it
                            to me through this platform. Amazing experience!"
                        </p>
                        <div className="mt-6 flex items-center">
                            <motion.img
                                src="https://i.ibb.co.com/n1H91n3/Sf7209fc937fa49f08cc24995ce89d445-G.jpg"
                                alt="User 1"
                                className="w-20 h-20 rounded-full border-4 border-indigo-200 shadow-md"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    transition: { duration: 2, repeat: Infinity },
                                }}
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-gray-800">Sultan Sah</h4>
                                <span className="text-sm text-gray-500">Bangladesh, Dhaka</span>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <p className="text-gray-600 italic">
                            "I found a lost pet in my neighborhood and posted it here. The owner
                            contacted me, and we reunited the same day!"
                        </p>
                        <div className="mt-6 flex items-center">
                            <motion.img
                                src="https://i.ibb.co.com/WnHs1Gs/shutterstock-1918920776.jpg"
                                alt="User 2"
                                className="w-20 h-20 rounded-full border-4 border-indigo-200 shadow-md"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    transition: { duration: 2, repeat: Infinity },
                                }}
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-gray-800">Samanta Sinthi</h4>
                                <span className="text-sm text-gray-500">Bangladesh, Khulna</span>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <p className="text-gray-600 italic">
                            "This platform helped me return a found document to its owner.
                            Incredible initiative!"
                        </p>
                        <div className="mt-6 flex items-center">
                            <motion.img
                                src="https://i.ibb.co.com/kKrwZ9P/41-VUZDm4c-ZL-1200x1200.jpg"
                                alt="User 3"
                                className="w-20 h-20 rounded-full border-4 border-indigo-200 shadow-md"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    transition: { duration: 2, repeat: Infinity },
                                }}
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-gray-800">Emily Das</h4>
                                <span className="text-sm text-gray-500">Bangladesh, Dinajpur</span>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <p className="text-gray-600 italic">
                            "I posted a lost phone here, and someone found it! This platform is a lifesaver."
                        </p>
                        <div className="mt-6 flex items-center">
                            <motion.img
                                src="https://i.ibb.co.com/5WFB970/dsc02198.webp"
                                alt="User 4"
                                className="w-20 h-20 rounded-full border-4 border-indigo-200 shadow-md"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    transition: { duration: 2, repeat: Infinity },
                                }}
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-gray-800">Ratul Khan</h4>
                                <span className="text-sm text-gray-500">Bangladesh, Chittagong</span>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <p className="text-gray-600 italic">
                            "Thanks to this website, I was able to find my lost keys in no time!"
                        </p>
                        <div className="mt-6 flex items-center">
                            <motion.img
                                src="https://i.ibb.co.com/VC9N28h/image-asset.jpg"
                                alt="User 5"
                                className="w-20 h-20 rounded-full border-4 border-indigo-200 shadow-md"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    transition: { duration: 2, repeat: Infinity },
                                }}
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-gray-800">Nusrat Jahan</h4>
                                <span className="text-sm text-gray-500">Bangladesh, Sylhet</span>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 6 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <p className="text-gray-600 italic">
                            "The community here is amazing. I found a file and returned it to its rightful owner!"
                        </p>
                        <div className="mt-6 flex items-center">
                            <motion.img
                                src="https://i.ibb.co.com/7XzVqwq/IMG-5777.webp"
                                alt="User 6"
                                className="w-20 h-20 rounded-full border-4 border-indigo-200 shadow-md"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    transition: { duration: 2, repeat: Infinity },
                                }}
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-gray-800">Mahmud Hasan</h4>
                                <span className="text-sm text-gray-500">Bangladesh, Rajshahi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
