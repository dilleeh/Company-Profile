import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ jobType, title, description, responsibilities, qualification, img, onClose }) => (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
        <div className="w-[1103px] h-[674px] justify-start items-start inline-flex">
            <div className="w-[446px] h-[674px] px-[45px] py-[47px] rounded-tl-[50px] rounded-bl-[50px] flex-col justify-end items-start gap-2.5 inline-flex"
                style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-[446px] h-[674px] bg-cover bg-center"></div>
                <div className="flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-[111px] h-[17px] text-white text-base font-normal font-['Montserrat'] leading-normal">{jobType}</div>
                    <div className="text-white text-4xl font-semibold font-['Montserrat'] leading-[44px]">{title}</div>
                </div>
            </div>
            <div className="w-[657px] h-[674px] pl-[31px] pr-[27px] pt-[15px] pb-10 bg-black rounded-tr-[30px] rounded-br-[30px] flex-col justify-start items-end gap-3 inline-flex">
                <div className="w-[26px] justify-end items-start inline-flex">
                    <FaTimes onClick={onClose} className="text-white cursor-pointer" />
                </div>
                <div className="self-stretch h-[111px] flex-col justify-start items-start flex">
                    <div className="self-stretch text-neutral-400 text-[28px] font-semibold font-['Montserrat'] leading-9">Description</div>
                    <div className="self-stretch text-neutral-400 text-[13px] font-normal font-['Montserrat'] leading-[25px]">{description}</div>
                </div>
                <div className="self-stretch h-[186px] flex-col justify-start items-start flex">
                    <div className="self-stretch text-neutral-400 text-[28px] font-semibold font-['Montserrat'] leading-9">Responsibilities</div>
                    <div className="self-stretch text-neutral-400 text-[13px] font-normal font-['Montserrat'] leading-[25px]">{responsibilities}</div>
                </div>
                <div className="self-stretch h-[198px] flex-col justify-start items-start flex">
                    <div className="self-stretch text-neutral-400 text-[28px] font-semibold font-['Montserrat'] leading-9">Qualification</div>
                    <div className="self-stretch text-neutral-400 text-[13px] font-normal font-['Montserrat'] leading-[25px]">{qualification}</div>
                </div>
                <div className="w-[599px] h-[50px] relative">
                    <div className="w-[599px] h-[50px] p-2.5 left-0 top-0 absolute rounded-[10px] border border-black justify-center items-center gap-2.5 inline-flex">
                        <div className="text-xl font-medium font-['Poppins']">Apply Now</div>
                    </div>
                    <div className="w-[599px] h-[50px] p-2.5 left-0 top-0 absolute bg-gradient-to-r from-teal-400 to-violet-600 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-xl font-medium font-['Poppins']">Apply Now</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute inset-0" onClick={onClose}></div>
    </div>
);

Modal.propTypes = {
    jobType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    responsibilities: PropTypes.string.isRequired,
    qualification: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
