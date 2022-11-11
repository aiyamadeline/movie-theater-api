const { Router } = require("express")
const { Show } = require("../models/Show");
const  showRouter  = Router();


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
    res.send(req.body)
})

showRouter.put("/shows/:showId/update", (req, res) => {
    res.send(req.body.status)
})

showRouter.delete("/shows/", (req, res) => {

})







module.exports = { showRouter };