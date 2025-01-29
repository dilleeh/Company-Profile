import React, { useState } from 'react';

const Contxt7 = () => {
    const [showButton1, setShowButton1] = useState(false);
    const [showButton2, setShowButton2] = useState(false);
    const [showButton3, setShowButton3] = useState(false);
    const [showButton4, setShowButton4] = useState(false);

    return (
        <>
            <div className="flex-none sm:flex w-full justify-center mt-10">
                <div className="mr-5 w-[100%]">
                    <div
                        className="card cardhome w-[100%] h-[357px] rounded-[44px] image-full"
                        onMouseEnter={() => setShowButton1(true)}
                        onMouseLeave={() => setShowButton1(false)}
                    >
                        <figure><img src="/assets/home/Group1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className={`text-center mt-32 text-white text-[28px] font-bold font-['Montserrat'] ${showButton1 ? 'slideUp' : ''}`}>IBM , Web & APP Collaboration</h1>
                            <div className={`button-container ${showButton1 ? 'slideIn' : ''}`}>
                                <a href="https://infinitelearning.notion.site/The-Best-Product-Batch5-86cc9ecd7096439abf086b27062f929a" target="_blank">
                                    <button className="w-[140px] h-[20px] rounded-[44px]  mt-5 btn btcat btn-outline">
                                        <p className="msibtxtcont">See More <i className="fa-solid fa-arrow-right ml-2"></i></p>
                                    </button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mr-5 w-[100%]">
                    <div
                        className="card cardhome w-[100%] h-[357px] mt-5 sm:mt-0 rounded-[44px] image-full"
                        onMouseEnter={() => setShowButton2(true)}
                        onMouseLeave={() => setShowButton2(false)}
                    >
                        <figure><img src="/assets/home/Group4.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className={`text-center mt-32 text-white text-[28px] font-bold font-['Montserrat'] ${showButton2 ? 'slideUp' : ''}`}>Game Development</h1>
                            <div className={`button-container ${showButton2 ? 'slideIn' : ''}`}>
                            <a href="https://infinitelearning.notion.site/The-Best-Product-Batch5-86cc9ecd7096439abf086b27062f929a" target="_blank">
                                    <button className="w-[140px] h-[20px] rounded-[44px]  mt-5 btn btcat btn-outline">
                                        <p className="msibtxtcont">See More <i className="fa-solid fa-arrow-right ml-2"></i></p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-none sm:flex w-full justify-center mt-5 sm:mt-10">
                <div className="mr-5 w-[100%]">
                    <div
                        className="card cardhome w-[100%] h-[357px] rounded-[44px] image-full"
                        onMouseEnter={() => setShowButton3(true)}
                        onMouseLeave={() => setShowButton3(false)}
                    >
                        <figure><img src="/assets/home/Group2.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className={`text-center mt-32 text-white text-[28px] font-bold font-['Montserrat'] ${showButton3 ? 'slideUp' : ''}`}>Web & APP Collaboration</h1>
                            <div className={`button-container ${showButton3 ? 'slideIn' : ''}`}>
                            <a href="https://infinitelearning.notion.site/The-Best-Product-Batch5-86cc9ecd7096439abf086b27062f929a" target="_blank">
                                    <button className="w-[140px] h-[20px] rounded-[44px]  mt-5 btn btcat btn-outline">
                                        <p className="msibtxtcont">See More <i className="fa-solid fa-arrow-right ml-2"></i></p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mr-5 w-[100%]">
                    <div
                        className="card cardhome w-[100%] h-[357px] mt-5 sm:mt-0 rounded-[44px] image-full"
                        onMouseEnter={() => setShowButton4(true)}
                        onMouseLeave={() => setShowButton4(false)}
                    >
                        <figure><img src="/assets/home/Group3.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className={`text-center mt-32 text-white text-[28px] font-bold font-['Montserrat'] ${showButton4 ? 'slideUp' : ''}`}>Web Development</h1>
                            <div className={`button-container ${showButton4 ? 'slideIn' : ''}`}>
                            <a href="https://infinitelearning.notion.site/The-Best-Product-Batch5-86cc9ecd7096439abf086b27062f929a" target="_blank">
                                    <button className="w-[140px] h-[20px] rounded-[44px]  mt-5 btn btcat btn-outline">
                                        <p className="msibtxtcont">See More <i className="fa-solid fa-arrow-right ml-2"></i></p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contxt7;
