import { FaFacebook, FaInstagram,FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-12 mt-16 shadow-xl">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-extrabold text-white">WhereIsIt</h3>
              <p className="mt-2 text-gray-100">The best platform for finding lost and found items!</p>
            </div>
  
            {/* Center Section */}
            <div className="mt-6 lg:mt-0">
              <ul className="flex justify-center lg:justify-start space-x-8">
                <li>
                  <a href="#home" className="text-lg hover:text-yellow-400 transition duration-300">Home</a>
                </li>
                <li>
                  <a href="#lost-items" className="text-lg hover:text-yellow-400 transition duration-300">Lost Items</a>
                </li>
                <li>
                  <a href="#found-items" className="text-lg hover:text-yellow-400 transition duration-300">Found Items</a>
                </li>
                <li>
                  <a href="#contact" className="text-lg hover:text-yellow-400 transition duration-300">Contact</a>
                </li>
              </ul>
            </div>
  
            {/* Right Section (Social Media) */}
            <div className="mt-6 lg:mt-0 flex justify-center space-x-8">
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
  
          {/* Bottom Section (Copyright) */}
          <div className="mt-8 text-center text-gray-200">
            <p>© 2024 WhereIsIt. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

    );
};

export default Footer;