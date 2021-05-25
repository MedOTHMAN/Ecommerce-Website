import express from "express";
import data from './data';

const app = express();
app.get('/api/products', (req,res) =>{
    res.send(data.products);
})

const hello = (req,res,next) => {
    console.log("hello from middleware");
};
app.use(hello);

app.listen(5000,(err) =>{
    if(err) throw(err)
    console.log("server started at http://localhost:5000")
})