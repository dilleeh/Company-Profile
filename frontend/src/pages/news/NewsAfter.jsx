import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/header/Navbar';
import "@fortawesome/fontawesome-free/css/all.css";
import { format, formatDistanceToNow } from 'date-fns';

const NewsAfter = () => {
  const { newsId } = useParams();
  const [newsDetail, setNewsDetail] = useState(null);

  const fetchNewsDetail = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/newss/${newsId}`);
      setNewsDetail(response.data);
    } catch (error) {
      console.error('Error fetching news detail:', error);
    }
  }, [newsId]);

  useEffect(() => {
    fetchNewsDetail();
  }, [fetchNewsDetail]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'MMMM d');
  };

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };
  const anaknya = {
    fontSize: 18,
    color: "#ffff",
    textAlign: "Left",
    paddingTop: "10px"
  };

  const judul = {
    fontSize: 64,
    color: "#ffff",
    textAlign: "Left",
    paddingTop: "10px"
  };

  if (!newsDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='w-full'>
        <Navbar />
      </div>
      <div className="team-heading mt-10 sm:w-[1280px] w-[580px] ml-4 sm:ml-20">
        <br /><br /><br /><br /><br />
        <p>News / {newsDetail.title}</p>
        <h1 className='txtafter -mt-4 w-[600] text-justify -ml-2' style={judul}>{newsDetail.title}</h1>
        <p style={anaknya}>
          {newsDetail.author} <br /> {newsDetail.location} {formatDate(newsDetail.date)} • {timeAgo(newsDetail.date)}
        </p><br /><br />
        <img className="sm:w-full w-[559px] h-96 object-cover rounded-[20px]" src={newsDetail.url} alt={newsDetail.title} />
        <div className='article mt-5 items-center text-left'>
          <article>
            {newsDetail.desription}
          </article>
        </div>
      </div>
    </>
  );
};

export default NewsAfter;
