let express= require('express');
let router=express.Router();
let ctrlAdvert= require('../controller/advertController');
router
.route("/advert")
.get(ctrlAdvert.listAllAdvert)
.post(ctrlAdvert.addAdvert)
router
.route("/advert/:id")
.get(ctrlAdvert.getAdvert)
module.exports=router;