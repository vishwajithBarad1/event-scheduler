const {mongoose} = require("../mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required:true
    },
    events : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Event"
    }]
})

const hashPassword = async function(next){
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password,salt)
    this.password = hash;
    next()
}

userSchema.pre("save",hashPassword)

const userModel = mongoose.model("User",userSchema);

module.exports = {userModel}