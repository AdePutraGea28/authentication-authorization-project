import express from "express";
import {Registration} from "../controllers/user/UserRegister.js";
import {Login} from "../controllers/user/UserLogin.js";
import { Logout } from "../controllers/user/UserLogout.js";
import { VerifyToken } from "../middleware/VerifyToken.js";
import {GetAllUser} from "../controllers/user/user-crud/GetAllUser.js";
import {DeleteAllToken} from "../controllers/token/DeleteAllToken.js";
import { RefreshToken } from "../controllers/token/RefreshToken.js";


const router = express.Router();


router.get("/getList", VerifyToken, GetAllUser);

router.post("/register", Registration);

router.post("/login", Login);

router.put("/logout", Logout);

router.delete("/deleteAllToken", DeleteAllToken);

router.get("/refreshToken", RefreshToken);

export default router;