import React from 'react'
import { Link } from 'react-router-dom'
import "../../pages/home/Home.css"

const Contxt1 = () => {
    return (
        <>
            <div className="grid w-full sm:w-[615px] h-[511px] bgrd bg-gray-925 rounded-[33px] px-5 sm:px-10 py-8 shadow ">
                <h1 className=" text-white w-[350px] sm:w-full leading-[30px] sm:leading-[40px] text-2xl sm:text-[35px] txtab-c">Join Infinite Learning<br /> and Show Your Creativity!</h1>
                <p className=" text-white w-[300px] sm:w-[440px] mt-2 sm:-mt-5 text-base sm:text-[14px] font-['Montserrat'] leading-normal">Infinite Learning, a division of PT Kinema Systrans multimedia
                    (a subsidiary of Infinite Studios) under Citra Agramasinti Nusantara
                    (Citramas Group).</p>
                <Link to="/msib" className="button-link">
                    <button className="w-[90%] sm:w-[260px] h-[70px] sm:h-[90px] rounded-[44px] justify-center items-center flex border border-gradient">
                        <p className=" msbtext text-[20px] sm:text-[25px]">MSIB<i className="fa-solid fa-arrow-right ml-2"></i></p>
                    </button>
                </Link>
                <Link to="/regular" className="button-link">
                    <button className="w-[90%] sm:w-[400px] h-[70px] sm:h-[90px] rounded-[44px] justify-center items-center flex border border-gradient">
                        <p className=" msbtext text-[20px] sm:text-[25px]">Regular Courses<i className="fa-solid fa-arrow-right ml-2"></i> </p>
                    </button>
                </Link>
            </div>

        </>
    )
}

export default Contxt1
