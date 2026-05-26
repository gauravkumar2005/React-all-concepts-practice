

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>

      <UserCard
        name="Gaurav Kumar"
        role="Frontend Developer"
      />

      <UserCard
        name="React Learner"
        role="Student"
      />
    </div>
  );
}

export default Home;