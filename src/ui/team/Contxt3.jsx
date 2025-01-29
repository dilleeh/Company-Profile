import React, { useState } from 'react';
import jes from '../../assets/Team/jes.png';
import sri from '../../assets/Team/sri.png';
import alna from '../../assets/Team/alna.png';
import buttoncard from '../../assets/Team/buttoncard.svg';
import "../../pages/team/Team.css";

const Contxt3 = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toggleExpand = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    };

    const getMarginBottom = (index) => {
        return expandedIndex === index ? '150px' : '0';
    };

    const cards = [
        {
            img: sri,
            name: "Sri Andeani",
            role: "Head of Digital Creative",
            description: "Responsible for overseeing day-to-day operations and ensuring smooth functioning of the organization's processes."
        },
        {
            img: jes,
            name: "Jessica Vanessa",
            role: "Head of Professional Mentor",
            description: "The Captain of the team, an expert in sharing his knowledge with the public, and a seasoned mentor specializing in business education. With years of experience under his belt, he's the driving force behind Infinite Learning's success, inspiring others to learn and grow."
        },
        {
            img: alna,
            name: "Alna Tirana Nur",
            role: "Finance Operator",
            description: "Leading the digital technology team, Indra brings innovative solutions to the table, leveraging cutting-edge technologies to drive the organization's digital transformation."
        }
    ];
    return (
        <div className='flex-none sm:flex justify-center px-5 mt-40'>
            <div className="sm:grid grid-cols-3 gap-10 ">
                {cards.map((card, index) => (
                    <div key={index} className={`w-full sm:w-[385px] crdart shadow-xl mt-${index === 1 ? '20' : '20'} mt-${index === 2 ? '40' : '40'}  sm:mt-${index === 1 ? '0' : '20'} mt-${index === 2 ? '40' : '40'} transition-all ease-in-out duration-300 
                    ${expandedIndex === index ? 'h-[516px]' : 'h-[336px]'}`} style={{ marginBottom: getMarginBottom(index), transition: 'margin-bottom 0.1s ease-in-out' }}>
                        <div className="card border-0">
                            <div className="card-body text-left">
                                <div className="card-actions flex justify-end" onClick={() => toggleExpand(index)}>
                                    <img src={buttoncard} className='' alt="" />
                                </div>
                                <h2 className="crdttl">{card.name}</h2>
                                <p className='txtp '>{card.role}</p>
                                {expandedIndex === index && (
                                    <p className='txtp'>{card.description}</p>
                                )}
                            </div>
                            <figure className="px-10 pb-20 -mt-3">
                                <img src={card.img} alt="Shoes" className=" w-[294.18px]" />
                            </figure>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Contxt3