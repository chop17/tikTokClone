import mongoose from "mongoose";

const tikTokSchema= mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String,
    msgs:String,
    desc:String,
    shares:String,
});

export default mongoose.model("tiktokVideos",tikTokSchema);