

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create an Account",
      description: "Sign up and create a free account to start using the platform.",
    },
    {
      id: 2,
      title: "Post Lost or Found Items",
      description: "If you've lost something, create a post. If you found something, list it here.",
    },
    {
      id: 3,
      title: "Connect with Owners",
      description: "Chat securely with the person who found your lost item and arrange a return.",
    },
    {
      id: 4,
      title: "Get Your Item Back",
      description: "Meet safely and retrieve your lost item from the finder.",
    },
  ];

  return (
    
      <div className="container mt-10 mb-12 mx-auto text-center py-7 px-2">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="p-6 bg-white shadow-lg rounded-2xl relative border">
              <div className="w-12 h-12 flex items-center justify-center text-white text-xl font-bold 
                              bg-blue-400 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2">
                {step.id}
              </div>
              <h3 className="font-semibold text-lg mt-8">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
  
  );
};

export default HowItWorks;
