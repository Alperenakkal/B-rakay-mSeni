let mongoose= require('mongoose');
let Advert= mongoose.model("advert");
const createRespone= function(res,status,content){
    res.status(status).json(content);
}
const addAdvert =async function(req,res){
    try{
        await Advert.create({
            ...req.body,
            hours:[
                {
                days: req.body.day,
                open: req.body.open,
                close:req.body.close,
                }],
            
        }).then(function(response){
            createRespone(res,201,response);
        });
    }
    catch(e){
        createRespone(res,400,{status:"Ekleme Hatalı"+ e});
    }
}
const getAdvert=async function(req,res){
    try{
        await Advert.findById(req.params.advertid)
        .exec()
        .then(function(advert){
            createRespone(res,200,advert)
        })
    }
    catch(e){
        createRespone(res,400,{status:"Hatali Getirme"});
    }
};
const listAllAdvert=async function(req,res){
    try{
        const result = await Advert.find({});
        const adverts = result.map((advert) => {
            return{
                name: advert.name,
                startLocation : advert.startLocation,
                endLocation:advert.endLocation,
                days:advert.hours[0],
                open:advert.hours[1],
                close:advert.hours[2],


            }
        });
        createRespone(res,200,adverts);
    }
    catch(e){
        createRespone(res,404,{status:"Error"})
    }
}
module.exports={
    listAllAdvert,
    addAdvert,
    getAdvert,
};






