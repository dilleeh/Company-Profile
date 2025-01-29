import React, { useEffect } from 'react';

const Contxt2 = () => {
  useEffect(() => {
    const cardabskor = document.querySelectorAll('.cardabskor');

    const handleMouseOver = function () {
      cardabskor.forEach(item => {
        if (item !== this) {
          item.classList.add('blur');
          item.style.zIndex = 0;
        }
      });
      this.style.zIndex = 2;
    };

    const handleMouseOut = function () {
      cardabskor.forEach(item => {
        item.classList.remove('blur');
        item.style.zIndex = 1;
      });
    };

    cardabskor.forEach(item => {
      item.addEventListener('mouseover', handleMouseOver);
      item.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      cardabskor.forEach(item => {
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <>
      <div className="flex-none sm:flex w-full justify-center mt-10">
        <div className="mr-5 w-[100%]">
          <div className="grid w-full sm:w-[633px] h-[100%] sm:h-[562px] py-5 sm:py-10 px-5 sm:px-10 bgrd rounded-[44px]">
            <div className="w-full">
              <h1 className="self-stretch text-NeonWhite/70 font-[Montserrat] text-3xl sm:text-[36px] font-medium">Infinite Learning</h1>
              <h5 className=" text-NeonWhite/70 text-[16px] sm:text-[18px] mt-2 font-normal font-['Montserrat'] leading-7">Technology, Innovation, Research & Development Company.</h5>
              <p className=" text-justify font-['Montserrat'] text-NeonWhite/70 text-[16px] mt-5 leading-[30px]">
                Infinite Learning, one of the divisions of PT Kinema Systrans multimedia (a subsidiary of Infinite Studios), centres on developing vocational
                training courses relevant to Infinite Studios activities and the growing demand for skilled talent in the Nongsa Digital Park ecosystem
              </p>
            </div>
            <div className="card cardabout mt-5 ">
              <figure><img src="assets/about/nongsa.svg" /></figure>
            </div>
          </div>
        </div>
        <div className="mr-5 w-[100%] sm:mt-0 mt-5">
          <div className="grid w-[100%] h-[491px] place-items-center">
            <div className="w-full sm:w-[381px] h-[491px] relative">
              <div className="cardabskor w-full left-0 sm:left-[128px] top-0 absolute">
                <div className="w-[100%] sm:w-[209px] h-[100px] sm:h-[209px] left-0 top-0 absolute bg-gradient-to-r from-teal-400 to-violet-600 rounded-[30px] sm:rounded-[44px]" />
                <div className="w-[111px] h-[88px] left-[50px] top-[60px] absolute">
                  <div className="ml-20 sm:ml-0 -mt-12 sm:mt-0 absolute text-center text-white text-5xl font-bold font-['Poppins']">100+</div>
                  <div className="ml-24 sm:ml-[20px] mt-0 sm:mt-12 absolute text-center text-white text-xl font-light font-['Poppins']">Project</div>
                </div>
              </div>
              <div className=" cardabskor w-full left-0 top-[120px] sm:top-[149px] absolute">
                <div className="w-[100%] sm:w-[209px] h-[100px] sm:h-[209px] left-0 top-0 absolute bg-gradient-to-r from-teal-400 to-violet-600 rounded-[30px] sm:rounded-[44px]" />
                <div className="w-[154px] h-[88px] left-[28px] top-[60px] absolute">
                  <div className="ml-20 sm:ml-0 -mt-12 sm:mt-0 absolute text-center text-white text-5xl font-bold font-['Poppins']">3500+</div>
                  <div className="ml-28 sm:ml-[20px] mt-0 sm:mt-12 absolute text-center text-white text-xl font-light font-['Poppins']">Student</div>
                </div>
              </div>
              <div className=" cardabskor w-full left-0 sm:left-[172px] top-[240px] sm:top-[282px] absolute">
                <div className="w-[100%] sm:w-[209px] h-[100px] sm:h-[209px] left-0 top-0 absolute bg-gradient-to-r from-teal-400 to-violet-600 rounded-[30px] sm:rounded-[44px]" />
                <div className="w-[89px] h-[88px] left-[61px] top-[60px] absolute">
                  <div className="ml-20 sm:ml-0 -mt-12 sm:mt-0 absolute text-center text-white text-5xl font-bold font-['Poppins']">20+</div>
                  <div className="ml-20 sm:ml-[20px] mt-0 sm:mt-12 absolute text-center text-white text-xl font-light font-['Poppins']">Mentor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contxt2