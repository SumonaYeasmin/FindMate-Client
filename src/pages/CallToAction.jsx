const CallToAction = () => {
    return (
        <div className="bg-blue-100 py-20 text-white my-16"> 
            <div className="container mx-auto px-6 lg:px-20 text-center space-y-6">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-gray-800">
                    Reunite Lost Items with Their Owners!
                </h2>
                {/* Subtitle */}
                <p className="text-lg md:text-xl font-medium text-gray-700">
                    Join our mission to help connect people with their lost treasures. It’s quick, easy, and impactful.
                </p>
                {/* Buttons */}
                <div className="mt-8 flex justify-center gap-6 flex-wrap">
                    <button className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition-transform duration-200">
                        Report Lost Item
                    </button>
                    <button className="bg-white text-pink-600 py-3 px-8 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition-transform duration-200">
                        Report Found Item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
