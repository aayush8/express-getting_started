const express = require('express')
const router = express.Router()
const posts = require('./data')

router.get("/", (req, res) => {
    res.json(posts);
    //this is send 100 hardcoded posts data as json
})

router.get("/:id", (req, res) => {
   const post = posts.find(post => post.id == req.params.id)
    res.json(post);
})

module.exports = router