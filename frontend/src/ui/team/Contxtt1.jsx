import React from 'react';
import "../../pages/team/Team.css";
import "@fortawesome/fontawesome-free/css/all.css";


function Contxtt1() {
  return (
    <>
      <div className="w-full sm:w-[700px] ml-0 sm:ml-32 team-heading px-5 sm:px-0 pt-32 sm:pt-40">
        <h1 className='mb-1 text-[24px] text-center sm:text-left sm:text-[40px] font-[Montserrat] font-bold text-[#eae7e7]'><span>Team Members:</span> Technology, Innovation, Research & Development Company.</h1>
        <p className='w-full sm:w-[80%] text-justify font-[Montserrat] text-[#eae7e7] mt-5'>
          Explore the dynamic individuals behind our company success, dedicated to pioneering technological advancements, fostering innovation,
          and driving groundbreaking research and development initiatives. Get to know the passionate minds shaping the future of our organization and the industries we serve.
        </p>
        <details className="dropdown mt-8">
          <summary className="m-1 btn btcat btn-outline w-[338px] sm:w-[150px] rounded-full font-normal text-white">Category <i className="fas fa-chevron-down"></i></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a className="text-white">Item 1</a></li>
            <li><a className="text-white">Item 2</a></li>
          </ul>
        </details>

      </div>
    </>
  );
}

export default Contxtt1;
