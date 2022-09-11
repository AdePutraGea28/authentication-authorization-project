import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

const db = mongoose.connection;
db.on("error", () => console.error(error));
db.once("open", () => console.log("Database Connected..."));

export default db;