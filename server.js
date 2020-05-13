const express = require('express')
const app = express()
// const path = require('path')
// app.use(express.static(path.join(__dirname, "public")))
const logger = require("./logger")
const exphbs = require('express-handlebars')

// //handling routes
app.get("/", (req, res) => {
    res.render("index", {
        name: "Aayuhs"
    })
})

//logging when request made using middleware
app.use(logger)

//handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//body-parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//handling routes using middleware
app.use("/api/posts", require('./api/posts/router'))

//starting server
app.listen(5000, () => {
    console.log("Running on port 5k ....")
})