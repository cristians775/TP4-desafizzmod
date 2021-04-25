import { Router } from "express";

const IMG_DEFAULT_PATH = process.cwd() + "/src/views/default-img.png";
const router = Router();

router.get("/default-img", (req, res, next) => {
  res.sendFile(IMG_DEFAULT_PATH);
});

export { router as ImgRouter };
