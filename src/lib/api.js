import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const APIKEY = process.env.REACT_APP_APIKEY;

export const getVideo = (videoId) =>
    axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${APIKEY}&part=snippet,contentDetails,statistics,status`
    );
