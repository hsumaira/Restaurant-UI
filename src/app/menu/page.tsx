/* eslint-disable @next/next/no-img-element */
import React from "react";

const MenuPage: React.FC = () => {
  return (
    <div className="bg-white text-black">
      {/* Navbar */}
      <div className="bg-black">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6 text-white">
          <div className="text-orange-500 text-2xl font-bold">FoodTuck</div>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="/ManuPage" className="hover:text-orange-500">
                Menu
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-orange-500">
                Blog
              </a>
            </li>
            <li>
              <a href="/pages" className="hover:text-orange-500">
                Pages
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-orange-500">
                Shop
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url('/Shop List.png')`,
        }}
      >
        <h1 className="text-5xl font-bold text-white  bg-opacity-50 px-4 py-2 rounded-lg">
          Our Menu
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Category 1: Burger Menu */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Burger Menu</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Cheeseburger</span>
                <span className="text-orange-500">$8.99</span>
              </li>
              <li className="flex justify-between">
                <span>Bacon Burger</span>
                <span className="text-orange-500">$9.99</span>
              </li>
              <li className="flex justify-between">
                <span>Veggie Burger</span>
                <span className="text-orange-500">$7.99</span>
              </li>
            </ul>
            <img
              src="/menu-burger.jpg"
              alt="Burger Menu"
              className="rounded-lg mt-6"
            />
          </div>

          {/* Category 2: Dessert */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Dessert</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Chocolate Cake</span>
                <span className="text-orange-500">$5.99</span>
              </li>
              <li className="flex justify-between">
                <span>Fruit Tart</span>
                <span className="text-orange-500">$4.99</span>
              </li>
              <li className="flex justify-between">
                <span>Ice Cream</span>
                <span className="text-orange-500">$3.99</span>
              </li>
            </ul>
            <img
              src="/menu-dessert.jpg"
              alt="Dessert Menu"
              className="rounded-lg mt-6"
            />
          </div>

          {/* Category 3: Drinks */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Drinks</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Orange Juice</span>
                <span className="text-orange-500">$3.50</span>
              </li>
              <li className="flex justify-between">
                <span>Mango Smoothie</span>
                <span className="text-orange-500">$4.50</span>
              </li>
              <li className="flex justify-between">
                <span>Lemonade</span>
                <span className="text-orange-500">$2.99</span>
              </li>
            </ul>
            <img
              src="/menu-drinks.jpg"
              alt="Drinks Menu"
              className="rounded-lg mt-6"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-black text-white text-center py-12 mt-12 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-orange-500">420</h3>
              <p>Professional Chefs</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-500">320</h3>
              <p>Menu Items</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-500">30+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-500">220</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 FoodTuck. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MenuPage;
