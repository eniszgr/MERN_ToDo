const mongoose = require('mongoose');

const connectDB= async ()=>{
   try{
        //connect to db 
        await mongoose.connect('mongodb://localhost:27017/textdb');   // if doesnt exist, it will create  a new collection
   }
   catch(err){
        console.error('Error connecting to MongoDB:', err);

   }
}
module.exports = connectDB;