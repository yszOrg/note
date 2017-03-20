const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("hello world");
})

app.get("/api/:id", function(req, res) {
    res.json({
       ret: 0,
       data: req.params.id
    })
})


app.listen(3000, function() {
  console.log("app listening on port 3000!")
})
