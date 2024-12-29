import Image from 'next/image';

const chefs = [
  {
    id: 1,
    name: 'Tahmina Rumi',
    role: 'Chef',
    image: '/chef1.jpg',
  },
  {
    id: 2,
    name: 'Jorina Begum',
    role: 'Chef',
    image: '/chef2.jpg',
  },
  {
    id: 3,
    name: 'M. Mohammad',
    role: 'Chef',
    image: '/chef3.jpg',
  },
  {
    id: 4,
    name: 'Munna Kathy',
    role: 'Chef',
    image: '/chef4.jpg',
  },
  {
    id: 5,
    name: 'Bisnu Devgon',
    role: 'Chef',
    image: '/chef5.jpg',
  },
  {
    id: 6,
    name: 'Motin Mollad',
    role: 'Chef',
    image: '/chef6.jpg',
  },
  {
    id: 7,
    name: 'Kets William Roy',
    role: 'Chef',
    image: '/chef7.jpg',
  },
  {
    id: 8,
    name: 'Mahmud Kholil',
    role: 'Chef',
    image: '/chef8.jpg',
  },
  {
    id: 9,
    name: 'Ataur Rahman',
    role: 'Chef',
    image: '/chef9.jpg',
  },
  {
    id: 10,
    name: 'Monalisa Holly',
    role: 'Chef',
    image: '/chef10.jpg',
  },
  
  {
    id: 11,
    name: 'Ataur Rahman',
    role: 'Chef',
    image: '/chef11.jpg',
  },
  {
    id: 12,
    name: 'Monalisa Holly',
    role: 'Chef',
    image: '/chef12.jpg',
  },
];

const ChefPage = () => {
  return (
    <div className="bg-gray-100">
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
      <header
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url('/Shop List.png')`, // Ensure the background image is added
        }}
      >
        <h1 className="text-white text-4xl font-bold">Our Chef</h1>
      </header>

      {/* Chef Grid Section */}
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {chefs.map((chef) => (
            <div key={chef.id} className="bg-white shadow rounded-lg overflow-hidden">
              <Image
                src={chef.image} // Ensure images are in the public folder
                alt={chef.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold text-gray-800">{chef.name}</h2>
                <p className="text-gray-500">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <h4 className="text-lg font-semibold">About Us</h4>
            <p className="mt-4">Corporate clients and leisure travelers rely on FoodTuck for dependable catering services in major cities across the world.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Useful Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/about" className="hover:text-yellow-500">About</a></li>
              <li><a href="/team" className="hover:text-yellow-500">Team</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
              <li><a href="/faq" className="hover:text-yellow-500">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-yellow-500">Facebook</a>
              <a href="#" className="hover:text-yellow-500">Twitter</a>
              <a href="#" className="hover:text-yellow-500">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 py-4 border-t border-gray-700">
          &copy; {new Date().getFullYear()} FoodTuck. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ChefPage;
