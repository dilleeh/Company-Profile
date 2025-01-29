import React from 'react'
import Bgpattern from '../../ui/career/Bgpattern'
import Contxt1 from '../../ui/career/Contxt1'
import Contxt2 from '../../ui/career/Contxt2'
import Contxt4 from '../../ui/career/Contxt4'
import Navbar from '../../components/header/Navbar'

const Career = () => {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className='w-fulll'>
        <div className="sm:block hidden absolute top-0 left-0 w-full z-0">
          <Bgpattern />
        </div>
        <div className="px-5 sm:px-0 sm:ml-28 w-full sm:w-[1280px]">
          <Contxt1 />
          <Contxt2 /><br />
          <Contxt4 />
        </div>
      </div>
    </>
  )
}

export default Career