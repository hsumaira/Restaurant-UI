/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center relative">
      <div className="flex justify-center absolute text-center top-20">
        <h1 className="top-20 text-3xl font-bold text-orange-500">Food</h1>
        <h1 className="top-20 text-3xl font-bold text-white">tuck</h1>
      </div>
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* Add background patterns or overlays here */}
      </div>

      {/* Content */}
      <div className="z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-orange-500">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-orange-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-orange-500">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-orange-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="flex justify-center text-right">
            <input
              type="text"
              placeholder="Search..."
              className="flex justify-between px-4 py-2 text-black rounded-full border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="p-2 ml-2 rounded-full bg-yellow-500 text-black">
              🔍
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center mt-12">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-lg italic text-orange-500">It’s Quick & Amusing!</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              The Art of Speed <br /> Food Quality
            </h2>
            <p className="mt-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">
              See Menu
            </button>
          </div>

          {/* Image Content */}
          <div className="mt-10 md:mt-0 md:w-1/2 relative flex justify-center">
            <div className="relative z-10">
              <img
                src="/Picture1.png"
                alt="Delicious food"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            We Create the Best Foody Product
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
              </p>
              <ul className="space-y-4 text-gray-400">
                <li>✔ Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
                <li>
                  ✔ Quisque diam pellentesque bibendum non dui volutpat fringilla.
                </li>
                <li>
                  ✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">
                Read More
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/picture1.png" alt="Food Item" className="rounded-lg" />
              <img src="/picture2.png" alt="Food Item" className="rounded-lg" />
              <img src="/picture3.png" alt="Food Item" className="rounded-lg" />
              <img src="/picture4.png" alt="Food Item" className="rounded-lg" />
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              Choose Food Item
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <img src="/menu1.png" alt="Menu Item" className="rounded-lg" />
              <img src="/menu2.png" alt="Menu Item" className="rounded-lg" />
              <img src="/menu3.png" alt="Menu Item" className="rounded-lg" />
              <img src="/menu4.png" alt="Menu Item" className="rounded-lg" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-lg">Contact Us</h4>
                <p className="mt-4">123 Street Name</p>
                <p>City, Country</p>
                <p>Email: contact@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Quick Links</h4>
                <ul className="mt-4 space-y-2">
                  {['Home', 'About', 'Blog', 'Contact'].map((link) => (
                    <li key={link} className="hover:text-yellow-500">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Follow Us</h4>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="hover:text-yellow-500">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-yellow-500">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-yellow-500">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-8 text-center text-gray-500">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HeroSection;
