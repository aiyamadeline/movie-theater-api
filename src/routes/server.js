const { Router } = require("express")
const app = express()
const port = 3000
const { userRouter, showRouter } = require("./routes");

userRouter.get("/users", (req,res) => {

    

})






app.listen(port, () => {
    console.log(`Listening on prot ${port}`)
})




module.exports = {app, userRouter, showRouter};