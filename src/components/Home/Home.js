import React from "react";

const Home = () => {
  return (
    <div
      className="hero min-h-[90.8vh]"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1665512983234-5053c892365b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Enhance Your Career</h1>
          <p className="mb-5">
            With our comprehensive curriculum and expert instructors, you'll
            have the knowledge and skills you need to succeed in today's
            competitive world
          </p>
          <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cyan-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-cyan-200 transition duration-300 hover:bg-cyan-600 hover:shadow-md hover:shadow-cyan-200 focus:bg-cyan-700 focus:shadow-md focus:shadow-cyan-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-300 disabled:shadow-none">
            <span>Get The Course</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
