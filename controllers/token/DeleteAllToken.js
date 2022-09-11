import Token from "../../models/TokenModel.js";

export const DeleteAllToken = async (req, res) => {
    try {
        await Token.deleteMany();

        res.status(200).json({status : "Delete Token Success!"})
    } catch (error) {
        res.json({message : error.message})
    }
}