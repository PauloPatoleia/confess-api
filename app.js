var express = require("express");
var app = express()
var bodyParser = require("body-parser")
var cors = require("cors")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
var postRoutes = require("./routes/posts")

app.use(cors())
app.use('/api/posts', postRoutes)




app.listen(process.env.PORT || 3000, function() {
    console.log('App running on PORT ' + process.env.PORT)
})
