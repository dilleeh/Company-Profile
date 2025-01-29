import React, { useRef, useState } from 'react';

const Contxt5 = () => {
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState();
    const [scrollLeft, setScrollLeft] = useState();
    const sliderRef = useRef();

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) {
            return;
        }
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseScroll = (e) => {
        if (!isDown) {
            const delta = Math.max(-1, Math.min(1, (e.nativeEvent.wheelDelta || -e.nativeEvent.detail)));
            sliderRef.current.scrollLeft -= delta * 40;
        }
    };

    return (
        <>
            <div className="flex w-full justify-center mt-5">
                <div className="bgrd w-[100%]  h-[517px]  rounded-[33px]">
                    <h1 className="text-left p-5 sm:p-10 text-2xl sm:text-[36px] text-white orpro">Our Program</h1>
                    <div
                        className="grid w-[100%] px-5 sm:px-10 place-items-center shadow"
                        ref={sliderRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onWheel={handleMouseScroll}
                        style={{
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            display: 'grid',
                            gridAutoFlow: 'column',
                            gap: '1rem',
                        }}
                    >

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/home/crd1.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                                <h2 className="cardhmttl1 mt-5">REGULER</h2>
                                <h1 className='cardhmttl2 mt-10'>Game<br /> Development</h1>
                                <p className='cardhm mt-5'>Start From <b className='font-bold'>Rp 1.500.000</b></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btcat btn-outline border-2 w-[123px] text-[14px] rounded-full text-white">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/home/crd1.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                                <h2 className="cardhmttl1 mt-5">REGULER</h2>
                                <h1 className='cardhmttl2 mt-10'>Animation</h1>
                                <p className='cardhm mt-5'>Start From <b className='font-bold'>Rp 1.500.000</b></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btcat btn-outline border-2 w-[123px] text-[14px] rounded-full text-white">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/home/ar_vr.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                                <h2 className="cardhmttl1 mt-5">REGULER</h2>
                                <h1 className='cardhmttl2 mt-10'>AR & VR</h1>
                                <p className='cardhm mt-5'>Start From <b className='font-bold'>Rp 1.500.000</b></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btcat btn-outline border-2 w-[123px] text-[14px] rounded-full text-white">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/home/sosial_media.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                                <h2 className="cardhmttl1 mt-5">REGULER</h2>
                                <h1 className='cardhmttl2 mt-10'>Sosial Media<br /> Specialist</h1>
                                <p className='cardhm mt-5'>Start From <b className='font-bold'>Rp 1.500.000</b></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btcat btn-outline border-2 w-[123px] text-[14px] rounded-full text-white">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/home/ibm _ai.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                                <h2 className="cardhmttl1 mt-5">REGULER</h2>
                                <h1 className='cardhmttl2 mt-10'>IBM Advance AI</h1>
                                <p className='cardhm mt-5'>Start From <b className='font-bold'>Rp 1.500.000</b></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btcat btn-outline border-2 w-[123px] text-[14px] rounded-full text-white">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/msib/DSC03030.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                                <h2 className="cardhmttl1 mt-5">REGULER</h2>
                                <h1 className='cardhmttl2 mt-10'>IBM Academy :<br /> Hybrid Cloud & Red Hat</h1>
                                <p className='cardhm mt-5'>Start From <b className='font-bold'>Rp 1.500.000</b></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btcat btn-outline border-2 w-[123px] text-[14px] rounded-full text-white">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/regular/gbr7.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                                <h2 className="cardhmttl1 mt-5">REGULER</h2>
                                <h1 className='cardhmttl2 mt-10'>Cybersecurity</h1>
                                <p className='cardhm mt-5'>Start From <b className='font-bold'>Rp 1.500.000</b></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btcat btn-outline border-2 w-[123px] text-[14px] rounded-full text-white">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/regular/gbr5.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                                <h2 className="cardhmttlmt-5">REGULER</h2>
                                <h1 className='cardhmttl2 mt-10'>Game Development<br /> With Unreal Engine</h1>
                                <p className='cardhm mt-5'>Start From <b className='font-bold'>Rp 1.500.000</b></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btcat btn-outline border-2 w-[123px] text-[14px] rounded-full text-white">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/regular/gbr2.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                                <h2 className="cardhmttl1 mt-5">STUDI IDEPENDENT</h2>
                                <h1 className='cardhmttl2 mt-5'>Android Mobile<br /> Development &<br /> UIUX Designer</h1>
                                <p className='cardhm mt-5'>Start From <b className='font-bold'>Rp 1.500.000</b></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btcat btn-outline border-2 w-[123px] text-[14px] rounded-full text-white">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/home/sosial_media.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <img src='/assets/home/iconarrowup.svg' alt="" className="absolute top-0 right-0 mt-5 mr-5" />
                                <h2 className="cardhmttl1 mt-5">STUDI IDEPENDENT</h2>
                                <h1 className='cardhmttl2 mt-5'>RedHat System<br /> Administration</h1>
                                <p className='cardhm mt-5'>Start From <b className='font-bold'>Rp 1.500.000</b></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btcat btn-outline border-2 w-[123px] text-[14px] rounded-full text-white">Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contxt5;
