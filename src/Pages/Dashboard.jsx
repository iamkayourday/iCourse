import React from "react";

const Dashboard = () => {
  return (
    <>
      <section className="md:ml-72 rounded-lg bg-white md:mr-10 lg:mr-40 mb-10">
        {/* Main content area */}
        <article className="p-3 mt-8">
          <header className="p-2">
            <h1 className="md:text-4xl text-xl font-medium text-gray-800 mb-4">
              Welcome to iCourse
            </h1>
          </header>
          <p className="text-gray-400 md:text-xl text-lg">
            The Ultimate Guide to Web Design and Development.
          </p>
        </article>
      </section>
    </>
  );
};

export default Dashboard;