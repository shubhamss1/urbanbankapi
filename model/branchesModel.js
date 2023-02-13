const mongoose=require("mongoose")

const branchesModel=mongoose.model("branches",{
    name:{type:String},
    branchcode:{type:Number},
    city:{type:String},
    isactive:{type:Boolean},
})
module.exports=branchesModel;