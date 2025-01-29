import Team from "../models/TeamModels.js";
import path from "path";
import fs from "fs";

export const getTeams = async(req, res)=>{
    try {
        const response = await Team.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTeamById = async(req, res)=>{
    try {
        const response = await Team.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveTeam = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const { name, position, desription } = req.body;
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
            await Team.create({ name, position, desription, image: fileName, url });
            res.status(201).json({ msg: "Team Created Successfully" });
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const updateTeam = async (req, res) => {
    const { id } = req.params;
    const { name, position, desription } = req.body;
    let fileName;

    const team = await Team.findByPk(id);
    if (!team) return res.status(404).json({ msg: "No Data Found" });

    if (req.files !== null) {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
        if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

        const filepath = `./public/images/${team.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    } else {
        fileName = team.image;
    }

    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    try {
        await Team.update({ name, position, desription, image: fileName, url }, {
            where: { id: id }
        });
        res.status(200).json({ msg: "Team Updated Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export const deleteTeam = async(req, res)=>{
    const team = await Team.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!team) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${team.image}`;
        fs.unlinkSync(filepath);
        await Team.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}