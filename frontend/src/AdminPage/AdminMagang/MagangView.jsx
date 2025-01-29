import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Sidebar from "../../components/header/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './MagangView.css';

const MagangView = () => {
    const [Magangs, setMagangs] = useState([]);
    const modalRef = useRef(null);
    const [program, setProgram] = useState("");
    const [title, setTitle] = useState("");
    const [urlProgram, setUrlProgram] = useState("");
    const [urlSyllabus, setUrlSyllabus] = useState("");
    const [starDate, setStarDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [descRegis, setDescRegis] = useState("");
    const [descBenefit, setDescBenefit] = useState("");
    const [descRec, setDescRec] = useState(null);
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [magangId, setEditId] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const magangsPerPage = 4;

    useEffect(() => {
        getMagangs();
    }, []);

    const getMagangs = async () => {
        const response = await axios.get("http://localhost:5000/magangs");
        setMagangs(response.data);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveMagang = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("program", program);
        formData.append("title", title);
        formData.append("urlProgram", urlProgram);
        formData.append("urlSyllabus", urlSyllabus);
        formData.append("starDate", starDate);
        formData.append("endDate", endDate);
        formData.append("descRegis", descRegis);
        formData.append("descBenefit", descBenefit);
        formData.append("descRec", descRec);
        try {
            if (isEdit) {
                await axios.patch(`http://localhost:5000/magangs/${magangId}`, formData, {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                });
            } else {
                await axios.post("http://localhost:5000/magangs", formData, {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                });
            }
            modalRef.current.close();
            getMagangs();
            resetForm();
        } catch (error) {
            console.log(error);
        }
    };

    const resetForm = () => {
        setProgram("");
        setTitle("");
        setUrlProgram("");
        setUrlSyllabus("");
        setStarDate("");
        setEndDate("");
        setDescRegis("");
        setDescBenefit("");
        setDescRec("");
        setFile("");
        setPreview("");
        setIsEdit(false);
        setEditId(null);
    };

    const deleteMagang = async (magangId) => {
        try {
            await axios.delete(`http://localhost:5000/magangs/${magangId}`);
            getMagangs();
        } catch (error) {
            console.log(error);
        }
    };

    const editMagang = (magang) => {
        setProgram(magang.program);
        setTitle(magang.title);
        setUrlProgram(magang.url_program);
        setUrlSyllabus(magang.url_syllabus);
        setStarDate(magang.star_date);
        setEndDate(magang.end_date);
        setDescRegis(magang.desc_regis);
        setDescBenefit(magang.desc_benefit);
        setDescRec(magang.desc_rec);
        setPreview(magang.url);
        setIsEdit(true);
        setEditId(magang.id);
        modalRef.current.showModal();
    };

    const indexOfLastMagang = currentPage * magangsPerPage;
    const indexOfFirstMagang = indexOfLastMagang - magangsPerPage;
    const currentMagangs = Magangs.slice(indexOfFirstMagang, indexOfLastMagang);

    const totalPages = Math.ceil(Magangs.length / magangsPerPage);

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
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Program</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Title</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Url Program</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Url Syllabus</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Star Date</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">End Date</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Desc Regis</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Desc Benefit</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Desc Rec</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">photo</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-xs border border-gray-200">
                                {currentMagangs.map((magang) => (
                                    <tr key={magang.id}>
                                        <td className="p-2 border border-gray-200 text-center">{magang.program}</td>
                                        <td className="p-2 border border-gray-200 text-center">{magang.title}</td>
                                        <td className="p-2 border border-gray-200 w-[40%] text-justify truncat">{magang.urlProgram}</td>
                                        <td className="p-2 border border-gray-200 w-[40%] text-justify truncat">{magang.urlSyllabus}</td>
                                        <td className="p-2 border border-gray-200 w-[40%] text-justify truncat">{magang.starDate}</td>
                                        <td className="p-2 border border-gray-200 w-[40%] text-justify truncat">{magang.endDate}</td>
                                        <td className="p-2 border border-gray-200 w-[40%] text-justify truncat">{magang.descRegis}</td>
                                        <td className="p-2 border border-gray-200 w-[40%] text-justify truncat">{magang.descBenefit}</td>
                                        <td className="p-2 border border-gray-200 w-[40%] text-justify truncat">{magang.descRec}</td>
                                        <td className="p-2 border border-gray-200 text-center">
                                            <div className="flex justify-center items-center">
                                                <img src={magang.url} alt="MSIB" className="h-10 object-cover" />
                                            </div>
                                        </td>
                                        <td className="p-2 border border-gray-200 text-center text-sm">
                                            <button onClick={() => editMagang(magang)} className="text-green-500 hover:text-green-700 text-lg">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button onClick={() => deleteMagang(magang.id)} className="text-red-500 hover:text-red-700 text-lg ml-2">
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
                            <form className='mt-5' onSubmit={saveMagang}>
                                <input type="text" name="program" placeholder="Program" className="input input-md mb-3 input-bordered w-full"
                                    value={program} onChange={(e) => setProgram(e.target.value)} />
                                <input type="text" name="title" placeholder="Title" className="input input-md mb-3 input-bordered w-full"
                                    value={title} onChange={(e) => setTitle(e.target.value)} />
                                <input type="text" name="urlProgram" placeholder="UrlProgram" className="input input-md mb-3 input-bordered w-full"
                                    value={urlProgram} onChange={(e) => setUrlProgram(e.target.value)} />
                                <input type="text" name="urlSyllabus" placeholder="UrlSyllabus" className="input input-md mb-3 input-bordered w-full"
                                    value={urlSyllabus} onChange={(e) => setUrlSyllabus(e.target.value)} />
                                <input type="date" name="starDate" placeholder="StarDate" className="input input-md mb-3 input-bordered w-full"
                                    value={starDate} onChange={(e) => setStarDate(e.target.value)} />
                                <input type="date" name="endDate" placeholder="EndDate" className="input input-md mb-3 input-bordered w-full"
                                    value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                <textarea name="descRegis" className="textarea textarea-sm textarea-bordered w-full mb-3"
                                    placeholder="DescRegis" value={descRegis || ''} onChange={(e) => setDescRegis(e.target.value)}></textarea>
                                <textarea name="descBenefit" className="textarea textarea-sm textarea-bordered w-full mb-3"
                                    placeholder="DescBenefit" value={descBenefit || ''} onChange={(e) => setDescBenefit(e.target.value)}></textarea>
                                <textarea name="descRec" className="textarea textarea-sm textarea-bordered w-full mb-3"
                                    placeholder="DescRec" value={descRec || ''} onChange={(e) => setDescRec(e.target.value)}></textarea>
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

export default MagangView;
