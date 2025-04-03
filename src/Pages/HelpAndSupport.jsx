import React, { useEffect } from "react";

const HelpAndSupport = () => {

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Main content area */}
      <section className="lg:ml-72 rounded-lg bg-white lg:mr-40">
        <article className="p-3 mt-8">
          <header className="p-2">
            <h1 className="md:text-4xl text-xl font-medium text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-400 md:text-xl text-lg mb-10">
              Reach out with your questions and feedback. We're here to help
              with any inquiries you have.
            </p>
          </header>
        </article>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Left Section */}
          <div className="p-6 rounded-md flex flex-col justify-between h-full">
            <div>
              <h2 className="text-black font-medium text-xl mb-4">Contacts</h2>
              <p>
                <strong>Address:</strong>
                <br />
                129 - 131 Mare Street, London E8 3RH, UK
              </p>
              <p className="mt-4">
                <strong>Informations:</strong>
                <br />
                Email: info@iframe.design
                <br />
                Tel: (+44)123456789
              </p>
            </div>
            <div className="mt-6">
              <strong>Social Media:</strong>
              <br />
              Facebook
              <br />
              Instagram
            </div>
          </div>

          {/* Right Section */}
          <form className="p-6 rounded-md flex flex-col justify-between h-full">
            <h2 className="text-black font-medium text-xl mb-4">Form</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="py-3 bg-gray-200 p-2 rounded-md"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="py-3 bg-gray-200 p-2 rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              className="py-3 bg-gray-200 p-2 rounded-md mt-4 w-full h-40 mb-4"
              name="message"
              placeholder="Message"
            ></textarea>
            <button className="bg-black text-white rounded-lg py-3 cursor-pointer">
              Sign up
            </button>
          </form>
        </div>
        
        {/* Map Display (Static Image) */}
        <div className="p-6">
          <h2 className="text-black font-medium text-xl mb-4">Our Location</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
            <img 
              src="https://maps.googleapis.com/maps/api/staticmap?center=51.5405,-0.0586&zoom=15&size=800x400&maptype=roadmap&markers=color:red%7C51.5405,-0.0586"
              alt="Map location"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Map display only - not interactive
          </p>
        </div>
      </section>
    </>
  );
};

export default HelpAndSupport;