const mongoose = require('mongoose');

module.exports=()=>{
    
    try{
        mongoose.connect("mongodb://localhost:27017/newDB", {useNewUrlParser: true});
        console.log("Connected to db successfully");
    }catch(error){
        console.log(error);
        console.log("Could not connect to database!!")
    }
}