const {userModel} = require("../DB/models/userModel");

exports.getUsers = async (req,res)=>{
    try{
        const users =await userModel.find({});
        res.status(200).json({
            success:true,
            response : users
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message : error.message
        })
    }
}

exports.addUsers = async (req,res)=>{
    try{
        const {name, email, password} = req.body;
        const newUser = new userModel({
            name, 
            email, 
            password
        });
        await newUser.save()
        res.status(200).json({
            success : true,
            message : "user got created"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message : error.message
        })
    }
}

exports.updateUsers = async (req,res)=>{
    try{
        const {name, email, password} = req.body;
        await userModel.updateOne({email},{name,password})
        res.status(200).json({
            success : true,
            message:"successfully updated the user"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message : error.message
        })
    }
}