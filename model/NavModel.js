const mongoose=require("mongoose")

const NavModel=mongoose.model("navs",{
    xs:{type:Number},
    path:{type:String},
    label:{type:String},
    isactive:{type:Boolean}
});
module.exports=NavModel;