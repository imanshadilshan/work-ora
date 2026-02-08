import express from "express";
import cloudinary from "cloudinary";
import e from "express";

const router = express.Router();

router.post("/upload", async (req, res) => {
  try {
    const { buffer, public_id } = req.body;

    if (public_id) {
      await cloudinary.v2.uploader.destroy(public_id);
    }

    const result = await cloudinary.v2.uploader.upload(buffer);

    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
