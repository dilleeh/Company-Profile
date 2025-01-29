import React, { useState } from 'react'

const Contxt2 = () => {
    const [isMouseInside, setIsMouseInside] = useState(false);

    return (
        <>
            <div className="hidden sm:block mr-5 w-[100%]">
                <div
                    className="grid w-[100%] h-[723px] bg-gradient-to-r from-teal-400 to-violet-600 mt-5 sm:mt-0 rounded-[33px] place-items-center shadow"
                    onMouseEnter={() => setIsMouseInside(true)}
                    onMouseLeave={() => setIsMouseInside(false)}
                >
                    <img className="w-[612px] h-[696px]" src='assets/home/visual.png' />
                    <div className={isMouseInside ? "card-container show" : "card-container"}>
                        <div className="card w-[370px] h-[393px] pr-2  ml-40 crdhmnews breadcrumbs">
                            <div className="artboard">
                                <ul>
                                    <li>
                                        <button className="w-[140px] h-[20px] rounded-[44px] items-center ml-5 mt-5 btn btcat btn-outline">
                                            <p className="msibtxtcont">Newsroom<i className="fa-solid fa-arrow-right ml-2"></i></p>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[100%] rounded-[20px] border-white items-center ml-5 py-5 mt-5 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlehm mr-30">Infinite Learning Begins Roadshow at Politeknik Negeri Batam
                                                </b>
                                                <br />
                                                <span className='leading-6'>On April 9, 2024, Infinite Learning hosted a delegation from RMIT University at our office in Batam.</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[100%] rounded-[20px] border-white items-center ml-5 py-5 mt-5 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlehm mr-30">Inspiring! Infinite Learning Earns a Chance to Participate in the Pervasive AI Developer Contest
                                                </b>
                                                <br />
                                                <span className='leading-6'>In an era of ever-evolving technology, competition is the cornerstone for innovators to bring their bright ideas to the forefront.</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[100%] rounded-[20px] border-white items-center ml-5 py-5 mt-5 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlehm mr-30">Infinite Learning Meraih Prestasi sebagai Unreal Engine Authorized Training Centre
                                                </b>
                                                <br />
                                                <span className='leading-6'>Infinite Learning, sebuah lembaga berbasis teknologi, riset dan development, serta inovasi yang berkomitmen untuk memajukan talenta Indonesia.</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[100%] rounded-[20px] border-white items-center ml-5 py-5 mt-5 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlehm mr-30">Perkaya Pengalaman Belajar: Infinite Learning dan Program MSIB batch 6
                                                </b>
                                                <br />
                                                <span className='leading-6'>Program magang dan studi independen bersertifikat Kampus Merdeka Batch 6 di Infinite Learning akan segera dimulai..</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[100%] rounded-[20px] border-white items-center ml-5 py-5 mt-5 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlehm mr-30">Global Game Jam Batam: Membangun Kreativitas dan Mengembangkan Talenta Indonesia di Bidang Game Development
                                                </b>
                                                <br />
                                                <span className='leading-6'>Indonesia bersiap menyambut kegiatan Global Game Jam...</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[100%] rounded-[20px] border-white items-center ml-5 py-5 mt-5 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlehm mr-30">Mengulas Kemeriahan di Balik Layar: Cerita Developer Festival 5.0 di Infinite Learning
                                                </b>
                                                <br />
                                                <span className='leading-6'>Selama tiga hari yang penuh semangat, Developer Festival 5.0 berhasil diselenggarakan oleh Infinite Learning pada 27-29 November 2023.</span>
                                            </div>
                                        </button>
                                    </li>

                                   
                                </ul>
                                <button className="w-[140px] h-[20px] rounded-[44px] items-right ml-52 mt-5 btn btcat btn-outline">
                                    <p className="msibtxtcont">See More <i className="fa-solid fa-arrow-right ml-2"></i></p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contxt2
