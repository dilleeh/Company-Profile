import React from 'react'
import "../../pages/learning/Learning.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Kampus from '../../assets/msib/yy3.png';
import Game from '../../assets/learning/game.png';
import Manage from '../../assets/learning/manage.png';
import Coding from '../../assets/learning/coding.png';
import Ai from '../../assets/learning/ai.png';
import D from '../../assets/learning/3d.png';

const Contxt1 = () => {
    return (
        <>
            <div className="grid sm:w-[599px] w-[430px] sm:h-[497px] h-[200px] bg-gray-925 rounded-[33px] py-8 shadow sm:ml-0 ml-10">
                <h1 className=" text-white sm:text-2xl text-xl font-semibold font-['Montserrat'] leading-7">#Anyoneanything</h1>
                <h1 className=" text-white sm:text-[64px] text-[44px] txtmsib-c">Start your <br /> journey with us</h1>
                <label className="input input-bordered mt-10 h-[60px] btn btcat btn-outline sm:w-[48%] w-[90%] rounded-full ">
                    <input type="text" className="grow font-normal font-['Montserrat'] text-[18px] " placeholder="Find the course you need " />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <h1 className="hidden sm:block text-white text-2xl font-semibold font-['Montserrat'] leading-7 mt-20">Categories</h1>

                <div className="lg:hidden dropdown dropdown-hover dropdown-down z-50 mt-5">
                    <div tabIndex={0} role="button" className="btn bg-transparent border-none text-2xl text-NeonWhite "> <FontAwesomeIcon icon={faFilter} /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a className="m-1">View all</a></li>
                        <li ><a className="m-1">Studi Independent</a></li>
                        <li ><a className="m-1">Magang</a></li>
                        <li ><a className="m-1">Coding</a></li>
                        <li ><a className="m-1">Management</a></li>
                        <li ><a className="m-1">Game</a></li>
                        <li ><a className="m-1">3D Design</a></li>
                        <li ><a className="m-1">A.I</a></li>
                    </ul>
                </div>

                <ul className="hidden lg:flex mt-1 gap-5">
                    <li>
                        <button className="w-[320px] h-[90px] rounded-[44px] justify-center items-center flex border border-gradient mt-10">
                            <img src={Kampus} alt="km" />
                            <p className="msibtext ml-5">Studi Independent</p>
                        </button>
                    </li>

                    <li>
                        <button className="w-[260px] h-[90px] rounded-[44px] justify-center items-center flex border border-gradient mt-10">
                            <img src={Kampus} alt="km" />
                            <p className="msibtext ml-5">Magang</p>
                        </button>
                    </li>
                </ul>

                <ul className="hidden lg:flex mt-1 gap-5">
                    <li>
                        <button className="w-[210px] h-[100px] rounded-[44px] justify-center items-center flex border border-gradient mt-10">
                            <img src={Coding} alt="km" />
                            <p className="msibtext ml-5">Coding</p>
                        </button>
                    </li>

                    <li>
                        <button className="w-[270px] h-[100px] rounded-[44px] justify-center items-center flex border border-gradient mt-10">
                            <img src={Manage} alt="km" />
                            <p className="msibtext ml-5">Management</p>
                        </button>
                    </li>

                    <li>
                        <button className="w-[220px] h-[100px] rounded-[44px] justify-center items-center flex border border-gradient mt-10">
                            <img src={Game} alt="km" />
                            <p className="msibtext ml-5">Game</p>
                        </button>
                    </li>

                    <li>
                        <button className="w-[270px] h-[100px] rounded-[44px] justify-center items-center flex border border-gradient mt-10">
                            <img src={D} alt="km" />
                            <p className="msibtext ml-5">3D Design </p>
                        </button>
                    </li>

                    <li>
                        <button className="w-[210px] h-[100px] rounded-[44px] justify-center items-center flex border border-gradient mt-10">
                            <img src={Ai} alt="km" />
                            <p className="msibtext ml-5">A.I</p>
                        </button>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Contxt1