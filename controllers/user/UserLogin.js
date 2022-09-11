import User from "../../models/UserModel.js";
import Token from "../../models/TokenModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

export const Login = async (req, res) => {
    try {
        
        const checkIfUserExists = await User.findOne({email : req.body.email});
        
        if(checkIfUserExists === null) throw error

        const matchPassword = await bcrypt.compare(req.body.password, checkIfUserExists.password);
        if(!matchPassword) return res.status(400).json({message : "Email or Password Is Not Valid!"})

        let name = checkIfUserExists.name;
        let userId = checkIfUserExists.id;
        let email = checkIfUserExists.email;

        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN, {
            expiresIn : "60s"
        });

        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESS_TOKEN, {
            expiresIn : "1d"
        });

        await Token.updateOne({
            // _id : mongoose.Types.ObjectId(userId)
            id : userId
        },{
            refreshToken,
            updatedAt : new Date()
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly : true,
            maxAge : 24 * 60 * 60 *1000
        })


        res.json({accessToken})

    } catch (error) {
        res.json({message : error.message})
    }
}