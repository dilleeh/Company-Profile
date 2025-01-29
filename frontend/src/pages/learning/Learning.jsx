import React from 'react';
import "../../pages/learning/Learning.css";
import Navbar from '../../components/header/Navbar'
import Contxt1 from '../../ui/learning/Contxt1';
import Contxt2 from '../../ui/learning/Contxt2';
import Contxt3 from '../../ui/learning/Contxt3';

const Learning = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center py-6 mx-auto max-w-screen-xl'>
        <div className="flex w-full justify-center mt-20">
          <div className="mr-5 w-[100%]">
            <Contxt1 />

          </div>
          <Contxt2 />
        </div>
        <Contxt3 />
      </div >
    </>
  )
}

export default Learning