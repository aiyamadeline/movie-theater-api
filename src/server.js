const  express  = require("express")
const app = express()
const port = 3000
const { userRouter } = require("./routes/user");
const { showRouter } = require("./routes/show")
const db = require("./db/db");
const seed = require("./seed");


app.use(express.json())

app.use("/user", userRouter)
app.use("/show", showRouter)


app.get("/", (req, res) => {
    res.send("Hello")
})



app.listen(port, async () => {
    await seed()
    console.log(`Listening on port ${port}`)
})





module.exports = app 