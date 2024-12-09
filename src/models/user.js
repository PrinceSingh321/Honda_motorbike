import { Schema,model,models } from "mongoose";
import { type } from "os";

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

export default models.User || model('User', UserSchema)