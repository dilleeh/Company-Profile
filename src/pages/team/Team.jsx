import React from 'react'
import Bgpattern from '../../ui/team/Bgpattern'
import Navbar from '../../components/header/Navbar'
import Contxtt1 from '../../ui/team/Contxtt1'
import Contxt2 from '../../ui/team/Contxt2'
import Contxt3 from '../../ui/team/Contxt3'
import "../../pages/team/Team.css";
import Contxt4 from '../../ui/team/Contxt4'
import Contxt5 from '../../ui/team/Contxt5'
import Contxt6 from '../../ui/team/Contxt6'
import Contxt7 from '../../ui/team/Contxt7'
import Contxt2_M from '../../ui/team/Contxt2_M'

const Team = () => {
    return (
        <>
            <div className="relative z-10">
                <Navbar />
            </div>
            <div className='relative w-ful'>
                <div className="hidden sm:block absolute top-0 left-0 w-full z-0">
                    <Bgpattern />
                </div>
                <Contxtt1 />
                <div className="block sm:hidden">
                    <Contxt2_M />
                </div>
                <div className="hidden sm:block">
                    <Contxt2 />
                </div>
                {/* <Contxt3 />
                <Contxt4 />
                <Contxt5 />
                <Contxt6 />
                <Contxt7 /> */}
                <div className="w-full h-[100px] sm:h-[300px]" />
            </div>
        </>
    )
}

export default Team