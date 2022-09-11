import User from "../../models/UserModel.js";
import Token from "../../models/TokenModel.js";
import bcrypt, { hash } from "bcrypt";
import mongoose from "mongoose";


export const Registration = async (req,res) => {
    try {

        const {name, email, password, confirmPassword} = req.body;

        if(password !== confirmPassword) return res.status(400).json({Error : "Password Not Match!"});

        let checkIfUserExists = await User.findOne({name : name, email : email})
        if(checkIfUserExists) return res.send("User Already Exists!");

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        const createNewUser = await User.create({
            name,
            email,
            password : hashPassword,
            createdAt : new Date()
        })

        // Also create Token document for new User
        await Token.create({
            // _id : mongoose.Types.ObjectId(createNewUser.id)
            userId : mongoose.Types.ObjectId(createNewUser.id),
            refreshToken : "",
            createdAt : new Date()
        })

        const user = {name, email}
        
        return res.status(201).json({status : "succes", user})

    } catch (error) {
        return res.json({msg : error.message})
    }
}


