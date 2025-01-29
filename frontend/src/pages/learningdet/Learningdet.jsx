import React, { useState } from 'react';
import "../../pages/learningdet/Learningdet.css";
import Navbar from '../../components/header/Navbar'
import Contxt1 from '../../ui/learningdet/Contxt1';
import Contxt3 from '../../ui/learningdet/Contxt3';
import Contxt4 from '../../ui/learningdet/Contxt4';
import Contxt5 from '../../ui/learningdet/Contxt5';

const Learningdet = () => {
  const [programType, setProgramType] = useState('why');
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center py-6 mx-auto max-w-screen-xl'>
        <div className="flex w-full justify-center mt-20">
          <div className="mr-5 w-[100%]">
            <Contxt1 programType={programType} />
          </div>
          <div className="artboard hidden sm:block sm:h-[450px] mt-32">
            <div className="grid w-[100%] h-[400px] place-items-center ">
              <button className="w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10" onClick={() => setProgramType('why')}>
                <p className="msibtext text-[22px]">Why You Should Learn</p>
              </button>

              <button className="mt-16 w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10" onClick={() => setProgramType('require')}>
                <p className="msibtext text-[22px]">Requirement</p>
              </button>

              <button className="mt-16 w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10 " onClick={() => setProgramType('starend')}>
                <p className="msibtext text-[22px]">Start Date - End Program</p>
              </button>
              <button className=" mt-16 w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10" onClick={() => setProgramType('syllabus')}>
                <p className="msibtext text-[22px]">Syllabus</p>
              </button>

              <button className="mt-16 w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10" onClick={() => setProgramType('benefit')}>
                <p className="msibtext text-[22px]">Benefit</p>
              </button>
            </div>
          </div>
        </div>
      </div >
      <Contxt3 />
      <Contxt4 />
      <Contxt5 />
    </>
  )
}

export default Learningdet