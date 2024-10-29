import express from "express"
import User from "./models/user.model"

import cookieparser from "cookie-parser"

const app= express();

app.use(express.json ());
app.use(express.urlencoded ({extended: true}));

app.get('/', (req,res) => {
    res.send("hello there this is working");
})

app.post('/create', async (req, res) => {
    let{ username , email , password} = req.body;

    let createdUser = await Usermodel.create({
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
        console.log("Server is listening on port", PORT);
    }
});
