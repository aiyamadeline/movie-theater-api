const { Router } = require("express");
const { User } = require("../models/User");
const  userRouter  = Router()




userRouter.get("/", async (req, res) => {
    res.send(await User.findAll())
})

userRouter.get("/:userId", async (req, res) => {
    res.send(await User.findByPk(req.params.userId))
})

userRouter.get("/:inputId/shows", async (req, res) => {
    res.send(await Show.findAll({where:{userid: req.params.inputId}}))
    });
    

userRouter.put("/:userId/shows", (req, res) => {
    res.send()
})

userRouter.delete("/:userId", async (req, res) => {
    const user = await User.findByPk(req.params.userId)
    await user.destroy()
    res.sendStatus(204)
})







module.exports = { userRouter }