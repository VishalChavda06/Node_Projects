const {Router} = require("express");
const { signup, login, getProfile } = require("../controllers/UserController");
const { authenticateToken } = require("../middleware/auth");
const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/profile", authenticateToken, getProfile);

module.exports = userRouter;
