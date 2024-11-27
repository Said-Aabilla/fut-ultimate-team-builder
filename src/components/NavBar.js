import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-600 text-white px-4 py-2 flex items-center justify-between mb-4">
      {/* Logo */}
      <div className="text-lg font-bold">FUT Team</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4">
        {["Home", "Teams", "Settings"].map((item) => (
          <a
            key={item}
            href="#"
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden px-3 py-2 bg-blue-800 rounded"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menu
      </button>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="absolute top-12 right-0 bg-white text-black shadow-lg rounded w-48 md:hidden">
          <ul className="space-y-2 p-4">
            {["Home", "Teams", "Settings"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block hover:bg-gray-200 p-2 rounded"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
