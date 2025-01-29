import express from "express";
import {
    getMagangs,
    getMagangById,
    saveMagang,
    updateMagang,
    deleteMagang
} from "../controllers/MagangController.js";
 
const router = express.Router();
 
router.get('/Magangs', getMagangs);
router.get('/Magangs/:id', getMagangById);
router.post('/Magangs', saveMagang);
router.patch('/Magangs/:id', updateMagang);
router.delete('/Magangs/:id', deleteMagang);
 
export default router;