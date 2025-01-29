import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Sidebar from "../../components/header/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './TeamView.css';

const TeamView = () => {
    const [Teams, setTeams] = useState([]);
    const modalRef = useRef(null);
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [desription, setDesription] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [teamId, setEditId] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const teamsPerPage = 6;

    useEffect(() => {
        getTeams();
    }, []);

    const getTeams = async () => {
        const response = await axios.get("http://localhost:5000/teams");
        setTeams(response.data);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveTeam = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("position", position);
        formData.append("desription", desription);
        try {
            if (isEdit) {
                await axios.patch(`http://localhost:5000/teams/${teamId}`, formData, {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                });
            } else {
                await axios.post("http://localhost:5000/teams", formData, {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                });
            }
            modalRef.current.close();
            getTeams();
            resetForm();
        } catch (error) {
            console.log(error);
        }
    };

    const resetForm = () => {
        setName("");
        setPosition("");
        setDesription("");
        setFile("");
        setPreview("");
        setIsEdit(false);
        setEditId(null);
    };

    const deleteTeam = async (teamId) => {
        try {
            await axios.delete(`http://localhost:5000/teams/${teamId}`);
            getTeams();
        } catch (error) {
            console.log(error);
        }
    };

    const editTeam = (team) => {
        setName(team.name);
        setPosition(team.position);
        setDesription(team.desription);
        setPreview(team.url);
        setIsEdit(true);
        setEditId(team.id);
        modalRef.current.showModal();
    };

    const indexOfLastTeam = currentPage * teamsPerPage;
    const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
    const currentTeams = Teams.slice(indexOfFirstTeam, indexOfLastTeam);

    const totalPages = Math.ceil(Teams.length / teamsPerPage);

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
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">name</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">position</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">desription</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">photo</th>
                                    <th className="p-2 text-center text-xs border border-gray-200 font-medium bg-gray-200 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-xs border border-gray-200">
                                {currentTeams.map((team) => (
                                    <tr key={team.id}>
                                        <td className="p-2 border border-gray-200 text-center">{team.name}</td>
                                        <td className="p-2 border border-gray-200 text-center">{team.position}</td>
                                        <td className="p-2 border border-gray-200 w-[40%] text-justify truncat">{team.desription}</td>
                                        <td className="p-2 border border-gray-200 text-center">
                                            <div className="flex justify-center items-center">
                                                <img src={team.url} alt="team" className="h-10 object-cover" />
                                            </div>
                                        </td>
                                        <td className="p-2 border border-gray-200 text-center text-sm">
                                            <button onClick={() => editTeam(team)} className="text-green-500 hover:text-green-700 text-lg">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button onClick={() => deleteTeam(team.id)} className="text-red-500 hover:text-red-700 text-lg ml-2">
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
                            <form className='mt-5' onSubmit={saveTeam}>
                                <input type="text" name="name" placeholder="Name" className="input input-md mb-3 input-bordered w-full"
                                    value={name} onChange={(e) => setName(e.target.value)} />
                                <input type="text" name="position" placeholder="Position" className="input input-md mb-3 input-bordered w-full"
                                    value={position} onChange={(e) => setPosition(e.target.value)} />
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

export default TeamView;
