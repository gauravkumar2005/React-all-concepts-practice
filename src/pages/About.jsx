function About() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-3xl">
        
        <h1 className="text-4xl font-bold text-slate-800 mb-6 text-center">
          About This Project
        </h1>

        <p className="text-gray-700 text-lg leading-8 mb-5">
          This React Concepts Project is built for learning and practicing
          important React topics in a simple and practical way.
        </p>

        <p className="text-gray-700 text-lg leading-8 mb-5">
          In this project, different pages and components are created to
          understand how React works in real applications.
        </p>

        <p className="text-gray-700 text-lg leading-8 mb-5">
          Topics included in this project:
        </p>

        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
          <li>Components</li>
          <li>JSX</li>
          <li>Props</li>
          <li>useState Hook</li>
          <li>useEffect Hook</li>
          <li>React Router</li>
          <li>Forms Handling</li>
          <li>API Fetching</li>
          <li>Context API</li>
          <li>Tailwind CSS</li>
        </ul>

        <div className="mt-8 text-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}

export default About;