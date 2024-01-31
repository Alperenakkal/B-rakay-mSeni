let mongoose=require('mongoose');
let dbUri='mongodb://127.0.0.1:27017/birakayim'

mongoose.connect(dbUri);
mongoose.connection.on("connected",function(){
    console.log(dbUri+ (":Connection Success"));
})
mongoose.connection.on("error",function(){
    console.log("Hata Oluştu");
})
mongoose.connection.on("disconnet",function(){
    console.log("Bağlantı Kesildi");
})
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Bağlanti Kapatildi");
    process.exit(0);
})
require("./advert")
