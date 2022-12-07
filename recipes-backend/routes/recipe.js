// const express = require('express');
// const router = express.Router();
// const recipeSchema = require('../models/recipe');

// //create recipe
// router.post('/recipe',(req,res)=>{
//     const recipe = recipeSchema(req.body);
//     recipe
//         .save()
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message: error}));
// });


// //get all recipe
// router.get('/recipe',(req,res)=>{
//     recipeSchema
//         .find()
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message: error}));
// });

// //get specific recipe
// router.get('/recipe/:id',(req,res)=>{
//     const {id} = req.params;
//     recipeSchema
//         .findById(id)
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message: error}));
// });

// //update an specific recipe
// router.put('/recipe/:id',(req,res)=>{
//     const {id} = req.params;
//     const { title, steps, ingredients , img } = req.body;
//     recipeSchema
//         .updateOne({ _id: id },{ $set: {title, steps, ingredients, img } })
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message: error}));
// });

// //delete an specific recipe
// router.delete('/recipe/:id',(req,res)=>{
//     const {id} = req.params;
//     recipeSchema
//         .deleteOne({ _id: id })
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message: error}));
// });

// module.exports = [router, listRecipe]
