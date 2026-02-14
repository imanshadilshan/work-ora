import express from 'express';
import { isAuth } from '../middleware/auth.js';
import { addSkillToUser, deleteSkillFromUser, getUserProfile, myProfile, updateProfilePicture, updateResume, updateUserProfile } from '../controllers/user.js';
import uploadFile from '../middleware/multer.js';

const router = express.Router();

router.get("/me", isAuth, myProfile);
router.get("/:userId", isAuth, getUserProfile);
router.put("/update/profile", isAuth, updateUserProfile);
router.put("/update/profile-pic", isAuth, uploadFile, updateProfilePicture);
router.put("/update/resume", isAuth, uploadFile, updateResume);
router.post("/skill/add", isAuth, addSkillToUser);
router.delete("/skill/delete", isAuth, deleteSkillFromUser);




export default router;