import mongoose, {Schema} from "mongoose";
const userSchema= new Schema ({
    username:{
        type:String,
        required: true,
        unique: true,
        lowercase : true,
        index: true
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase : true
    },
    fullname:{
        type:String,
        required: true,
        lowercase : true,
        index: true
    },
    fullname:{
        type:String,
        required: true,
        index: true
    },
    password:{
        type:String,
        required: [true , 'Passord is required']
    },
    refreshToken:{
        type:String,
    }
}, 
{
    timestamps: true
}
)

export const User= mongoose.model("User", userSchema)  