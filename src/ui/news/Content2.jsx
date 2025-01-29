import React, { useState } from 'react';
import "../../pages/news/News.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Kedua from '../../assets/news/6.png';
import Keempat from '../../assets/news/keempat.png';

function Content2() {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [rotatedIndexes, setRotatedIndexes] = useState([]);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
      setRotatedIndexes(rotatedIndexes.filter(i => i !== index));
    } else {
      setExpandedIndex(index);
      setRotatedIndexes([...rotatedIndexes, index]);
    }
  };

  const getMarginBottom = (index) => {
    return expandedIndex === index ? '200px' : '0';
  };

  const isRotated = (index) => {
    return rotatedIndexes.includes(index);
  };
  
  

  return (

    <div className="team-heading -mt-52 sm:-mt-10 w-[128px] sm:w-[1280px] h-[900px] sm:ml-0 -ml-52">
      {/* Masuk konten 4 dan 5 */}
      <div className="sm:flex mt-20 w-full">
        <ul>
          <li>
            <div className="grid w-[330px] sm:w-[597px] sm:h-[325px] h-[225px] card bg-gray-925 rounded-box place-items-center relative overflow-hidden shadow-lg bgcard">
              <img src={Keempat} alt="dwdw" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-left items-left text-white p-4 ml-5 mt-5">
              <h4 className="sm:card-title card-m">Mar 13 • 2 min read
                        <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 -mt-12 sm:-mt-4 mr-2 sm:mr-5" />
                    </h4>
                <br />
                <p className="title-cardd text-base sm:text-3xl">Infinite Learning Meraih Prestasi sebagai Unreal Engine Authorized Training Centre</p >
                <div className="relative lg:mt-20 w-full sm:w-[80%] lg:w-[100%] h-[auto] mt-9">
                </div>
              </div>
            </div>


            <br />

            <div className="grid w-[330px] sm:w-[597px] sm:h-[325px] h-[225px] card bg-gray-925 -ml-1 sm:ml-0 rounded-box place-items-center relative overflow-hidden shadow-lg bgcard">
              <img src={Keempat} alt="dwdw" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-left items-left text-white p-4 ml-5 mt-5">
                <h4 className="sm:card-title card-m">Mar 13 • 2 min read
                        <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 -mt-12 sm:-mt-4 mr-2 sm:mr-5" />
                    </h4>
                <br />
                <p className="title-cardd text-base sm:text-3xl">Global Game Jam Batam: Membangun Kreativitas dan Mengembangkan Talenta Indonesia di Bidang Game Development</p >
                <div className="relative lg:mt-20 w-full sm:w-[80%] lg:w-[100%] h-[auto] mt-9">
                </div>
              </div>
            </div>
          </li>
        </ul>

<br />


        <div className=" divider-horizontal"></div>






        {/* Masuk konten 6 */}
        <div className="card grid w-[330px] sm:w-[597px] h-[320px] sm:h-[680px] bg-gray-925 rounded-box bgcard">
            <div className="absolute inset-0 flex flex-col justify-left items-left text-white p-10 -ml-1 sm:ml-0">
            <h4 className="sm:card-title card-m -mt-5 sm:mt-0 sm:ml-0 mb-0 sm:mb-20">1 Apr • 2 min read
                        <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 -mt-8 sm:-mt-4 mr-2 sm:mr-5" />
                    </h4>
            <p className="title-cardd text-base sm:text-3xl">Mengulas Kemeriahan di Balik Layar: Cerita Developer Festival 5.0 di Infinite Learning</p><br />
            <div className="relative lg:mt-16 lg:mr-5 w-full sm:w-[80%] lg:w-[100%] h-[auto]">
              <div className=" inset-0 rounded-[20px] bg-gradient-to-b from-opacity-0 via-opacity-100 to-opacity-100"
                style={{ background: 'linear-gradient(119deg, rgba(24, 24, 35, 0.88) 11.46%, rgba(47, 31, 79, 0.76) 39.08%, rgba(138, 61, 255, 0.26) 92.98%)' }}></div>
              <img className="w-full h-full object-cover rounded-[20px] " style={{
                borderRadius: '33px',
                border: '0.5px solid var(--Gradient, #32C7C4)',
               }} src={Kedua} alt="Kedua" />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Content2;
