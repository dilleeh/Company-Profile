import React, { useState } from 'react';

const Contxt3 = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="flex-none sm:flex w-full justify-center -mt-32 sm:mt-5 sm:mb-40">
        <div className="grid w-[100%] h-[100%] sm:h-[165px] bgrd bg-gray-925 rounded-[33px] px-10 place-items-center relative">
          <div className="flex-none sm:flex-col justify-start items-center inline-flex">
            <div className="flex-none sm:flex -mt-10">
              <div className="flex-none sm:flex flex-col mr-5 mt-16">
                <button
                  className={`sm:py-2 px-4 text-3xl sm:text-4xl -ml-7 sm:ml-0 font-bold tracking-[7.20px] rounded-full 
                  ${activeTab === 'vision' ? 'bg-blue-500' : 'text-white'
                    }`}
                  style={{
                    backgroundImage: activeTab === 'vision' ? 'linear-gradient(90deg, #19c6c2 50%, #8a3dff 82.5%)' : '',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: activeTab === 'vision' ? 'transparent' : 'white'
                  }}
                  onClick={() => handleTabClick('vision')}>
                  Vision
                </button>
                <button
                  className={`sm:py-2 sm:px-4 text-3xl sm:text-4xl font-bold tracking-[7.20px] rounded-full 
                  ${activeTab === 'mission' ? 'bg-blue-500' : 'text-white'
                    }`}
                  style={{
                    backgroundImage: activeTab === 'mission' ? 'linear-gradient(90deg, #19c6c2 50%, #8a3dff 82.5%)' : '',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: activeTab === 'mission' ? 'transparent' : 'white'
                  }}
                  onClick={() => handleTabClick('mission')}>
                  Mission
                </button>
              </div>
              <div className="sm:grid w-[100%] h-[248px] bg-gray-925 rounded-[33px] -ml-3 sm:ml-0 sm:px-10 place-items-center relative">
                {activeTab === 'vision' && (
                  <div className="flex-col justify-start items-center inline-flex">
                    <p className='font-[Montserrat] mt-5 sm:mt-0 w-[300px] sm:w-full text-justify text-white text-[16px] font-normal leading-6 '>
                      To be a leading solution provider in technology, research and development,
                      and innovation through training and education. We aim to increase the
                      number of creative and innovative digital talents who are not only
                      independent but also recognised by the industry both in Indonesia and the world
                    </p>
                  </div>
                )}
                {activeTab === 'mission' && (
                  <div className="flex-col justify-start items-center inline-flex">
                    <p className='font-[Montserrat] mt-5 sm:mt-0 w-[300px] sm:w-full text-justify text-white text-[16px] font-normal leading-6 '>
                      Cooperate with all government agencies, national research institutions,
                      and education/training institutions both domestically and internationally
                      to develop curriculum standards, collaborate in
                      research and development, and provide innovative funding.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contxt3