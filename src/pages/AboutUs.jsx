import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="p-6 text-center bg-gray-200 px-2 rounded-md text-black my-16 container mx-auto">
      {/* Hero Section */}
      <div className="mb-10">
        <img src="https://i.ibb.co.com/wcCn2dy/358b91f478356cb6de99fcdf102d9844.jpg" alt="FindMate Logo" className="mx-auto w-20 mb-4" />
        <h1 className="text-3xl font-bold">About FindMate</h1>
        <h2 className="text-xl text-indigo-700 mt-2">Your trusted lost & found companion!</h2>
      </div>

      <p className="mt-4 text-lg mx-auto max-w-2xl">
        FindMate is a platform designed to help people find their lost items. 
        We assist users in posting and searching for lost belongings.
      </p>

      {/* Our Mission */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-2 text-lg mx-auto max-w-2xl">
          Our mission is to make it easier for people to find their lost valuables. 
          FindMate aims to create a secure community where individuals can share 
          lost and found items effortlessly.
        </p>
      </div>

      {/* How It Works */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">How FindMate Works?</h2>
        <ul className="mt-4 text-lg max-w-3xl mx-auto text-left list-disc list-inside">
          <li><span className="font-bold">Register:</span> Create an account to get started.</li>
          <li><span className="font-bold">Post Lost or Found Items:</span> If you lose something or find an item, create a post.</li>
          <li><span className="font-bold">Connect with Owners:</span> Contact the owner or the finder directly.</li>
          <li><span className="font-bold">Return Safely:</span> Ensure the item is returned securely to its rightful owner.</li>
        </ul>
      </div>

      {/* Core Values */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold text-lg text-indigo-700">Trust</h3>
          <p className="mt-2 text-gray-700">We ensure all listings are safe and verified.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold text-lg text-indigo-700">Community</h3>
          <p className="mt-2 text-gray-700">Built to help each other in times of need.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold text-lg text-indigo-700">Security</h3>
          <p className="mt-2 text-gray-700">Your data and privacy are our top priority.</p>
        </div>
      </div>

      {/* Our Team */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <p className="mt-2 text-lg max-w-3xl mx-auto">
          Our dedicated team is constantly working to improve the FindMate platform.  
          We strive to provide a safe and reliable experience for every user.
        </p>
      </div>



      {/* Contact Info */}
      <div className="mt-12 p-4 bg-white shadow-xl border rounded-xl max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-lg">📧 Email: <span className="text-blue-400">support@findmate.com</span></p>
        <p className="text-lg">📞 Phone: <span className="text-blue-400">+880 123 456 789</span></p>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to help or be helped?</h2>
        <Link to="/register">
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow hover:bg-indigo-700 transition duration-300">
            Join FindMate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
