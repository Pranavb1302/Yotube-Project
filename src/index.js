// here we need to import the .env as early as possible in all the files it is available at the start of the program 

// require('dotenv').config({path:"./env"}); this messes up the consistecy of the code so it is being handled as
import dotenv from 'dotenv'


import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on('error',(error)=>{
        console.log("The Express has some error",error);
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGO DB connection has failed !!!", error);
})

