const express= require('express')
const app= express();
const cors= require('cors')
const PORT= 3000
const dotenv= require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const Movie= require('./routes/Movie')

app.use(cors());

app.use('/api',Movie)
mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log('connected to mongodb')).catch((err)=>console.log(err))


app.listen(PORT, ()=> console.log(`App is listening to the port ${PORT}`))