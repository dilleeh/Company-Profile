import React from 'react'
import "../../pages/alumni/Alumni.css";
import Content1 from '../../assets/alumni/content1.png';
import Abang from '../../assets/alumni/abang.png';

const Contxt4 = () => {
    return (
        <>
        <div className="">
        <div className="sm:flex w-full">
          <div className="relative card grid w-[397px] sm:w-[597px] h-[555px] sm:h-[718px] py-5 px-10 bgrd rounded-[33px] mb-10">
          <div className="w-full">
              <h1 className="self-stretch text-Tosca font-bold font-[Montserrat] sm:text-[36px] text-[28px] ">Studi Independen Batch 5 Kampus Merdeka di Infinite Learning</h1>
              <p className="font-['Montserrat'] text-white sm:text-[16px] text-[13px]">
              Mendukung program #kampusmerdeka, Infinite Learning terlibat sebagai salah satu mitra untuk Studi Independen Bersertifikat di batch ketiga.
              </p> <br/>
              <div className="">
              <img className='' src={Content1} alt="Content1" /> 
            </div> 
            </div> 
          </div>
          <div className="divider-horizontal"></div>
          <ul>
            <li>
              <div className="relative card grid w-[397px] sm:w-[597px] sm:h-[340px] h-[260px] py-5 px-10 bgrd rounded-[33px]">
                <div className="rating rating-s ">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
              </div> 
              
              <p className="font-['Montserrat'] text-white sm:text-[16px] text-[13px] mt-3">
              Berkat Infinite Learning saya tau apa itu bahasa pemrograman, cara ngoding, bagaimana cara mendesain UI/UX dan membuat tampilan aplikasi sesuai dengan kerentuan yang keren
              </p> <br/>
              <div className="flex w-full">
                  <div className="w-[82px] h-[82px]">
                      <img className='' src={Abang} alt="Abang" /> 
                  </div> 
                  <div className='divider-horizontal'></div>
                  <div className="profile-card">
                    <h1>Adi Prasetya</h1>
                    <p>Alumni Studi Independent MSIB Batch 5</p>
                  </div>
              </div>
              
              </div>
              
            </li>
            <br />
            <li>
              <div className="relative card grid w-[397px] sm:w-[597px] sm:h-[340px] h-[260px] py-5 px-10 bgrd rounded-[33px]">
              <div className="rating rating-s">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
              </div> 

              <p className="font-['Montserrat'] text-white sm:text-[16px] text-[13px] mt-3">
              Berkat Infinite Learning saya tau apa itu bahasa pemrograman, cara ngoding, bagaimana cara mendesain UI/UX dan membuat tampilan aplikasi sesuai dengan kerentuan yang keren
              </p> <br/>
              <div className="flex w-full">
                  <div className="w-[82px] h-[82px]">
                      <img className='' src={Abang} alt="Abang" /> 
                  </div> 
                  <div className='divider-horizontal'></div>
                  <div className="profile-card">
                    <h1>Budi Santoso</h1>
                    <p>RedHat System Administration Alumni 2017</p>
                  </div>
              </div> 
              </div>
            </li>
          </ul>
        </div>


          </div>
        </>
    )
}

export default Contxt4