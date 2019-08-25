var express = require("express");
var app = express();

app.get("/say_hello", (req, res, next) => {
 res.json(["hello " + req.query.name]);
});

app.get("/", (req, res, next) =>{
var o = {} // empty Object
var key = 'My API';
o[key] = []; // empty Array, which you can push() values into


var data = {
    message: 'hello world'
};
var data2 = {
    foo: 'bar'
};
o[key].push(data);
o[key].push(data2);
 res.json(o)
})
app.listen(3000, () => {
 console.log("you can visit: http://127.0.0.1:3000/say_hello?name=omri");
 console.log("Server running on port 3000");
});
