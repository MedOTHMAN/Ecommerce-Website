import express from "express";
import data from './data';
import config from "./config.js";
import mongoose from 'mongoose';
import userRoute from "./userRoute"
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch((error) => console.log(error.reason));


app.use("/api/users", userRoute);

app.get('/api/products', (req,res) =>{
    res.send(data.products);
})
app.get('/api/products/:id', (req,res) =>{
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if(product)
        res.send(product);
    else
    res.status(404).send({msg: "Product Not Found"})
});

app.listen(5000,(err) =>{
    if(err) throw(err)
    else console.log("server started at http://localhost:5000")
})