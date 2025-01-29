import React from 'react'
import "../../pages/home/Home.css";

const Contxt4 = () => {
    return (
        <>
            <div className="flex w-full justify-center mt-5">
                <div className="grid w-[100%] h-[100%] sm:h-[249px] bgrd bg-gray-925 rounded-[33px] py-5 sm:py-0 px-10 place-items-center shadow relative">
                    <a href="../about">
                        <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                    </a>
                    <div className="flex-col justify-start items-center inline-flex">
                        <h1 className="self-stretch text-stone-200 text-2xl sm:text-[36px] inle">Infinite Learning</h1>
                        <p className=" text-justify font-['Montserrat'] text-white/70 text-base sm:text-lg leading-[30px]">
                            <br />Infinite Learning, a division of PT Kinema Systrans multimedia (a subsidiary of Infinite Studios),
                            is centred on the development of vocational training courses relevant to Infinite Studios activity and
                            the growing demand of skilled talent within the ecosystem of Nongsa Digital Park ...
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contxt4