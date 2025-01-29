import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Sidebar from "../../components/header/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './NewsView.css';

const NewsView = () => {
    const [News, setNews] = useState([]);
    const modalRef = useRef(null);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [desription, setDesription] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [newsId, setEditId] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 1;

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        const response = await axios.get("http://localhost:5000/newss");
        setNews(response.data);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveNews = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("date", date);
        formData.append("time", time);
        formData.append("desription", desription);
        try {
            if (isEdit) {
                await axios.patch(`http://localhost:5000/newss/${newsId}`, formData, {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                });
            } else {
                await axios.post("http://localhost:5000/newss", formData, {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                });
            }
            modalRef.current.close();
            getNews();
            resetForm();
        } catch (error) {
            console.log(error);
        }
    };

    const resetForm = () => {
        setTitle("");
        setDate("");
        setTime("");
        setDesription("");
        setFile("");
        setPreview("");
        setIsEdit(false);
        setEditId(null);
    };

    const deleteNews = async (newsId) => {
        try {
            await axios.delete(`http://localhost:5000/news/${newsId}`);
            getNews();
        } catch (error) {
            console.log(error);
        }
    };


    const editNews = (news) => {
        setTitle(news.title);
        setDate(news.date);
        setTime(news.time);
        setDesription(news.desription);
        setPreview(news.url);
        setIsEdit(true);
        setEditId(news.id);
        modalRef.current.showModal();
    };


    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = News.slice(indexOfFirstNews, indexOfLastNews);

    const totalPages = Math.ceil(News.length / newsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="bg-[#F8F9FC] h-[100vh] p-5">
                <div>
                    <Sidebar />
                </div>
                <div className="py-10 px-10 mt-5 w-full ">
                    <button className="btn btn-sm bg-[#181823] btn-square" onClick={() => modalRef.current.showModal()} >
                        <FontAwesomeIcon icon={faPlus} className='text-md text-white' />
                    </button>
                    <div className="bgtable bg-white mt-5 p-5 rounded-[5px]">
                        <table className="min-w-full">
                            <thead className="bg-gray-50 border border-gray-200">
                                <tr>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Title</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Date</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Time</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Description</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Image</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-xs border border-gray-200">
                                {currentNews.map((News) => (
                                    <tr key={News.id}>
                                        <td className="p-2 border border-gray-200 text-center">{News.title}</td>
                                        <td className="p-2 border border-gray-200 text-center">{News.date}</td>
                                        <td className="p-2 border border-gray-200 text-center">{News.time}</td>
                                        <td className="p-2 border border-gray-200 w-[40%] text-justify truncat">{News.desription}</td>
                                        <td className="p-2 border border-gray-200 text-center">
                                            <div className="flex justify-center items-center">
                                                <img src={News.url} alt="news" className="h-10 object-cover" />
                                            </div>
                                        </td>
                                        <td className="p-2 border border-gray-200 text-center text-sm">
                                            <button onClick={() => editNews(News)} className="text-green-500 hover:text-green-700 text-lg">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button onClick={() => deleteNews(News.id)} className="text-red-500 hover:text-red-700 text-lg ml-2">
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end mt-5">
                        <div className="join">
                            {[...Array(totalPages).keys()].map(number => (
                                <button key={number + 1} onClick={() => paginate(number + 1)} className={`join-item btn btn-sm ${currentPage === number + 1 ? 'btn-active' : ''}`}>
                                    {number + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                    <dialog ref={modalRef} className="modal">
                        <div className="modal-box ">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => { modalRef.current.close(); resetForm(); }}>✕</button>
                            <form className='mt-5' onSubmit={saveNews}>
                                <input type="text" name="title" placeholder="Title" className="input input-md mb-3 input-bordered w-full"
                                    value={title} onChange={(e) => setTitle(e.target.value)} />
                                <input type="date" name="date" placeholder="Date" className="input input-md mb-3 input-bordered w-full"
                                    value={date} onChange={(e) => setDate(e.target.value)} />
                                <input type="time" name="time" placeholder="Time" className="input input-md mb-3 input-bordered w-full"
                                    value={time} onChange={(e) => setTime(e.target.value)} />
                                <textarea name="desription" className="textarea textarea-sm textarea-bordered w-full mb-3" placeholder="Description"
                                    value={desription} onChange={(e) => setDesription(e.target.value)}></textarea>
                                <input type="file" name="photoURL" placeholder="Photo URL" className="file-input file-input-md file-input-bordered w-full"
                                    onChange={loadImage} />
                                {preview ? (
                                    <figure className="image w-[50%] mt-3 ml-28">
                                        <img src={preview} alt="Preview Image" />
                                    </figure>
                                ) : (
                                    ""
                                )}
                                <div className="modal-action">
                                    <button type="submit" className="btn btn-md w-full text-white text-lg font-['Montserrat'] font-normal bg-[#181823] btn-square">
                                        {isEdit ? "Update" : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </>
    );
};

export default NewsView;

