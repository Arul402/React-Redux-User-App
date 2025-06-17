import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Navbar = () => {
    const users = useSelector((state)=>state.userInfo.users)

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Redux User App</div>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-blue-300">Home</Link>
          </li>
          <li>
            <Link to="/adduser" className="hover:text-blue-300">Add User</Link>
          </li>
          <li className="relative">
  <Link to="/users" className="hover:text-blue-300 relative inline-block">
    Users
    {users && users.length > 0 && (
      <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
        {users.length}
      </span>
    )}
  </Link>
</li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
