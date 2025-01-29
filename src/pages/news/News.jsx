import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/header/Navbar';
import { format, formatDistanceToNow } from 'date-fns';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/newss');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'MMMM d');
  };

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  const handleClick = (id) => {
    navigate(`/newsafter/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 mx-auto max-w-screen-xl sm:ml-32">
        <div className="team-heading -ml-4 sm:ml-0 mt-20 w-[328px] sm:w-[1280px] h-[32px]">
          <h1 className="txtabc text-2xl sm:text-4xl">Discover Nice Articles and News Here</h1>
          <p className="anaknya sm:text-xl text-l">
            All The Articles and News of The Site Have Been <b>Update Today</b> and You Can Find Your <br /> <b>Articles and News</b> Quickly and Without any Problems
          </p>
        </div>
        <div className="team-heading w-[128px] sm:w-[1280px] sm:h-[570px]">
          <div className="sm:flex -ml-40 sm:-ml-12 mt-10 w-full grid grid-rows-3 grid-flow-col gap-4">
            {news.map((item, index) => {
              if (index === 0) {
                return (
                  <div key={index} className="row-span-3 card grid w-[330px] sm:w-[597px] h-[320px] sm:h-[680px] bg-gray-925 rounded-box bgcard mb-10">
                    <div className="card-body --ml-1">
                      <h4 className="sm:card-title card-m">{formatDate(item.date)} • {timeAgo(item.date)}
                        <button onClick={() => handleClick(item.id)}>
                          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 -mt-12 sm:-mt-4 mr-2 sm:mr-5" />
                        </button>
                      </h4>
                      <h1 className="title-card text-base sm:text-5xl">{item.title}</h1>
                      <div className="relative lg:mt-20 w-full sm:w-[80%] lg:w-[100%] h-[auto] mt-6">
                        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-opacity-0 via-opacity-100 to-opacity-100"
                          style={{ background: 'linear-gradient(119deg, rgba(24, 24, 35, 0.88) 11.46%, rgba(47, 31, 79, 0.76) 39.08%, rgba(138, 61, 255, 0.26) 92.98%)' }}></div>
                        <img className="w-full h-full object-cover rounded-[20px]" src={item.url} alt={item.title} />
                      </div>
                    </div>
                  </div>
                );
              } else if (index === 1 || index === 2) {
                return (
                  <div key={index} className="col-span-2 card grid w-[330px] sm:w-[570px] sm:h-[325px] h-[225px] bg-gray-925 rounded-box place-items-center relative overflow-hidden shadow-lg bgcard">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-left items-left text-white p-4 ml-5 mt-5 --ml-1">
                      <h4 className="sm:card-title card-m">{formatDate(item.date)} • {timeAgo(item.date)}
                        <button onClick={() => handleClick(item.id)}>
                          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 -mt-12 sm:-mt-4 mr-2 sm:mr-5" />
                        </button>
                      </h4>
                      <br />
                      <button onClick={() => handleClick(item.id)} title="Klik">
                        <p className="title-cardd text-base sm:text-3xl">{item.title}</p>
                      </button>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
