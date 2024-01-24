const express = require("express");
const router = express.Router();
const { signUp, login, getAll, updateUser, logout } = require("../controllers/onboardingcontroller");
const validation = require("../validator/vallidation");
const uploader = require("../multers/multer");
const authenticate = require("../authorization/authentication");
const {createDeposite} = require("../controllers/depositecontroller");

router.post("/user/sign-up",uploader.single("profilePicture"),validation,signUp);
router.post("/user/login",login);
router.get("/user/get-all",getAll);
router.put("/user/update/:id",authenticate,updateUser);
router.post("/user/logout",logout);
router.post("/user/deposit",authenticate,createDeposite);

module.exports = router