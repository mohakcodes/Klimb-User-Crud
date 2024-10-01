import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-100 py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-black text-2xl font-bold">
          Klimb Portal
      </Link>
      <div>
        <Link to="/" className="text-black hover:text-gray-800 hover:bg-green-400 text-lg font-medium p-2 rounded-md">
          Add User
        </Link>
        <Link to="/users" className="text-black hover:text-gray-800 hover:bg-green-400 text-lg font-medium p-2 rounded-md">
          All Users
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;