function Concepts() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        
        <h1 className="text-4xl font-bold text-center mb-10">
          React All Concepts
        </h1>

        {/* JSX */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            JSX
          </h2>

          <p className="text-gray-700 leading-7">
            JSX stands for JavaScript XML. It allows developers to write
            HTML inside JavaScript. JSX makes React code easier to read
            and helps create UI components in a simple way.
          </p>
        </div>

        {/* Components */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            Components
          </h2>

          <p className="text-gray-700 leading-7">
            Components are reusable pieces of UI in React. They help divide
            the application into smaller parts, making the code organized
            and easier to manage.
          </p>
        </div>

        {/* Props */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            Props
          </h2>

          <p className="text-gray-700 leading-7">
            Props are used to pass data from one component to another.
            They help make components dynamic and reusable.
          </p>
        </div>

        {/* useState */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            useState Hook
          </h2>

          <p className="text-gray-700 leading-7">
            useState is a React Hook used to manage data inside functional
            components. It helps update the UI whenever the state changes.
          </p>
        </div>

        {/* useEffect */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            useEffect Hook
          </h2>

          <p className="text-gray-700 leading-7">
            useEffect is used for handling side effects such as API calls,
            timers, and updating the document title in React applications.
          </p>
        </div>

        {/* Event Handling */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            Event Handling
          </h2>

          <p className="text-gray-700 leading-7">
            Event handling is used to respond to user actions like clicks,
            typing, and form submission in React applications.
          </p>
        </div>

        {/* Conditional Rendering */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            Conditional Rendering
          </h2>

          <p className="text-gray-700 leading-7">
            Conditional rendering allows showing different UI elements
            based on conditions using JavaScript logic.
          </p>
        </div>

        {/* React Router */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            React Router
          </h2>

          <p className="text-gray-700 leading-7">
            React Router is used for navigation between pages in a React
            application without reloading the website.
          </p>
        </div>

        {/* API Fetching */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            API Fetching
          </h2>

          <p className="text-gray-700 leading-7">
            API fetching is used to get data from external servers and
            display it inside React applications.
          </p>
        </div>

        {/* Context API */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            Context API
          </h2>

          <p className="text-gray-700 leading-7">
            Context API helps share data globally between components
            without passing props manually at every level.
          </p>
        </div>

        {/* Tailwind CSS */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            Tailwind CSS
          </h2>

          <p className="text-gray-700 leading-7">
            Tailwind CSS is a utility-first CSS framework used for styling
            React applications quickly and efficiently.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Concepts;