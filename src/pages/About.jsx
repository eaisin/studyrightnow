const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
          <p className="text-gray-400">
            to reboot SRN
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-2">Our Stack</h3>
          <p className="text-gray-400">
            React, Tailwind CSS, Vite,
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
