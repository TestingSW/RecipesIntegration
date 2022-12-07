// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// require('dotenv').config();
// const userRoute = require('../routes/recipe');
// const PORT = process.env.PORT || 9000;

// //middleware
// app.use(express.json());
// app.use('/api', userRoute);

// //routes
// app.post('/',(req, res)=>{
//     //res.send('Hello world!')
// });

// console.log(process.env.MONGODB_URI)
// //mongodb conn
// mongoose.connect("mongodb+srv://recipesAdmin:recipes@recipesclust.kxz84eq.mongodb.net/?retryWrites=true&w=majority")
// .then(()=>console.log('connected to MongoDB Atlas'))
// .catch((error)=>console.log(error));

// app.listen(PORT, ()=>console.log(`server is listen on port ${PORT}`));


const dotenv = require('dotenv').config()
const mongoose = require("mongoose")

const app = require("../server")
const mongo = require('../services/mongo')
mongo.mongoConnect()
mongoose.connection.on('connected', function () {  
    console.log('Mongoose connection open');
}); 
  
// If the connection throws an error
mongoose.connection.on('error',function (err) {  
    console.log('Mongoose connection error: ' + err);
}); 

