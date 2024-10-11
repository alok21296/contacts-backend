const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config()

connectDb();
const app=express();

const port=process.env.PORT || 5001

// app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"Get all contacts"})
// })


//Whenever we need to accept data from a client to a server we use body parser and middleware app.use in server .js.
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(port ,()=>{
    console.log(`server running on port ${port}`)
});


//ROUTES-To handle all our routes with clear implementation we use a route folder for clean configuration.

//CONTROLLER contain all the request and response logic and help us to connect to the database.

//MIDDLEWARES-

//CONFIG-It contains the connection logic used to connect the express to the mongodb using mongoose.