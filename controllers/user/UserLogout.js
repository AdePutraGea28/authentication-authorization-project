import User from "../../models/UserModel.js";
import Token from "../../models/TokenModel.js";

export const Logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);

        const token = await Token.findOne({refreshToken : refreshToken});
        if(!token) return res.sendStatus(403);

        const tokenId = token.id;
        
        await Token.updateOne({id : tokenId}, {
            refreshToken : "",
            updatedAt : new Date()
        })
        
        res.clearCookie("refreshToken");

        res.sendStatus(200);

    } catch (error) {
        res.json({message : error.message});
    }
}