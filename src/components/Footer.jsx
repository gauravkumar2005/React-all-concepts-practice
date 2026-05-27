function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            React Concepts
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            Learn and practice React step by step 🚀
          </p>
        </div>

        {/* CENTER */}
        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:text-cyan-400 transition duration-300">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition duration-300">
            About
          </a>

          <a href="#" className="hover:text-cyan-400 transition duration-300">
            Contact
          </a>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-gray-400 text-sm">
            © 2026 React Concepts. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;