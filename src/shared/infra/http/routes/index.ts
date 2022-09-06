import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { notesRoutes } from "./notes.routes";
import { passwordRoutes } from "./password.routes";
import { usersRoutes } from "./users.routes";

export const router = Router();

router.use(authenticateRoutes);
router.use("/password", passwordRoutes);
router.use("/users", usersRoutes);

router.use("/notes", notesRoutes);
