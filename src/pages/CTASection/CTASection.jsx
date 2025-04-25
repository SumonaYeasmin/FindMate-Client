import { ArrowRightIcon } from "@heroicons/react/24/solid";

const CTASection = () => {
    return (
        <section className="bg-gray-100 rounded-2xl shadow-xl px-6 py-12 md:py-16 mx-4 md:mx-auto my-12 max-w-6xl relative overflow-hidden border">
            {/* Abstract background elements - now in blue tones */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-blue-500"></div>
                <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-blue-400"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left Side - Illustration */}
                <div className="flex justify-center md:justify-start">
                    <div className="relative">
                        <div className="w-48 h-48 md:w-64 md:h-64 bg-blue-50 rounded-2xl backdrop-blur-sm border-2 border-blue-100 flex items-center justify-center">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                className="w-32 h-32 text-blue-600"
                            >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                <path d="M8 10h.01"></path>
                                <path d="M12 10h.01"></path>
                                <path d="M16 10h.01"></path>
                            </svg>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-full p-3 shadow-lg">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                className="w-8 h-8 text-blue-800"
                            >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Side Text */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Join Our Community of Helpful People
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Every day, hundreds of lost items are reunited with their owners through our platform. Be part of this positive movement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="/register"
                            className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 hover:scale-105"
                        >
                            Get Started <ArrowRightIcon className="ml-2 h-5 w-5 " />
                        </a>
                        <a
                            href="/aboutUs"
                            className="inline-flex items-center justify-center bg-transparent border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-200 transition duration-300 hover:scale-105"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;