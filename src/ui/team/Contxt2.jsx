import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../pages/team/Team.css";

const Contxt2 = () => {
    const [teams, setTeams] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const [rotatedIndexes, setRotatedIndexes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/teams");
                setTeams(response.data);
            } catch (error) {
                console.error("Error fetching team data:", error);
            }
        };

        fetchData();
    }, []);

    const toggleExpand = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
            setRotatedIndexes(rotatedIndexes.filter(i => i !== index));
        } else {
            setExpandedIndex(index);
            setRotatedIndexes([...rotatedIndexes, index]);
        }
    };

    const getMarginBottom = (index) => {
        return expandedIndex === index ? '200px' : '50px';
    };

    const isRotated = (index) => {
        return rotatedIndexes.includes(index);
    };

    return (
        <>
            <div className='flex-none sm:flex justify-center px-5 -mt-10 sm:mt-0'>
                <div className="sm:grid grid-cols-3 gap-10">
                    {teams.map((card, index) => (
                        <div key={index} className={`w-full sm:w-[385px] crdart shadow-xl mt-${index === 1 ? '20' : '20'} mt-${index === 2 ? '40' : '30'}  sm:mt-${index === 1 ? '0' : '20'} mt-${index === 2 ? '40' : '40'} 
                        transition-all ease-in-out duration-300 ${expandedIndex === index ? 'h-[516px]' : 'h-[336px]'} ${index >= 3 && index <= 5 ? 'mt-0' : ''}`} style={{ marginBottom: getMarginBottom(index), transition: 'margin-bottom 0.3s ease-in-out' }}>
                            <div className="card border-0">
                                <div className="card-body text-left">
                                    <div className="card-actions flex justify-end" onClick={() => toggleExpand(index)}>
                                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            className={` ${isRotated(index) ? 'rotate-180' : ''} ${isRotated(index) ? 'mirror' : ''}`} alt="">
                                            <g clipPath="url(#clip0_3037_5343)">
                                                <path className='btncardt' d="M23.1367 4.46094C20.5065 4.46094 18.0326 4.96224 15.7148 5.96484C13.4102 6.95443 11.3789 8.32812 9.62109 10.0859C7.86328 11.8438 6.48307 13.875 5.48047 16.1797C4.49089 18.4974 3.99609 20.9714 3.99609 23.6016C3.99609 26.2318 4.49089 28.6992 5.48047 31.0039C6.48307 33.3216 7.86328 35.3594 9.62109 37.1172C11.3789 38.875 13.4102 40.2487 15.7148 41.2383C18.0326 42.2409 20.5065 42.7422 23.1367 42.7422C25.7669 42.7422 28.2344 42.2409 30.5391 41.2383C32.8568 40.2487 34.8945 38.875 36.6523 37.1172C38.4102 35.3594 39.7904 33.3216 40.793 31.0039C41.7956 28.6992 42.2969 26.2318 42.2969 23.6016C42.2969 20.9714 41.7956 18.4974 40.793 16.1797C39.7904 13.875 38.4102 11.8438 36.6523 10.0859C34.8945 8.32812 32.8633 6.95443 30.5586 5.96484C28.2539 4.96224 25.7799 4.46094 23.1367 4.46094ZM23.1367 5.94531C25.5846 5.94531 27.8763 6.40104 30.0117 7.3125C32.1471 8.22396 34.0221 9.48698 35.6367 11.1016C37.2643 12.7292 38.5339 14.6107 39.4453 16.7461C40.3568 18.8815 40.8125 21.1667 40.8125 23.6016C40.8125 26.0365 40.3568 28.3216 39.4453 30.457C38.5339 32.5924 37.2643 34.474 35.6367 36.1016C34.0221 37.7292 32.1471 38.9987 30.0117 39.9102C27.8763 40.8216 25.5846 41.2773 23.1367 41.2773C20.7018 41.2773 18.4167 40.8216 16.2812 39.9102C14.1458 38.9987 12.2643 37.7292 10.6367 36.1016C9.02214 34.474 7.75911 32.5924 6.84766 30.457C5.9362 28.3216 5.48047 26.0365 5.48047 23.6016C5.48047 21.1667 5.9362 18.8815 6.84766 16.7461C7.75911 14.6107 9.02214 12.7292 10.6367 11.1016C12.2643 9.48698 14.1458 8.22396 16.2812 7.3125C18.4167 6.40104 20.7018 5.94531 23.1367 5.94531ZM29.7773 19.0312C29.569 19.0312 29.3997 19.0964 29.2695 19.2266C29.1523 19.3698 29.0938 19.5521 29.0938 19.7734V25.2812L29.1328 28.7383L27.1406 26.6289L17.043 16.5312C16.8997 16.388 16.7109 16.3164 16.4766 16.3164C16.2812 16.3164 16.1185 16.375 15.9883 16.4922C15.8581 16.6224 15.793 16.7917 15.793 17C15.793 17.1953 15.8711 17.3711 16.0273 17.5273L26.1445 27.6445L28.2539 29.6758L25.5195 29.6172H19.25C19.0286 29.6172 18.8529 29.6758 18.7227 29.793C18.5924 29.9232 18.5273 30.0924 18.5273 30.3008C18.5273 30.4961 18.5924 30.6523 18.7227 30.7695C18.8529 30.8867 19.0352 30.9453 19.2695 30.9453H29.7383C29.9466 30.9453 30.1159 30.8802 30.2461 30.75C30.3763 30.6328 30.4414 30.457 30.4414 30.2227V19.7734C30.4414 19.5521 30.3763 19.3698 30.2461 19.2266C30.1289 19.0964 29.9727 19.0312 29.7773 19.0312Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3037_5343">
                                                    <rect width="47" height="47" rx="23.5" transform="matrix(1 0 0 -1 0 47)" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h2 className="crdttl">{card.name}</h2>
                                    <p className='txtp'>{card.position}</p>
                                    {expandedIndex === index && (
                                        <p className='txtp'>{card.desription}</p>
                                    )}
                                </div>
                                <figure className="px-10 pb-20 -mt-3">
                                    <img src={card.url} alt="Shoes" className=" w-[294.18px]" />
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Contxt2;
