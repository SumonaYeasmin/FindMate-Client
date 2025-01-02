import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-12 mt-16 shadow-xl">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-6 lg:mb-0 lg:w-1/3">
            <h3 className="text-3xl font-extrabold text-white">FindMate</h3>
            <p className="mt-3 text-gray-200">
              Your trusted platform for connecting people with lost and found items.
            </p>
            <p className="mt-2 text-gray-300">
              <FaPhoneAlt className="inline mr-2" /> +880 123 456 789
            </p>
            <p className="mt-1 text-gray-300">
              <FaEnvelope className="inline mr-2" /> support@findmate.com
            </p>
          </div>

          {/* Center Section */}
          <div className="mb-6 lg:mb-0 lg:w-1/3">
            <h4 className="text-2xl font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-lg hover:text-yellow-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#lost-items"
                  className="text-lg hover:text-yellow-400 transition duration-300"
                >
                  Lost Items
                </a>
              </li>
              <li>
                <a
                  href="#found-items"
                  className="text-lg hover:text-yellow-400 transition duration-300"
                >
                  Found Items
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg hover:text-yellow-400 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3">
            <h4 className="text-2xl font-semibold text-white">Subscribe to Our Newsletter</h4>
            <p className="mt-2 text-gray-200">
              Stay updated with our latest features and announcements.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full sm:w-auto sm:flex-1 rounded-md text-black focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-4 px-2 xl:px-6 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-600 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-400 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-pink-600 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-gray-200 border-t border-gray-400 pt-6">
          <p>© 2024 FindMate. All Rights Reserved.</p>
          <p className="mt-2">
            Designed and Developed by <span className="font-bold">Sumona Yeasmin</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
