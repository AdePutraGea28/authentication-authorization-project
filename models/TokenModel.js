import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Token = new Schema({
    userId : {
        type : Object,
        required : true
    },
    refreshToken : {
        type : String,
    },
    createdAt : {
        type : Date,
    },
    updatedAt : {
        type : Date,
    }
});

export default mongoose.model("Token", Token);