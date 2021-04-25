import { Router } from "express";
import { getAddMailCtrl } from "../controllers/mail/getAddMail.controller.js";
import { insertMail } from "../controllers/mail/insertMailCtrl.controller.js";

const router = Router();

router.get("/set-correo", getAddMailCtrl);
router.post("/set-correo", insertMail);

export { router as MailRouter };
