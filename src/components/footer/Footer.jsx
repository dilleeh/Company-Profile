import React from 'react'
import './Footer.css'
// IMPORT LOGO
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// IMPORT IMG
import Logo from '../../assets/logoblack.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer relative z-10  py-10 sm:py-5 bg-Charcoal text-base-content roud">
                <aside>
                    <img className="w-[120px] sm:w-[245px] mx-auto sm:mx-0" src={Logo} />
                    <nav className='lg:hidden mt-8 mx-auto'>
                        <div className="grid grid-flow-col gap-6 -mt-3">
                            <a href='https://www.instagram.com/infinitelearning_id?igsh=MWo4YXNleXdhd3Bjbg=='><BsInstagram className='ig text-2xl' /></a>
                            <a href='https://www.linkedin.com/company/infinite-learning-indonesia/'><FaLinkedin className='li text-2xl' /></a>
                            <a href='https://www.tiktok.com/@infinitelearning_id?_t=8mO282LZXy4&_r=1'><FaTiktok className='tt text-2xl' /></a>
                        </div>
                    </nav>
                    <p className="mt-5 sm:mt-20 text-NeonWhite invisible lg:visible  text-center text-lg sm:text-sm sm:text-left">Nongsa Digital Park, Jl. Hang Lekiu KM 2 <br /> Sambau, Kecamatan Nongsa, Kota Batam <br />Kepulauan Riau<br />29466</p>

                </aside>
                <div className="grid grid-cols-2 gap-8 -mt-32 sm:mt-8 sm:grid-cols-2 sm:grid-flow-row sm:grid-rows-2 sm:gap-4">
                    <nav className="sm:col-start-1 sm:col-end-2">
                        <h6 className="footer-ttitle">Program</h6>
                        <a href='..\regular' className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal mt-8 block">Regular Course</a>
                        <a href='..\msib' className="text-NeonWhite text-base font-normal font-['Montserrat'] mt-2 block">MSIB</a>
                    </nav>
                    <nav className="-ml-5 sm:ml-0">
                        <h6 className="footer-ttitle">Community</h6>
                        <a className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal mt-8 block">About us</a>
                        <a href='https://wa.me/6282387597266' className="text-NeonWhite text-base font-normal font-['Montserrat'] mt-2  block">Contact</a>
                    </nav>
                </div>

                <nav className='mt-4 sm:mt-8'>
                    <h6 className="footer-ttitle">About</h6>
                    <a className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal  mt-6">Terms of use</a>
                    <a className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">Privacy policy</a>
                </nav>
                <nav className='mt-8 hidden lg:block'>
                    <h6 className="footer-ttitle">Our Social Media</h6>
                    <div className="grid grid-flow-col gap-10 mt-8">
                        <a href='https://www.instagram.com/infinitelearning_id?igsh=MWo4YXNleXdhd3Bjbg=='><BsInstagram className='ig' /></a>
                        <a href='https://www.linkedin.com/company/infinite-learning-indonesia/'><FaLinkedin className='li' /></a>
                        <a href='https://www.tiktok.com/@infinitelearning_id?_t=8mO282LZXy4&_r=1'><FaTiktok className='tt' /></a>
                    </div>
                    <div className="boxmail w-full h-[3px] bg-[#212130] rounded-full"></div>
                    <div className="boxmail w-full h-[100%] bg-Charcoal rounded-[5px] px-5 py-5 mt-5 flex items-center">
                        <img src='/assets/icon/email.ico' className="mr-4 w-10" />
                        <p className="font-[Montserrat] text-base text-white font-normal">
                            csc@infinitelearning.id
                        </p>
                </div>
                </nav>
            </footer>
            {/* mobile */}
            <footer className='px-5 lg:hidden'>
                <div className="boxmail w-full h-[3px] bg-[#212130] rounded-full"></div>
                <div className="boxmail w-full h-[100%] bg-[#212130] rounded-[20px] px-8 py-5 mt-7">
                    <p className='text-center font-[Montserrat] text-lg text-white font-normal'>More questions? Email us at</p>
                    <div className="boxmail w-full h-[100%] bg-Charcoal rounded-[5px] px-5 py-5 mt-5 flex items-center">
                        <img src='/assets/icon/email.ico' className="mr-4 w-10" />
                        <p className="font-[Montserrat] text-base text-white font-normal">
                            csc@infinitelearning.id
                        </p>
                    </div>
                </div>
                <div className="boxaddress w-full h-[100%] bg-[#212130] rounded-[20px] mt-5 px-8 py-5 flex items-center">
                    <img src='/assets/icon/location.ico' className="mr-4 w-10" />
                    <p className="text-NeonWhite text-sm">
                        Digital Park, Sambau, Kecamatan<br />
                        Nongsa, Kota Batam, Kepulauan Riau<br />
                        29466
                    </p>
                </div>

            </footer>
            <footer className=" lg:hidden footer footer-center pt-4 w-full text-base-content px-10 ">
                <aside>
                    <p className="text-gray-100 text-[14px] sm:text-lg font-normal font-['Montserrat'] leading-[20px] py-5">©2023|Infinite Learning Indonesia. <br />All Rights Reserved</p>
                </aside>
            </footer>
            {/* dekstop */}
            <footer className="footer footer-center pt-4 copyrig text-base-content hidden lg:block ">
                <aside>
                    <p className="text-gray-100 text-[14px] sm:text-lg font-normal font-['Montserrat'] leading-[30px]">©2023|Infinite Learning Indonesia. All Rights Reserved</p>
                </aside>
            </footer>
        </>
    )
}

export default Footer