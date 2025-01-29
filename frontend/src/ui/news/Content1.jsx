import React from 'react';
import "../../pages/news/News.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Pertama from '../../assets/news/Pertama.png';
import Ketiga from '../../assets/news/ketiga.png';
import Keempat from '../../assets/news/keempat.png';

function Content1() {
  return (

    <div className="team-heading w-[128px] sm:w-[1280px] sm:h-[570px]">
      {/* Masuk Konten 1 */}
      <div className="sm:flex -ml-40 sm:-ml-12 mt-10 w-full ">
      <div className="card grid w-[330px] sm:w-[597px] h-[320px] sm:h-[680px] bg-gray-925 rounded-box bgcard mb-10">
                <div className="card-body --ml-1">
                    <h4 className="sm:card-title card-m">Mar 13 • 2 min read
                    <a href="../newsafter">
                        <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 -mt-12 sm:-mt-4 mr-2 sm:mr-5" />
                        </a>
                    </h4>
                    <h1 className='title-card text-base sm:text-5xl'>RMIT University Visit to Infinite Learning</h1>
                    <div className="relative lg:mt-20 w-full sm:w-[80%] lg:w-[100%] h-[auto] mt-6">
                        <div className=" inset-0 rounded-[20px] bg-gradient-to-b from-opacity-0 via-opacity-100 to-opacity-100"
                            style={{ background: 'linear-gradient(119deg, rgba(24, 24, 35, 0.88) 11.46%, rgba(47, 31, 79, 0.76) 39.08%, rgba(138, 61, 255, 0.26) 92.98%)' }}></div>
                            <img className="w-full h-full object-cover rounded-[20px] " src={Pertama} alt="Pertama" />
                        </div>
                    </div>
                </div>

            <div className=" divider-horizontal"></div>

            {/* Masuk Konten 2 dan 3 */}
            <ul>
                <li>
                    <div className="grid w-[330px] sm:w-[570px] sm:h-[325px] h-[225px] card bg-gray-925 rounded-box place-items-center relative overflow-hidden shadow-lg bgcard">
                        <img src={Ketiga} alt="dwdw" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="absolute inset-0 flex flex-col justify-left items-left text-white p-4 ml-5 mt-5 --ml-1">
                        <h4 className="sm:card-title card-m">Mar 13 • 2 min read
                        <a href="../newsafter">
                          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 -mt-12 sm:-mt-4 mr-2 sm:mr-5" />
                          </a>
                        </h4>
                            <br />
                            <a href='../newsafter' title="Klik">
                                <p className="title-cardd text-base sm:text-3xl">
                                    Inspiring! Infinite Learning Earns a Chance to Participate in the Pervasive AI Developer Contest
                                </p >
                            </a>
                        </div>
                    </div>

            <br />

            <div className="grid w-[330px] sm:w-[570px] sm:h-[325px] h-[225px] card bg-gray-925 rounded-box place-items-center relative overflow-hidden shadow-lg bgcard">
              <img src={Keempat} alt="dwdw" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-left items-left text-white ml-10 mt-10">
              <h4 className="sm:card-title card-m">Mar 13 • 2 min read
              <a href="../newsafter">
                        <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 -mt-12 sm:-mt-4 mr-2 sm:mr-5" />
                        </a>
                    </h4>
                <br />
                <p className="title-cardd text-base sm:text-3xl">Infinite Learning Meraih Prestasi sebagai Unreal Engine Authorized Training Centre</p >
                <div className="relative lg:mt-20 w-full sm:w-[80%] lg:w-[100%] h-[auto] mt-9">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content1;
