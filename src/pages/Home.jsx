function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-2xl text-center">
        
        <h1 className="text-5xl font-bold text-slate-800 mb-5">
          Welcome to React Concepts 🚀
        </h1>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          This project is created to practice all important React concepts
          like Components, Props, State, Hooks, Routing, Forms, API Calls,
          Context API, and more.
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
          Explore Concepts
        </button>

      </div>
    </div>
  );
}

export default Home;