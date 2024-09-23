/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaApple, FaCogs, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import { FaArrowDownZA } from "react-icons/fa6";

// Main App component
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <AppContent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} closeMenu={closeMenu} />
    </Router>
  );
}

function AppContent({ isMenuOpen, setIsMenuOpen, closeMenu }) {
  const location = useLocation();

  useEffect(() => {
    closeMenu(); // Automatically close the menu when navigating
  }, [location]);

  return (
    <div
      className="min-h-screen font-oxanium"
      style={{
        backgroundImage: 'linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      }}
    >
      {/* Navigation bar */}
      <nav className="bg-white bg-opacity-20 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* Logo/Home link */}
            <div className="flex space-x-7">
              <div>
                <Link to="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-white text-lg">My React Website</span>
                </Link>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/" className="py-4 px-2 text-white font-semibold hover:text-green-300 transition duration-300">Home</Link>
              <Link to="/about" className="py-4 px-2 text-white font-semibold hover:text-green-300 transition duration-300">About</Link>
              <Link to="/contact" className="py-4 px-2 text-white font-semibold hover:text-green-300 transition duration-300">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                  className="w-6 h-6 text-white hover:text-green-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu items */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[300px]' : 'max-h-0'
          }`}
        >
          <Link to="/" className="block py-2 px-4 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="block py-2 px-4 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" className="block py-2 px-4 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </nav>

      {/* Main content area */}
      <div className="container mx-auto p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

// Home page component with Cards and Icons
function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Welcome to Our Awesome Website</h1>
      <p className="text-xl text-gray-200 text-center mb-10">Discover amazing content and services tailored just for you.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white bg-opacity-20 shadow-md rounded-lg p-6 text-center">
          <FaApple className="text-8xl text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Innovative Solutions</h2>
          <p className="text-gray-200">We offer cutting-edge technology to power your business and personal needs.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white bg-opacity-20 shadow-md rounded-lg p-6 text-center">
          <FaCogs className="text-5xl text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Custom Services</h2>
          <p className="text-gray-200">Tailored services to fit your specific requirements, no matter the challenge.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white bg-opacity-20 shadow-md rounded-lg p-6 text-center">
          <FaLaptopCode className="text-5xl text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Expert Development</h2>
          <p className="text-gray-200">Our developers have the expertise to bring your vision to life with clean code.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white bg-opacity-20 shadow-md rounded-lg p-6 text-center">
          <FaArrowDownZA className="text-5xl text-green-900 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Expert Development!!!!</h2>
          <p className="text-gray-200">Our developers have the expertise to bring your vision to life with clean code. One time my love!</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white bg-opacity-20 shadow-md rounded-lg p-6 text-center">
          <FaLightbulb className="text-5xl text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Creative Ideas</h2>
          <p className="text-gray-200">We bring innovative and fresh ideas to every project, ensuring success.</p>
        </div>
      </div>
    </div>
  );
}

// About page component
function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">About Us</h1>
      <p className="text-xl text-gray-200">Learn more about our company and mission.</p>
      <div className="bg-white bg-opacity-20 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
        <p className="text-gray-200 mb-4">
          Founded in 2023, our company has been at the forefront of innovation in our industry. We&apos;re passionate about delivering
          high-quality products and exceptional customer service.
        </p>
        <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
        <p className="text-gray-200">To empower our customers with cutting-edge solutions that make their lives easier and more productive.</p>
      </div>
    </div>
  );
}

// Contact page component
function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">Contact Us</h1>
      <p className="text-xl text-gray-200">Get in touch with our team for support or inquiries.</p>
      <div className="bg-white bg-opacity-20 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Contact Info</h2>
        <p className="text-gray-200 mb-4">Email: contact@ourwebsite.com</p>
        <p className="text-gray-200 mb-4">Phone: +123 456 7890</p>
        <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
        <ul className="list-disc list-inside text-gray-200">
          <li>Twitter: @ourcompany</li>
          <li>Facebook: ourcompany</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
