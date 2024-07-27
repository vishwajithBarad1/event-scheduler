const { eventModel } = require("../DB/models/eventModel")

exports.getEvents = async (req,res)=>{
    try{
        const events = await eventModel.find({})
        res.status(200).json({
            success:true,
            response : events
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.addEvents = async (req,res)=>{
    try{
        const {title, date, location, description} = req.body;
        const newEvent = new eventModel({
            title,
            date,
            location,
            description
        })
        await newEvent.save()
        res.status(200).json({
            success:true,
            message:"Event has been added successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.updateEvents = async (req, res)=>{
    try{
        const {title, date, location, description} = req.body;
        await eventModel.updateOne({date:date.length>10?date : date+"T00:00:00Z"},{title,location,description});
        res.status(200).json({
            success:true,
            message : "event has updated successfully"
        })
    }catch(error){
        res.status(500).json({
            success : true,
            message:error.message
        })
    }
}