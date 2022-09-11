import jwt from "jsonwebtoken";
import User from "../../models/UserModel.js";
import Token from "../../models/TokenModel.js";


export const RefreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);

        const token = await Token.findOne({refreshToken : refreshToken});
        if(!token) return res.sendStatus(403);

        const user = await User.findOne({id : token.userId});

        const userId = user.id;
        const name = user.name;
        const email = user.email;


        jwt.verify(refreshToken, process.env.REFRESS_TOKEN, (error, decoded) => {
            if(error) return res.sendStatus(403);
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN, {
                expiresIn : "60s"
            })

            res.json({accessToken})
        })

    } catch (error) {
        res.json({message : error.message});
    }
}