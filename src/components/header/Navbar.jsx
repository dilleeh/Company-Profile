import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logoblack.svg';
import "@fortawesome/fontawesome-free/css/all.css";
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className=" var py-2 px-1 sm:px-10 w-[100%] fixed" style={{ backgroundColor: scrolled ? '#181823' : 'transparent' }}>
        <div className="navbar rounded-[20px] sm:rounded-full">
          <div className="navbar-start">
            <NavLink to="/" className=" ml-5 sm:ml-10 mt-1">
              <img src={Logo} alt='logo' className='w-[80px] sm:w-[90px]' />
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><NavLink to="/learning">Learning</NavLink></li>
              <li><NavLink to="/alumni">Alumni</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/team">Team</NavLink></li>
              <li><NavLink to="/career">Career</NavLink></li>
            </ul>
          </div>
          <button className="hidden sm:block w-[200px] h-[62px] btncont text-white">
            <a href='https://wa.me/6282387597266'>
              Contact us  <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </button>
          <div className="dropdown drops">
            <div tabIndex={0} role="button" className="btn btn-ghost ml-40 lg:hidden" onClick={toggleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul tabIndex={0} className="mencss menu menu-sm dropdown-content ml-30 z-[1] p-5 shadow bg-Charcoal rounded-box w-52">
                <li><NavLink to="/" onClick={closeDropdown}>Learning</NavLink></li>
                <li><NavLink to="/alumni" onClick={closeDropdown}>Alumni</NavLink></li>
                <li><NavLink to="/news" onClick={closeDropdown}>News</NavLink></li>
                <li><NavLink to="/about" onClick={closeDropdown}>About</NavLink></li>
                <li><NavLink to="/team" onClick={closeDropdown}>Team</NavLink></li>
                <li><NavLink to="/career" onClick={closeDropdown}>Career</NavLink></li>
                <li><a href='https://wa.me/6282387597266' onClick={closeDropdown}>
                  Contact us
                </a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
