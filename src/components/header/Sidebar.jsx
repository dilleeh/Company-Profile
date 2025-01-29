import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faUsers, faBriefcase, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const closeDropdown = (e) => {
            if (isOpen && !e.target.closest('.navbar')) {
                setIsOpen(false);
            }
        };
        document.body.addEventListener('click', closeDropdown);
        return () => {
            document.body.removeEventListener('click', closeDropdown);
        };
    }, [isOpen]);

    return (
        <>
            <div className="navbar border-0 rounded-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 text-[white] bg-[#181823] rounded-2xl w-52 ${isOpen ? 'block' : 'hidden'}`}>
                            <li><Link to="/" className="font-['Montserrat'] text-[15px] font-light leading-8">
                                <FontAwesomeIcon icon={faHome} className='pr-2' /> Dashboard</Link>
                            </li>
                            <li><Link to="/admin/magang" className="font-['Montserrat'] text-[15px] font-light leading-8">
                                <FontAwesomeIcon icon={faBox} className='pr-2' /> MSIB</Link>
                            </li>
                            <li><Link to="/admin/team" className="font-['Montserrat'] text-[15px] font-light leading-8">
                                <FontAwesomeIcon icon={faUsers} className='pr-1' /> Team</Link>
                            </li>
                            <li><Link to="/admin/product" className="font-['Montserrat'] text-[15px] font-light leading-8">
                                <FontAwesomeIcon icon={faBriefcase} className='pr-2' /> Career</Link>
                            </li>
                            <li><Link to="/admin/news" className="font-['Montserrat'] text-[15px] font-light leading-8">
                                <FontAwesomeIcon icon={faNewspaper} className='pr-2' /> News</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">INFINITE LEARNING</a>
                </div>
                <div className="navbar-end">
                    <div className="btn btn-ghost btn-circle">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
