const { mongoose } = require("../mongoose")

const eventSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true
    },
    date : {
        type: Date,
        required: true
    },
    location:{
        type:String,
        default:null
    },
    description:{
        type: String,
        default:null
    }

})

const eventModel = mongoose.model("Event",eventSchema)

module.exports = {eventModel};