import mongoose from "mongoose";

const user = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken:{
        type:String,
    }
})

const user1 = mongoose.model("User", user);
export default user1;