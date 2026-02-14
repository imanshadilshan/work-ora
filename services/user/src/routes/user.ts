import express from 'express';
import { isAuth } from '../middleware/auth.js';
import { getUserProfile, myProfile, updateProfilePicture, updateUserProfile } from '../controllers/user.js';
import uploadFile from '../middleware/multer.js';

const router = express.Router();

router.get("/me", isAuth, myProfile);
router.get("/:userId", isAuth, getUserProfile);
router.put("/update/profile", isAuth, updateUserProfile);
router.put("/update/profile-pic", isAuth, uploadFile, updateProfilePicture);


export default router;