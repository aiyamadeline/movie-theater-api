const { Router } = require("express")
const { Show } = require("../models/Show");
const app = express()
const port = 3000
const { showRouter } = require("./routes");


showRouter.get("/shows", async (req, res) => {
    res.send(await Show.findAll())
})

showRouter.get("/shows/:showId", async (req, res) => {
    res.send(await Show.findOne())
})

showRouter.get("/shows/:genres/genre", async (req, res) => {
    res.send(await Show(req.params.genre))
})

showRouter.put("/shows/:showId/watched", (req, res) => {
    res.send(Show)
})

showRouter.put("/shows/:showId/update", (req, res) => {
    res.send(req.body.status)
})

showRouter.delete("/shows/", (req, res) => {

})



app.listen(port, () => {
    console.log(`Listening on prot ${port}`)
})




module.exports = {app, showRouter};