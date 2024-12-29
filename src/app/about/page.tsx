import Image from 'next/image';

const About = () => {
  return (
    <div className="h-full w-full object-contain text-center bg-white text-black min-h-screen">
      {/* Navbar */}
      <div className="bg-black">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6 text-white">
          <div className="text-yellow-400 text-2xl font-bold">FoodTuck</div>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/ManuPage" className="hover:text-yellow-400">
                Menu
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-yellow-400">
                Blog
              </a>
            </li>
            <li>
              <a href="/pages" className="hover:text-yellow-400">
                Pages
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-yellow-400">
                Shop
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
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
        <h1 className="text-5xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          About Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 p-20">
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h3 className="text-yellow-400 text-lg font-bold">About us</h3>
          <h1 className="text-4xl font-bold mt-2">
            <span className="text-yellow-400">We</span> Create the best foody product
          </h1>
          <p className="text-black mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-2">✔</span>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-2">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-2">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
          <button className="mt-6 bg-yellow-400 text-black py-2 px-4 rounded-lg font-bold hover:bg-yellow-500 transition">
            Read More
          </button>
        </div>

        {/* Image Content */}
        <div className="relative rounded overflow-hidden">
          <Image
            src="/Picture2.png"
            alt="Food Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
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

export default About;
