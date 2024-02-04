//1 set express
const express = require("express");
const bodyParser = require("body-parser");
//1
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 pug
app.set("view engine", "pug");
//3 css & img
app.use("/static", express.static("public"));
// app.use(express.static("public"));

//1
app.get("/", (req, res) => {
  
  res.render("main");
});

app.post("/result", (req, res) => {
  const weightNum = parseFloat(req.body.weight);
  const heightNum = parseFloat(req.body.height);
  const ageNum = parseInt(req.body.age);
  console.log(req.body);

  const BMI = 10000 * (weightNum / Math.pow(heightNum, 2));
  res.render("result", { BMI, weightNum, heightNum, ageNum });
});



app.listen(3000, function(){
    console.log('server is running on 3000')
})

