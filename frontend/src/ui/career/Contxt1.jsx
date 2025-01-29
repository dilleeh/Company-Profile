import React, { useState } from 'react'
import "../../pages/career/Career.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';


const Contxt1 = () => {
  return (
    <div className="">
      <summary className="mt-32 sm:mt-40 btn btcat btn-outline w-full sm:w-[180px] rounded-full bg-teal-500 text-a"> <span>We’re Hiring!</span></summary>
      <div className="sm:w-[1500px]">
        <h1 className='txtabc text-left mt-5 sm:mt-10'>Be part of our mission</h1>
        <p className='text-20 text-NeonWhite text-justify'> Were looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.</p>
      </div> <br></br>
      <ul className="hidden lg:flex mt-8 gap-2">
        <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">View all</summary></li>
      </ul>
      <div className="lg:hidden dropdown dropdown-hover dropdown-left left-[19pc]">
        <div tabIndex={0} role="button" className="btn bg-transparent border-none text-2xl text-NeonWhite "> <FontAwesomeIcon icon={faFilter} /></div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li ><a className="m-1">View all</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contxt1;
