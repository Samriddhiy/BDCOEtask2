import connectDB from "./db/index.js"
import dotenv from "dotenv"
import express from "express"
import {User} from "./models/user.model.js"

import cookieParser from "cookie-parser"
const app= express();
dotenv.config({
    path:"../.env"})
app.use(express.json ());
app.use(express.urlencoded ({extended: true}));

app.get('/', (req,res) => {
    res.send("hello there this is working");
})

app.post('/create', async (req, res) => {
    let{ username , email , password} = req.body;

    let createdUser = await User.create({
        username, 
        email, 
        password
    })

    res.send(createdUser);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) =>{
    if(err){
        console.log("error in server", err);
    }
    else{
        connectDB()
        console.log("Server is listening on port", PORT); 
    }
});
