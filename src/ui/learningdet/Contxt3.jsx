import React from 'react';
import "../../pages/learningdet/Learningdet.css";
import "@fortawesome/fontawesome-free/css/all.css";
import indra from '../../assets/Team/indra.png';
import sri from '../../assets/Team/sri.png';
import marsani from '../../assets/Team/marsani.png';
import malik from '../../assets/Team/malik.png';


function Contxt3() {
  return (
    <>
      <div className="team-heading ml-14 sm:ml-32 text-center w-[280px] sm:w-[1280px]">
        <h1 className="text-white text-2xl sm:text-3xl font-medium font-['Poppins']">Meet Our Mentors</h1>
      </div>
      <div className="sm:flex -mt-20 w-[230px] sm:w-[250px] -mt-28 ml-20 sm:ml-40 mb-64 ">
        <img className="mb-10 sm:mb-0 mr-16" src={indra} alt="foto" />
        <img className="mb-10 sm:mb-0 mr-16" src={sri} alt="foto" />
        <img className="mb-10 sm:mb-0 mr-16" src={marsani} alt="foto" />
        <img className="mb-10 sm:mb-0 mr-16" src={malik} alt="foto" />
      </div>
    </>
  );
}

export default Contxt3;
