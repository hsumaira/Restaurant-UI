import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'A Recipe to Cook a Delightful Sweet Chicken',
    description: 'Discover the perfect recipe to cook a delightful sweet chicken that melts in your mouth.',
    image: '/Blog-image.jpg', // This is the path to the image file
  },
  {
    id: 2,
    title: 'The Best Way to Make Pizza with Sweet Chicken',
    description: 'Learn how to make pizza topped with sweet chicken for a unique and delicious experience.',
    image: '/pizza.jpg', // This is the path to another image
  },
  {
    id: 3,
    title: 'The Ultimate Chicken Burger: Tips & Tricks',
    description: 'Get the ultimate tips and tricks for creating the perfect chicken burger at home.',
    image: '/Blog-card-4.jpg', // Path to a different image
  },
];

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Snacks'];

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <div className="bg-black text-white">
        <nav className="container mx-auto flex justify-between items-center py-6 px-6">
          <div className="text-orange-500 text-2xl font-bold">FoodTuck</div>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-orange-500">
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
      <header
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url('/Shop List.png')`,
        }}
      >
        <div className="bg-opacity-50 p-8 rounded">
          <h1 className="text-white text-5xl font-bold">Blog List</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-12 gap-8">
        {/* Blog Posts */}
        <div className="col-span-8 space-y-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="relative">
                {/* Blog Image */}
                <Image
                  src={blog.image} // Ensure that the path is correct
                  alt={blog.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                {/* Blog Title */}
                <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mt-4">{blog.description}</p>
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="col-span-4 space-y-6">
          {/* About Me Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">About Me</h3>
            <div className="flex items-center mt-4">
              <Image
                src="/profile.jpg" // Ensure this is correct in the public folder
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="ml-4 text-gray-600">Hi! I’m a food blogger sharing amazing recipes.</p>
            </div>
          </div>

          {/* Categories Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
            <ul className="mt-4 space-y-2">
              {categories.map((category) => (
                <li key={category} className="text-gray-600 hover:text-yellow-500 cursor-pointer">
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </aside>
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
  );
};

export default Home;
