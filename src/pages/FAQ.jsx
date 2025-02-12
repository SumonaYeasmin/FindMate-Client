import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    
      <div className="container bg-gradient-to-r from-blue-100 to-purple-100 mx-auto px-16 py-10 my-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {/* Question 1 */}
          <div
            className="bg-white p-6 rounded-lg border shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => toggleAnswer(0)}
          >
            <h3 className="text-lg font-semibold text-gray-800 cursor-pointer">
              How can I report a lost or found item?
            </h3>
            {activeIndex === 0 && (
              <p className="text-gray-600 mt-2">
                You can report a lost or found item by clicking on the "Report" button in the navigation bar and filling out the required details.
              </p>
            )}
          </div>
          {/* Question 2 */}
          <div
            className="bg-white p-6 rounded-lg border shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => toggleAnswer(1)}
          >
            <h3 className="text-lg font-semibold text-gray-800 cursor-pointer">
              Is there any cost to use this platform?
            </h3>
            {activeIndex === 1 && (
              <p className="text-gray-600 mt-2">
                No, our platform is completely free to use. Our goal is to help people reconnect with their lost belongings.
              </p>
            )}
          </div>
          {/* Question 3 */}
          <div
            className="bg-white p-6 rounded-lg border shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => toggleAnswer(2)}
          >
            <h3 className="text-lg font-semibold text-gray-800 cursor-pointer">
              How do I contact the owner or finder of an item?
            </h3>
            {activeIndex === 2 && (
              <p className="text-gray-600 mt-2">
                You can view the contact details of the post owner on the details page. Use the provided email or phone number to connect with them.
              </p>
            )}
          </div>
        </div>
      </div>
   
  );
};

export default FAQ;
