var express = require("express");
var app = express();

app.get("/say_hello", (req, res, next) => {
 res.json(["hello " + req.query.name]);
});

app.get("/", (req, res, next) =>{
var o = {} // empty Object
var key = 'Orientation Sensor';
o[key] = []; // empty Array, which you can push() values into


var data = {
    sampleTime: '1450632410296',
    data: '76.36731:3.4651554:0.5665419'
};
var data2 = {
    sampleTime: '1450632410296',
    data: '78.15431:0.5247617:-0.20050584'
};
o[key].push(data);
o[key].push(data2);
 res.json(o)
})
app.listen(3000, () => {
 console.log("you can visit: http://127.0.0.1:3000/say_hello?name=omri");
 console.log("Server running on port 3000");
});
