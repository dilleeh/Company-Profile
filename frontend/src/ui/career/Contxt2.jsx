import React from 'react';
import "../../pages/career/Career.css";

const Contxt2 = () => {
  return (
    <>
      <div className='relative'>
        <div> <br /><br /><br /><br /><br />
          <hr />
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-5 mr-2" onClick={() => document.getElementById('my_modal_4').showModal()} />
          <h2 className="text-NeonWhite text-2xl lg:text-[28px] font-['Montserrat'] mt-7 relative">City Coordinator
            <a href="https://s.id/ILHiring_May24" target="_blank">
              <span className='absolute opacity-0 lg:opacity-100 right-20'>Apply</span>
            </a>
          </h2>
          <p className='text-NeonWhite text-base w-[280px] sm:w-full lg:text-[20px]'>We are looking for a City Coordinator to join our team.</p>
          <ul className="flex mt-5 lg:mt-8 lg:gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">On-Site</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
        </div>


        <div> <br />
          <hr />
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-5 mr-2" onClick={() => document.getElementById('my_modal_5').showModal()} />
          <h2 className="text-NeonWhite text-2xl lg:text-[28px] font-['Montserrat'] mt-7 relative">Public Relation
            <a href="https://s.id/ILHiring_May24" target="_blank">
              <span className='absolute opacity-0 lg:opacity-100 right-20'>Apply</span>
            </a>
          </h2>
          <p className='text-NeonWhite text-base w-[280px] sm:w-full lg:text-[20px]'>We re looking for a mid-level public relation to join our team.</p>
          <ul className="flex mt-5 lg:mt-8 lg:gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">On-Site</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
        </div>


        <div> <br />
          <hr />
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-5 mr-2" onClick={() => document.getElementById('my_modal_6').showModal()} />
          <h2 className="text-NeonWhite text-2xl lg:text-[28px] font-['Montserrat'] mt-7 relative">Senior Data Analyst
            <a href="https://s.id/citycoord" target="_blank">
              <span className='absolute opacity-0 lg:opacity-100 right-20'>Apply</span>
            </a>
          </h2>
          <p className='text-NeonWhite text-base w-[280px] sm:w-full lg:text-[20px]'>We re looking for a senior-level data analyst to join our team.</p>
          <ul className="flex mt-5 lg:mt-8 lg:gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">On-Site</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
        </div>
        <div> <br />
          <hr />
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-5 mr-2" onClick={() => document.getElementById('my_modal_5').showModal()} />
          <h2 className="text-NeonWhite text-2xl lg:text-[28px] font-['Montserrat'] mt-7 relative">Junior Data Analyst
            <a href="https://s.id/ILHiring_May24" target="_blank">
              <span className='absolute opacity-0 lg:opacity-100 right-20'>Apply</span>
            </a>
          </h2>
          <p className='text-NeonWhite text-base w-[280px] sm:w-full lg:text-[20px]'>We re looking for a mid-level data analyst to join our team.</p>
          <ul className="flex mt-5 lg:mt-8 lg:gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">On-Site</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
        </div>


        <div> <br />
          <hr />
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-5 mr-2" onClick={() => document.getElementById('my_modal_5').showModal()} />
          <h2 className="text-NeonWhite text-2xl lg:text-[28px] font-['Montserrat'] mt-7 relative">Business Development
            <a href="https://s.id/ILHiring_May24" target="_blank">
              <span className='absolute opacity-0 lg:opacity-100 right-20'>Apply</span>
            </a>
          </h2>
          <p className='text-NeonWhite text-base w-[280px] sm:w-full lg:text-[20px]'>We re looking for a mid-level business development to join our team.</p>
          <ul className="flex mt-5 lg:mt-8 lg:gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">On-Site</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
        </div>
      </div>


      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 sm:max-w-7xl xl:w-2/3">
          <h3 className="hmodal ml-2">City Coordinator</h3>
          <ul className="flex flex-wrap mt-5 lg:mt-8 lg:gap-2">
            <li>
              <summary className="m-1 btn btcat btn-outline sm:w-[165px] lg:w-[180px] rounded-full">Remote</summary>
            </li>
            <li>
              <summary className="m-1 btn btcat btn-outline sm:w-[165px] lg:w-[180px] rounded-full">Full-time</summary>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row mt-10">
            <div className="sm:mr-16">
              <h3 className="tmodal">Job Description</h3>
            </div>
            <div>
              <p className="desc mt-4 lg:mt-0">
                We are looking for business development to conduct market research, look for opportunities <br /> and maintain relationships between clients, collaborate with other divisions and <br /> prepare and present the companys business plan. The ideal candidate is as below:
              </p>
              <ul className="desc mt-4">
                <li className="ml-4">1. Passionate and eager to connect with people</li>
                <li className="ml-4">2. Experience in handling international clients</li>
                <li className="ml-4">3. Fun, easy to adapt, fast learner</li>
                <li className="ml-4">4. Proficient in English language</li>
                <li className="ml-4">5. Strong negotiation and communication skills</li>
                <li className="ml-4">6. Minimum 3 years experience</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-12">
            <div className="lg:mr-20">
              <h3 className="tmodal">Responsibility</h3>
            </div>
            <div>
              <p className="desc mt-4 lg:mt-0">
                By partnering with cross-functional teams and customers, youll turn your insights into compelling products in a creative environment that requires proven leadership skills and the ability to execute a creative vision
              </p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 sm:max-w-7xl xl:w-2/3">
          <h3 className="hmodal ml-2">Public Relation</h3>
          <ul className="flex flex-wrap mt-5 lg:mt-8 lg:gap-2">
            <li>
              <summary className="m-1 btn btcat btn-outline sm:w-[165px] lg:w-[180px] rounded-full">Remote</summary>
            </li>
            <li>
              <summary className="m-1 btn btcat btn-outline sm:w-[165px] lg:w-[180px] rounded-full">Full-time</summary>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row mt-10">
            <div className="lg:mr-12">
              <h3 className='tmodal'>Job Description</h3>
            </div>
            <div>
              <p className="desc mt-4 lg:mt-0">We are looking for public relation, the ideal candidate is as below:

              </p>
              <ul className="desc mt-4">
                <li className="ml-4">1. Strong creativity and copywriting skills</li>
                <li className="ml-4">2. Experiencebin managing PR and events</li>
                <li className="ml-4">3. Eagerness to connect and engage with people effectivelyr</li>
                <li className="ml-4">4. Fun, adaptable, and quick to learn</li>
                <li className="ml-4">5. Proficient in English language</li>
                <li className="ml-4">6. Minimum 3 years experience</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-12">
            <div className="lg:mr-20">
              <h3 className='tmodal'>Responsibility</h3>
            </div>
            <div>
              <p className="desc mt-4 lg:mt-0">By partnering with cross-functional teams and customers, youll turn your insights into compelling products in a creative environment that requires proven leadership skills and the ability to execute a creative vision

              </p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Ini untuk detail Job Description */}


      {/* Ini untuk detail Job Description City Coordinator*/}
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box w-11/12 sm:max-w-7xl xl:w-2/3">
          <h3 className="hmodal ml-2">City Coordinator</h3>
          <ul className="flex flex-wrap mt-5 lg:mt-8 lg:gap-2">
            <li>
              <summary className="m-1 btn btcat btn-outline sm:w-[165px] lg:w-[180px] rounded-full">Remote</summary>
            </li>
            <li>
              <summary className="m-1 btn btcat btn-outline sm:w-[165px] lg:w-[180px] rounded-full">Full-time</summary>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row mt-10">
            <div className='lg:mr-12'>
              <h3 className='tmodal'>Job Description</h3>
            </div>
            <div>
              <p className="desc mt-4 lg:mt-0">We are looking for City Coordinator, the ideal candidate is as below:

              </p>
              <ul className="desc mt-4">
                <li className="ml-4">1. Is an Infinite Learning student or alumni</li>
                <li className="ml-4">2. Have high enthusiasm and a willingness to expand relationships</li>
                <li className="ml-4">3. Commit to carrying out the program for 6 months</li>
                <li className="ml-4">4. Social media enthusiast</li>
                <li className="ml-4">5. Attach CV</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-12">
            <div className="lg:mr-20">
              <h3 className='tmodal'>Responsibility</h3>
            </div>
            <div>
              <p className="desc mt-4 lg:mt-0">The benefits you will get are incentives, E-Certificates, Merchandise, career opportunities in Infinite Learning, Networking, and many more
              </p>
            </div>
          </div>
        </div>
      </dialog>
      {/* Ini untuk detail Job Description */}


      {/* Ini untuk detail Job Description Public Relation*/}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 sm:max-w-7xl xl:w-2/3">
          <h3 className="hmodal ml-2">Public Relation</h3>
          <ul className="flex flex-wrap mt-5 lg:mt-8 lg:gap-2">
            <li>
              <summary className="m-1 btn btcat btn-outline sm:w-[165px] lg:w-[180px] rounded-full">Remote</summary>
            </li>
            <li>
              <summary className="m-1 btn btcat btn-outline sm:w-[165px] lg:w-[180px] rounded-full">Full-time</summary>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row mt-10">
            <div className="lg:mr-12">
              <h3 className='tmodal'>Job Description</h3>
            </div>
            <div>
              <p className="desc mt-4 lg:mt-0 text-sm md:text-base lg:text-lg">We are looking for public relation, the ideal candidate is as below:

              </p>
              <ul className="desc mt-4">
                <li className="ml-4">1. Strong creativity and copywriting skills</li>
                <li className="ml-4">2. Experiencebin managing PR and events</li>
                <li className="ml-4">3. Eagerness to connect and engage with people effectivelyr</li>
                <li className="ml-4">4. Fun, adaptable, and quick to learn</li>
                <li className="ml-4">5. Proficient in English language</li>
                <li className="ml-4">6. Minimum 3 years experience</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-12">
            <div className="lg:mr-20">
              <h3 className='tmodal'>Responsibility</h3>
            </div>
            <div>
              <p className="desc mt-4 lg:mt-0">By partnering with cross-functional teams and customers, youll turn your insights into compelling products in a creative environment that requires proven leadership skills and the ability to execute a creative vision

              </p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Ini untuk detail Job Description */}


      {/* Ini untuk detail Job Description City Coordinator*/}
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box w-11/12 sm:max-w-7xl xl:w-2/3">
          <h3 className="hmodal ml-2">City Coordinator</h3>
          <ul className="flex flex-wrap mt-5 lg:mt-8 lg:gap-2">
            <li>
              <summary className="m-1 btn btcat btn-outline sm:w-[165px] lg:w-[180px] rounded-full">Remote</summary>
            </li>
            <li>
              <summary className="m-1 btn btcat btn-outline sm:w-[165px] lg:w-[180px] rounded-full">Full-time</summary>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row mt-10">
            <div className='lg:mr-12'>
              <h3 className='tmodal'>Job Description</h3>
            </div>
            <div>
              <p className="desc mt-4 lg:mt-0">We are looking for City Coordinator, the ideal candidate is as below:

              </p>
              <ul className="desc mt-4">
                <li className="ml-4">1. Is an Infinite Learning student or alumni</li>
                <li className="ml-4">2. Have high enthusiasm and a willingness to expand relationships</li>
                <li className="ml-4">3. Commit to carrying out the program for 6 months</li>
                <li className="ml-4">4. Social media enthusiast</li>
                <li className="ml-4">5. Attach CV</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-12">
            <div className="lg:mr-20">
              <h3 className='tmodal'>Responsibility</h3>
            </div>
            <div>
              <p className="desc mt-4 lg:mt-0">The benefits you will get are incentives, E-Certificates, Merchandise, career opportunities in Infinite Learning, Networking, and many more

              </p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Ini untuk detail Job Description */}
    </>
  );
}

export default Contxt2;
