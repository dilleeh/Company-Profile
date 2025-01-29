import React from 'react';
import "../../pages/home/Home.css";
import Navbar from '../../components/header/Navbar'
import Contxt1 from '../../ui/home/Contxt1';
import Contxt2 from '../../ui/home/Contxt2';
import Contxt3 from '../../ui/home/Contxt3';
import Contxt4 from '../../ui/home/Contxt4';
import Contxt5 from '../../ui/home/Contxt5';
import Contxt6 from '../../ui/home/Contxt6';
import Contxt7 from '../../ui/home/Contxt7';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 mx-auto max-w-screen-xl '>
        <div className="flex-none sm:flex w-full justify-center mt-20 ">
          <div className="mr-5 w-[100%]">
            <Contxt1 />
            <Contxt3 />
          </div>
          <Contxt2 />
        </div>
        <Contxt4 />
        <Contxt5 />
        <h1 className="text-center text-3xl sm:text-5xl mt-5 sm:mt-20  0 font-semibold font-['Montserrat'] headhmour">Our mentee project</h1>
        <Contxt6 />
        <Contxt7 />
      </div >
    </>
  )
}

export default Home