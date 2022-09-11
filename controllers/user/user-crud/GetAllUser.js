import User from "../../../models/UserModel.js";

export const GetAllUser = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({users})
    } catch (error) {
        res.json({message : error.message})
    }
}