const { Router } = require("express");
const { User } = require("../models/User");
const app = express()
const port = 3000
const { userRouter } = require("./routes");


userRouter.get("/users", async (req, res) => {
    res.send(await User.findAll())
})

userRouter.get("/users/:userId", async (req, res) => {
    res.send(await User.findOne())
})

userRouter.get("/users/:userId/shows", async (req, res) => {
    res.send(await User(req.params.userId))
})

userRouter.put("/users/:userId/shows", (req, res) => {
    res.send()
})





app.listen(port, () => {
    console.log(`Listening on prot ${port}`)
})




module.exports = {app, userRouter };