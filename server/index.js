//jshint esversion:6 
//!/* ---------------------------- include pakage --------------------------- */
const dotenv=require('dotenv').config();
const express=require("express");
const app=express();
const mongoose=require('mongoose');
const morgan = require("morgan");
const cors = require("cors");

const port=process.env.PORT||8800;

//!/* -------------------------------- mongoose -------------------------------- */
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to mongodb")).catch((err)=>console.log(err.message));

//!/* ------------------------------- middleware ------------------------------- */
app.use(express.json())
app.use(cors());

//!/* ---------------------------------- Route --------------------------------- */


//!/* ---------------------------- listening to port --------------------------- */
app.listen(port , ()=>{
	console.log("server running on port "+port );
});