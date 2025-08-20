import express from 'express'
import {addUser, loginUser, logout, UploadImage} from '../controllers/authControllers.js';
import auth from '../middlewares/auth.js';
const router=express.Router();
//register-->api/auth/register
router.post('/register', addUser)
router.post('/login', loginUser)
router.post('/logout', logout)
//api/auth/upload
router.put('/upload',auth, UploadImage)
// router.put('/upload', upload.single('image'), UploadImage)
export default router

