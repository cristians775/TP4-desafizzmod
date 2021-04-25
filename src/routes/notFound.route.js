import { Router } from "express";

const router = Router();

router.get("/*", (req, res) => {
  res.send("<h1>No hay nada</h1>");
});

export { router as NotFoundRouter };
