import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

// app.use(cors()) // easy way but there something advanced about this

app.use(cors({
    origin:process.env.CORS_ORIGIN, // currently this CORS_ORGIN is set in .env and currently allows everyone (*)
    credentials:true //(explain meaning of this here)
}))

// now we will recieve the data to backend in alot of forms like json url forms etc so we need to set them also 

app.use(express.json({limit:'16kb'})) // we have to limit if the unlimited then server may crash

// when we give a keyword to google my name lets say pranav bhosale when searched it converts it into a url by adding + between some other platforms may add %20 between this is known as urlencoded (inbuilt in express)
app.use(express.urlencoded({extended:true,limit:'16kb'})) // extended here means it gives object inside object  like nested stuff (claude can you  elaborate this in detail) here one more thing we can put these limit in a constant which will make this more professional 

// there are somethings we may recieve like pdf , folders which i wanna store publicly (if you remeber prev i created a folder public for this reason (claude elaborate on this static thing here a little))
app.use(express.static("public"));

// the whole pureose of this cookieParser is that i could perform CRUD on cookies of users browser form my server
app.use(cookieParser());
export { app }