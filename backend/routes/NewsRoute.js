import express from "express";
import {
    getNewss,
    getNewsById,
    saveNews,
    updateNews,
    deleteNews
} from "../controllers/NewsController.js";
 
const router = express.Router();
 
router.get('/newss', getNewss);
router.get('/newss/:id', getNewsById);
router.post('/newss', saveNews);
router.patch('/newss/:id', updateNews);
router.delete('/news/:id', deleteNews);
 
export default router;