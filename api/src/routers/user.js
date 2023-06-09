import express from "express";
import {
    changeEmail,
    changePassword,
    inviteUser,
    verify,
    Me,
    verifyInvite,
} from "../controllers/user.js";
import { checkAuth } from "../middleware/authUser.js";

const router = express.Router();

router.get("/verify-email", verify);
router.get("/me", checkAuth, Me);
router.post("/verify-invite", verifyInvite);
router.post("/invite-user", checkAuth, inviteUser);
router.put("/password", checkAuth, changePassword);
router.put("/email", checkAuth, changeEmail);

export default router;
