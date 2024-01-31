let mongoose =require('mongoose')
const hour =new mongoose.Schema({
    days:String,
    open:String,
    close:String
})
const advert =new mongoose.Schema({
    name:{ type:String,required:true},
    startLocation:{type:String,required:true},
    endLocation:{type:String,required:true},
    hours:[hour]
})
mongoose.model("advert",advert,"adverts")