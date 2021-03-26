/*
 This file is a sample on how to connect and write to MongoDB Atlas 
 from Node.js using Mongoose.
 */
const mongoose = require('mongoose');
const connectionString = "mongodb+srv://MongoDBAndres:Valtini85@cluster0.ggj8f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // This shouldn't be done like this. URI must be protected.

mongoose.connect(connectionString, {useNewUrlParser:true});

//First model
const Cat = mongoose.model("Cat", {name:String}); // First arg is the model's name and the 2nd arg is an object that defines the structure of the model.

//Interact with the model
const kitty = new Cat({name:"Garfield"});
kitty.save().then(_ => {
    console.log("New cat saved successfully");
    Cat.find().then(console.log);
});