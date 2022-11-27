//jshint esversion:6 
//!/* ---------------------------- include pakage --------------------------- */
const dotenv = require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
const cors = require("cors");
const router = require('express').Router();
const axios = require('axios');
const Item = require("./Model/Item");


const port = process.env.PORT || 8800;

//!/* -------------------------------- mongoose -------------------------------- */
mongoose.connect(process.env.MONGO_URL).then(() => console.log("connected to mongodb")).catch((err) => console.log(err.message));

//!/* ------------------------------- middleware ------------------------------- */
app.use(express.json())
app.use(cors());

//!/* ---------------------------------- Route --------------------------------- */
function update(result,itemName){
	console.log(typeof(result.data),"--------------------------------hits");
	let updatedResult = {
		label: itemName,
		subItem: result.data.hits.map((i) => {
			return (
				{
					item_name: i.fields.item_name,
					nf_calories: i.fields.nf_calories
				}
			)
		})
	}
	return updatedResult;
}
app.get("/:itemName", async (req, res) => {
	console.log("i am here");
	try {
		let result;
		result = await Item.find({ "label": req.params.itemName });
		console.log(result);
		let updatedResult
		if (result.length == 0) {
			console.log("Calling API")
			
			do{
				result = await axios.get(`https://api.nutritionix.com/v1_1/search/${req.params.itemName}?results=0:5&fields=item_name,brand_name,item_id,nf_calories&appId=${process.env.APPID}&appKey=${process.env.APPKEY}`);
				console.log("here",typeof(result.data.hits));
			}while(typeof(result.data.hits)!== "object" );

			console.log(result,"----------------------------------------fetched");
			updatedResult = await update(result,req.params.itemName);
			const newResult = await new Item(updatedResult);
			console.log()
			newResult.save();
		}
		else
		  {
			console.log("Found in Database")
			updatedResult = result;
			}
		res.status(200).json(updatedResult);
	}
	catch (error) {
		console.log("chudd");
		res.status(400).json(error.message);
	}
})

//!/* ---------------------------- listening to port --------------------------- */
app.listen(port, () => {
	console.log("server running on port " + port);
});