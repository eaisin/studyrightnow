const Footer = () => {
  return (
    <footer className="bg-black space-y-4 py-6 border-t border-gray-800 text-center mt-auto">
      <p className="text-gray-500 text-md">All rights reserved</p>
      <p className="text-gray-500 text-md">
        &copy; 2019 - {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
