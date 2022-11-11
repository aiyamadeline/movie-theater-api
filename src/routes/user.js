const { Router } = require("express");
const { User } = require("../models/User");
const  userRouter  = Router()


userRouter.get("/users", async (req, res) => {
    res.send(await User.findAll())
})

userRouter.get("/users/:userId", async (req, res) => {
    res.send(await User.findOne())
})

userRouter.get("/users/:userId/shows", async (req, res) => {
    
    res.send(await User())
})

userRouter.put("/users/:userId/shows", (req, res) => {
    res.send()
})






module.exports = { userRouter };