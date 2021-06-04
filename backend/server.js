import express from "express";
import data from './data';
import config from "./config.js";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";

dotenv.config();

const app = express();
app.use(bodyParser.json());
const mongodbUrl = config.MONGODB_URL;
mongoose.connect('mongodb+srv://ecommerce:hello@cluster0.dsdiy.mongodb.net/ecommerce?retryWrites=true&w=majority'
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
}).catch((error) => console.log(error.reason));


app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// app.get('/api/products', (req,res) =>{
//     res.send(data.products);
// })
// app.get('/api/products/:id', (req,res) =>{
//     const productId = req.params.id;
//     const product = data.products.find(x => x._id === productId);
//     if(product)
//         res.send(product);
//     else
//     res.status(404).send({msg: "Product Not Found"})
// });

app.listen(5000,(err) =>{
    if(err) throw(err)
    else console.log("server started at http://localhost:5000")
})