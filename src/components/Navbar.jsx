import brand from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar px-4 bg-blue-50/5 backdrop-blur-md z-[999] fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow
            bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <a href="#" className="flex justify-center gap-1 items-center">
          <img
            src={brand}
            alt="bnsc"
            className="w-10 absolute right-10
          md:static md:right-0 "
          />
          <span className="font-bold hidden md:block text-xs">
            Cakra Bima Nusantara
          </span>
        </a>
      </div>
      <div className="navbar-center text-gray-500 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Our Services</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#contact">
          <button
            className="bg-blue-600 hover:bg-blue-400 text-white opacity-0
            md:opacity-100 btn-sm font-semibold
          rounded-md"
          >
            Hubungi Kami
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
