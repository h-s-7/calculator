const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
	res.sendFile(__dirname+"/index.html");
});
app.get("/bmicalculator",function(req,res){
	res.sendFile(__dirname+"/bmiCalculator.HTML");
});
app.post("/",function(req,res){
	var num1 = req.body.num1;
	var num2 = req.body.num2;
	var result = Number(num1)+Number(num2);

	res.send("the result is "+ result);
});
app.post("/bmicalculator",function(req,res){
	var weight = parseFloat(req.body.weight);
	var height = parseFloat(req.body.height);
	var bmi = weight/(height*height);
	res.send("the bmi is "+bmi);
})
app.listen(3000,function(){
	console.log("server started at port 3000");
});