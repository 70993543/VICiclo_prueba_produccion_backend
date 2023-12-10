const mongoose = require('mongoose');
require('dotenv').config({path: '.env'})

mongoose.set('strictQuery', false)

const cenectarDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO)
        console.log("BD connected")
    }catch (error){
        console.log(error);
        process.exit(1); //Detenemos la app
    }
}
module.exports = cenectarDB;
