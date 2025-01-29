import React from 'react';
import "../../pages/learningdet/Learningdet.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Laundry from '../../assets/learning/laundry.png';


function Contxt4() {
  return (
    <>
      <div className="team-heading ml-24 text-center w-[180px] sm:w-[1280px] mb-32">
        <h1 className="text-white text-2xl sm:text-3xl font-medium font-['Poppins']"> Our Mentee Project</h1>
      </div>


      <div className="sm:flex w-auto mb-64 ">
        <div className="flex sm:ml-48 card grid ml-7 w-[335px] sm:w-[535px] h-[437px]] bg-gray-925 -mt-20">
          <img className="w-full h-full object-cover rounded-[33px] " style={{ borderRadius: '33px', border: '0.5px solid var(--Gradient, #32C7C4)' }}
            src={Laundry} alt="project" />
        </div>

        <div className="lear-heading text-left ml-7 sm:ml-16 mt-2 sm:-mt-20">
          <h1 className=" text-white  font-['Poppins']"> Laundry Pro</h1>
          <article className="justify-center text-white text-[19px] font-['Poppins'] w-[335px] sm:w-[556px]">
            LaundryPro adalah sebuah website untuk membantu pemilik usaha LaundryPro dalam mengelola pesanan
            dengan fitur administrator yang dapat memberikan status pesanan, menghitung total harga Laundry
            dan layanan pelanggan yang responsif. Serta memudahkan pelanggan memesan Laundry dengan menyediakan
            platform website yang praktis bisa dibuka melalui smartphone ataupun desktop, lalu bisa diakses kapan saja dan dimana saja <br /> <br />
            Raihan Ramadhan ; Markus Wahid Sabel Hansen Situmorang ; Very ; Agil Fernando ; Markus Wahid Sabel Hansen Situmorang ; Divasetya Pratama Putri ; Agustia Kuspita Aryanti ; Arif Aditya Pratama ; Abdul Manap ; Nurul Huda Jannah
          </article>
        </div>
      </div>
    </>
  );
}

export default Contxt4;
