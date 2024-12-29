/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ProductPage: React.FC = () => {
  // Placeholder product data (replace with actual data fetching)
  const product = {
    name: 'Yummy Chicken Chup',
    description: 'A delicious chicken dish with tender chicken pieces, fresh vegetables, and a flavorful sauce.',
    price: 19.99,
    rating: 4.5,
    imageUrl: '/yummy-chicken.jpg', // Replace with your actual image
    similarProducts: [
      { id: 1, name: 'Spicy Beef Bowl', imageUrl: '/beef-bowl.jpg' },
      { id: 2, name: 'Vegetable Stir-Fry', imageUrl: '/stir-fry.jpg' },
      { id: 3, name: 'Crispy Chicken Burger', imageUrl: '/burger.jpg' },
      { id: 4, name: 'Seafood Noodles', imageUrl: '/noodles.jpg' },
    ],
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen font-sans">
      {/* Navbar */}
      <div className="bg-black text-white">
        <nav className="container mx-auto flex justify-between items-center py-6 px-6">
          <div className="text-orange-500 text-2xl font-bold">FoodTuck</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/menu" className="hover:text-orange-500">Menu</a></li>
            <li><a href="/blog" className="hover:text-orange-500">Blog</a></li>
            <li><a href="/pages" className="hover:text-orange-500">Pages</a></li>
            <li><a href="/about" className="hover:text-orange-500">About</a></li>
            <li><a href="/shop" className="hover:text-orange-500">Shop</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Header Section */}
      <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url('/Shop List.png')` }}>
        <h1 className="text-5xl font-bold text-white bg-opacity-50 px-4 py-2 rounded-lg">Product Details</h1>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#333333]">{product.name}</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-bold text-[#333333]">${product.price.toFixed(2)}</span>
              <div className="flex items-center">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <span key={i} className="text-yellow-500 mr-1 text-xl">★</span>
                ))}
                {[...Array(5 - Math.floor(product.rating))].map((_, i) => (
                  <span key={i} className="text-gray-300 mr-1 text-xl">★</span>
                ))}
                <span className="text-gray-500 ml-2 text-sm">({product.rating.toFixed(1)})</span>
              </div>
            </div>
            <button className="bg-[#ff9900] text-white py-3 px-6 rounded-lg hover:bg-[#e68a00] font-medium transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-[#333333]">Similar Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {product.similarProducts.map((similarProduct) => (
              <div key={similarProduct.id} className="border rounded-lg overflow-hidden shadow-md bg-white">
                <img src={similarProduct.imageUrl} alt={similarProduct.name} className="object-cover w-full h-full" />
                <div className="p-4">
                  <h4 className="font-medium text-[#333333]">{similarProduct.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                  <li key={link} className="hover:text-gray-800">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Follow Us</h4>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="hover:text-gray-800">
                  Facebook
                </a>
                <a href="#" className="hover:text-gray-800">
                  Twitter
                </a>
                <a href="#" className="hover:text-gray-800">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-black">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
