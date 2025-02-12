

const AboutUs = () => {
    return (
        <div className="p-6 text-center bg-gray-200 px-2  text-black my-10 container mx-auto ">
        <h1 className="text-3xl font-bold ">About FindMate</h1>
        <p className="mt-4 text-lg mx-auto">
          FindMate is a platform designed to help people find their lost items. 
          We assist users in posting and searching for lost belongings.  
        </p>
  
        {/* Our Mission */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold ">Our Mission</h2>
          <p className="mt-2 text-lg  mx-auto">
            Our mission is to make it easier for people to find their lost valuables. 
            FindMate aims to create a secure community where individuals can share 
            lost and found items effortlessly.  
          </p>
        </div>
  
        {/* How It Works */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold ">How FindMate Works?</h2>
          <ul className="mt-4 text-lg max-w-3xl mx-auto text-left list-disc list-inside">
            <li><span className=" font-bold">Register:</span> Create an account to get started.</li>
            <li><span className="font-bold">Post Lost or Found Items:</span> If you lose something or find an item, create a post.</li>
            <li><span className=" font-bold">Connect with Owners:</span> Contact the owner or the finder directly.</li>
            <li><span className=" font-bold">Return Safely:</span> Ensure the item is returned securely to its rightful owner.</li>
          </ul>
        </div>
  
        {/* Our Team */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold ">Our Team</h2>
          <p className="mt-2 text-lg max-w-3xl mx-auto">
            Our dedicated team is constantly working to improve the FindMate platform.  
            We strive to provide a safe and reliable experience for every user.  
          </p>
        </div>
  
        {/* Contact Info */}
        <div className="mt-8 p-4 bg-white shadow-xl border rounded-xl max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold ">Contact Us</h2>
          <p className="mt-2 text-lg">📧 Email: <span className="text-blue-400">support@findmate.com</span></p>
          <p className="text-lg">📞 Phone: <span className="text-blue-400">+880 123 456 789</span></p>
        </div>
      </div>


            );
};

            export default AboutUs;