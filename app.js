//jshint esversion:6

const express = require("express");
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");


const app = express();

// in JS you can append new items to const var and arrays. you cannot just initialise it to something else
const items = ["Buy Food", "Cook Food", "Eat Food"]; // intializing an item var
const workItems = []

// to use ejs use the below line
app.set("view engine","ejs");
// now to use ejs/any view engine.. make a views folder

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // make public folder static to access all files

app.get("/", function(req, res){
    // res.send("Server is up and running");  //res.send(data)  = response to browser by sending 'data' or file by res.sendFile(fileName)
    let day = date.getDate();
    res.render("list", {listTitle:day, newListItems:items}); // rendering items for ejs file

}); 


app.post("/", function(req, res){  // post request
    let item = req.body.newItem;   // any new item that the user enters is added to items array and rendered using get res
    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/"); 
    }
})

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", newListItems:workItems}); // rendering items for ejs file
})

// app.post("/work", function(req, res){  // post request
//     let item = req.body.newItem;   // any new item that the user enters is added to items array and rendered using get res
//     workItems.push(item);
//     res.redirect("/work"); 
// })


app.listen(3000,function(){ 
    console.log("Server running on 3000.");
})
