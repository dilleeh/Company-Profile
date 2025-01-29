import React from 'react';
import "../../pages/alumni/Alumni.css";
import Navbar from '../../components/header/Navbar'
import Contxt5 from '../../ui/alumni/Contxt5';
import Contxt1 from '../../ui/alumni/Contxt1';
import Contxt2 from '../../ui/alumni/Contxt2';
import Contxt3 from '../../ui/alumni/Contxt3';
import Contxt4 from '../../ui/alumni/Contxt4';

const Alumni = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 mx-auto max-w-screen-xl'>
        <Contxt1 />
        <Contxt2 />
        <Contxt3 />
        <div className='mr-5 w-[100%]'> <br /> <br />
          <Contxt4 />
        </div>
        <h1 className="text-center sm:text-5xl text-3xl -mb-12 sm:mb-0 mt-20 font-semibold font-['Montserrat'] headhmour">Our mentee project</h1> <br /><br />

        <Contxt5 />
      </div>
    </>
  )
}

export default Alumni   