import React from 'react';
import "../../pages/learningdet/Learningdet.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Abang from '../../assets/alumni/abang.png';
import Desak from '../../assets/alumni/desak.png';


function Contxt4() {
  return (
    <>
      <div className="team-heading ml-24 text-center w-[180px] sm:w-[1280px]">
        <h1 className="text-white text-2xl sm:text-3xl font-medium font-['Poppins']">What Our Alumni Says</h1>
      </div>
            <div className="sm:flex -mt-28 sm:-mt-8 w-auto mb-64">
                <div className=" card grid w-[350px] sm:w-[597px] h-[370px] sm:h-[340px] py-5 px-10 bgrd rounded-[33px] ml-5 sm:ml-28 mb-10">
                        <div className="rating rating-s ">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                        </div> 
                            
                        <p className="font-['Montserrat'] text-white text-[16px]">
                            Berkat Infinite Learning saya tau apa itu bahasa pemrograman, cara ngoding, bagaimana cara mendesain UI/UX dan membuat tampilan aplikasi sesuai dengan kerentuan yang keren
                        </p> <br/>
                        <div className="flex w-full">
                            <div className="w-[82px] h-[82px]">
                                <img className='' src={Abang} alt="Abang" /> 
                            </div> 
                            <div className='divider-horizontal'></div>
                            <div className="profile-card">
                                <h1>Adi Prasetya</h1>
                                <p>Android Mobile Development & UIUX Design</p>
                                <p>Alumni Studi Independent MSIB Batch 5</p>
                            </div>
                        </div>
                </div>

                <div className=" card grid w-[350px] sm:w-[597px] h-[370px] sm:h-[340px] py-5 px-10 bgrd rounded-[33px] ml-5 sm:ml-28">
                        <div className="rating rating-s ">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                        </div> 
                            
                        <p className="font-['Montserrat'] text-white text-[16px]">
                        Instruktur-instrukturnya sangat berpengetahuan dan responsif terhadap pertanyaan. Setelah menyelesaikan kursus ini, saya merasa sangat percaya diri untuk memulai karier sebagai pengembang web. Terima kasih Infinite Learning!
                        </p> <br/>
                        <div className="flex w-full">
                            <div className="w-[82px] h-[82px]">
                                <img className='' src={Desak} alt="Abang" /> 
                            </div> 
                            <div className='divider-horizontal'></div>
                            <div className="profile-card">
                                <h1>I Desak Made Aprilia A.P</h1>
                                <p>Front-End Web Development Alumni 2020</p>
                            </div>
                        </div>
                </div>
                        
                        
            </div>
      

    </>
  );
}

export default Contxt4;
