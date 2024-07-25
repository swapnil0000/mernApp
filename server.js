const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const workoutRoutes=require('./routes/workouts')

dotenv.config();
const PORT = process.env.PORT;
const mongoURL = process.env.MONGO_URL;


app.use((req, res, next)=>{
    console.log("Path:",req.path,res.header)
    next();
})

app.use(express.json());



app.use('/api/workouts',workoutRoutes);



const connectDB = async () => {
    try {
        mongoose.connect(mongoURL);
        app.listen(PORT, () => {
            console.log(`listening to the port no ${PORT}`);
        })
    } catch (err) {
        console.log("Database not connected:", err);
    }
}
connectDB();


