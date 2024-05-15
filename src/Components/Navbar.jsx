import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png';
import Search from '../assets/search.png';


const Navbar = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className='bg-white'>
      <div className='max-w-7xl mx-auto px-5 py-2 sm:px-6 lg:px-8 w-full'>
        <div className='flex items-center justify-between w-full'>

          {/* Logo - aligned to the far left */}
          <div className='flex items-center'>
            <a href="/" className='flex-shrink-0'>
              <img src={Logo} className="h-10 w-10" alt="Logo" href="/"/>
            </a>
            <ul className='hidden lg:flex lg:space-x-4 lg:ml-6'>
              <li>
                <a href="/" className=' px-3 py-2 rounded-md text-orange-500 hover:bg-orange-100 hover:text-orange-600'>Home</a>
              </li>
              <li>
                <a href="/events" className=' px-3 py-2 rounded-md text-orange-500 hover:bg-orange-100 hover:text-orange-600'>Events</a>
              </li>
              <li>
                <a href="/livestreams" className=' px-3 py-2 rounded-md text-orange-500 hover:bg-orange-100 hover:text-orange-600'>Live Streams</a>
              </li>
              <li>
                <a href="/about" className=' px-3 py-2 rounded-md text-orange-500 hover:bg-orange-100 hover:text-orange-600'>About Us</a>
              </li>
              <li>
                <a href="/support" className=' px-3 py-2 rounded-md text-orange-500 hover:bg-orange-100 hover:text-orange-600'>Support and FAQ</a>
              </li>
            </ul>
          </div>

          {/* Search input and icon - centered */}
          <div className='flex-1 flex justify-center'>
            <div className='relative'>
              <label htmlFor="search" className="sr-only">Search</label>
              <input type="search" name="search" id="search" className="py-2 text-sm text-gray-900 bg-orange-100 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder='Search here...' autoComplete='off' style={{ width: "288px" }} />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <img src={Search} alt="Search" className="h-6 w-6"/>
              </div>
            </div>
          </div>

          <div className='flex bg-orange-500 px-3 py-2 rounded-md text-white hover:bg-orange-100 hover:text-orange-600'>
            <button type="submit" onClick={handleLoginClick}>Log In</button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;
