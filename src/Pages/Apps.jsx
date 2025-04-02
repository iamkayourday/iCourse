import React from "react";
import {
  FaGraduationCap,
  FaNewspaper,
  FaLaptopCode,
  FaRegStickyNote,
  FaLemon,
  FaShoppingCart,
  FaTasks,
  FaPalette,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <>
      <section className="md:ml-72 rounded-lg bg-white md:mr-10 lg:mr-40 mb-10">
        {/* Main content area */}
        <article className="p-3 mt-8">
          <header className="p-2">
            <h1 className="md:text-4xl text-xl font-medium text-gray-800 mb-4">
              Apps
            </h1>
          </header>
          <p className="text-gray-400 md:text-xl text-lg">
            Everything you must know to success.
          </p>
        </article>

        <div className="grid lg:grid-cols-2 gap-8 p-4">
          {/* Wix */}
          <div className="bg-gray-100 rounded-md p-3 group hover:bg-gray-200  border border-gray-300 hover:shadow-md">
            <div className="flex items-center mb-4 group-hover:text-gray-500">
              <div className=" mr-2 border border-gray-300 rounded-full p-3 w-12 group-hover:animate-pulse">
                <FaLaptopCode className="text-gray-400 text-2xl mr-3 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Wix</h2>
            </div>
            <h3 className="text-black font-medium text-2xl mb-4">
              Web design platform
            </h3>
            <p className="text-gray-400 text-md group-hover:text-gray-600 mb-20">
              Easily go from design to world-class site with Wix, the web
              builder for creative pros. Optimize for every breakpoint — no code
              needed and publish for free. Responsive layouts.
            </p>
            <a
              href="https://www.wix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 px-10 py-2 rounded-lg hover:border-black mt-3 cursor-pointer group-hover:bg-gray-300 block text-center w-40"
            >
              Website
            </a>
          </div>

          {/* Notion */}
          <div className="bg-gray-100 rounded-md p-3 group hover:bg-gray-200 border border-gray-300 hover:shadow-md">
            <div className="flex items-center mb-4 group-hover:text-gray-500">
              <div className=" mr-2 border border-gray-300 rounded-full p-3 w-12 group-hover:animate-pulse">
                <FaRegStickyNote className="text-gray-400 text-2xl mr-3 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Notion</h2>
            </div>
            <h3 className="text-black font-medium text-2xl mb-4">WorkSpace</h3>
            <p className="text-gray-400 text-md group-hover:text-gray-600 mb-2">
              Notion is the connected workspace where better, faster work
              happens.
            </p>
            <p className="text-gray-400 text-md group-hover:text-gray-600 mb-20">
              A new tool that blends your everyday work apps into one. It's the
              all-in-one workspace for you and your team.
            </p>
            <a
              href="https://www.notion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 px-10 py-2 rounded-lg hover:border-black mt-3 cursor-pointer group-hover:bg-gray-300 block text-center w-40"
            >
              Website
            </a>
          </div>

          {/* Lemon Squeeze */}
          <div className="bg-gray-100 rounded-md p-3 group hover:bg-gray-200 border border-gray-300 hover:shadow-md">
            <div className="flex items-center mb-4 group-hover:text-gray-500">
              <div className=" mr-2 border border-gray-300 rounded-full p-3 w-12 group-hover:animate-pulse">
                <FaLemon className="text-gray-400 text-2xl mr-3 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Lemon Squeeze
              </h2>
            </div>
            <h3 className="text-black font-medium text-2xl mb-4">
              Payment Platform
            </h3>
            <p className="text-gray-400 text-md group-hover:text-gray-600 mb-20">
              Lemon Squeezy is the all-in-one platform for running your SaaS
              business. Payments, subscriptions, global tax compliance, fraud
              prevention, multi-currency.
            </p>
            <a
              href="https://www.lemonsqueezy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 px-10 py-2 rounded-lg hover:border-black mt-3 cursor-pointer group-hover:bg-gray-300 block text-center w-40"
            >
              Website
            </a>
          </div>

          {/* GumRoad */}
          <div className="bg-gray-100 rounded-md p-3 group hover:bg-gray-200 border border-gray-300 hover:shadow-md">
            <div className="flex items-center mb-4 group-hover:text-gray-500">
              <div className=" mr-2 border border-gray-300 rounded-full p-3 w-12 group-hover:animate-pulse">
                <FaShoppingCart className="text-gray-400 text-2xl mr-3 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">GumRoad</h2>
            </div>
            <h3 className="text-black font-medium text-2xl mb-4">
              Payment Platform
            </h3>
            <p className="text-gray-400 text-md group-hover:text-gray-600 mb-20">
              Gumroad — We Make it Easy to Earn Your First Dollar Online by
              Selling Digital Products, Memberships. Gumroad Was Created to Help
              You Experiment with All Kinds of Ideas and Formats.
            </p>
            <a
              href="https://discover.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 px-10 py-2 rounded-lg hover:border-black mt-3 cursor-pointer group-hover:bg-gray-300 block text-center w-40"
            >
              Website
            </a>
          </div>

          {/* Asana */}
          <div className="bg-gray-100 rounded-md p-3 group hover:bg-gray-200 border border-gray-300 hover:shadow-md">
            <div className="flex items-center mb-4 group-hover:text-gray-500">
              <div className=" mr-2 border border-gray-300 rounded-full p-3 w-12 group-hover:animate-pulse">
                <FaTasks className="text-gray-400 text-2xl mr-3 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Asana</h2>
            </div>
            <h3 className="text-black font-medium text-2xl mb-4">
              Project management
            </h3>
            <p className="text-gray-400 text-md group-hover:text-gray-600 mb-20">
              Work anytime, anywhere with <i>Asana</i>. Keep remote and distributed
              teams, and your entire organization, focused on their goals,
              projects, and tasks with <i>Asana</i>.
            </p>
            <a
              href="https://app.asana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 px-10 py-2 rounded-lg hover:border-black mt-3 cursor-pointer group-hover:bg-gray-300 block text-center w-40"
            >
              Website
            </a>
          </div>

          {/* Figma */}
          <div className="bg-gray-100 rounded-md p-3 group hover:bg-gray-200 border border-gray-300 hover:shadow-md">
            <div className="flex items-center mb-4 group-hover:text-gray-500">
              <div className=" mr-2 border border-gray-300 rounded-full p-3 w-12 group-hover:animate-pulse">
                <FaPalette className="text-gray-400 text-2xl mr-3 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Figma</h2>
            </div>
            <h3 className="text-black font-medium text-2xl mb-4">
              Design Tool
            </h3>
            <p className="text-gray-400 text-md group-hover:text-gray-600 mb-20">
              A diagram is a symbolic representation of information using
              visualization techniques. Diagrams have been used since
              prehistoric times on walls of caves, but became more prevalent
              during the Enlightenment.
            </p>
            <a
              href="https://figma.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 px-10 py-2 rounded-lg hover:border-black mt-3 cursor-pointer group-hover:bg-gray-300 block text-center w-40"
            >
              Website
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apps;
