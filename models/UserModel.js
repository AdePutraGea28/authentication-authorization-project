import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        // match: /.+\@.+\..+/,
        // unique: true
    },
    password : {
        type : String,
        required : true
    },
    confirmPassword : {
        type : String
    },
    createdAt : {
        type : Date,
    }
})

export default mongoose.model("User", User);