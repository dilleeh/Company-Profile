import Magang from "../models/MagangModels.js";
import path from "path";
import fs from "fs";

export const getMagangs = async(req, res)=>{
    try {
        const response = await Magang.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMagangById = async(req, res)=>{
    try {
        const response = await Magang.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveMagang = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const { program, title, urlProgram, urlSyllabus, starDate, endDate, descRegis, descBenefit, descRec } = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Magang.create({ program, title, image: fileName, urlProgram, urlSyllabus, starDate, endDate, descRegis, descBenefit, descRec, image: fileName, url });
            res.status(201).json({ msg: "Magang Created Successfully" });
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const updateMagang = async (req, res) => {
    const { id } = req.params;
    const { program, title, urlProgram, urlSyllabus, starDate, endDate, descRegis, descBenefit, descRec } = req.body;
    let fileName;

    const magang = await Magang.findByPk(id);
    if (!magang) return res.status(404).json({ msg: "No Data Found" });

    if (req.files !== null) {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
        if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

        const filepath = `./public/images/${magang.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    } else {
        fileName = magang.image;
    }

    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    try {
        await Magang.update({ program, title, image: fileName, url, urlProgram, urlSyllabus, starDate, endDate, descRegis, descBenefit, descRec}, {
            where: { id: id }
        });
        res.status(200).json({ msg: "Magang Updated Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export const deleteMagang = async(req, res)=>{
    const magang = await Magang.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!magang) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${magang.image}`;
        fs.unlinkSync(filepath);
        await Magang.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}