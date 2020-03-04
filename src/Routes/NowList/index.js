import React from "react";
import "./style.scss";
import axios from "axios";

const NowList = () => {
    const javasc = "javascript";

    const getMovieInfo = async video_id => {
        const API_KEY = "AIzaSyCdb0haKko0bI2EDidnN-ywbdW1ssnPmB4";
        const API_URL = `https://www.googleapis.com/youtube/v3/videos?id=${video_id}&key=${API_KEY}&part=snippet,contentDetails,statistics,status`;
        const info = await axios.get(API_URL);
        return console.log(info);
    };
    getMovieInfo("yd3KYOei8o4");

    return (
        <div className={`now-list ${javasc}`}>
            NowList Test
            <div className="cover">이미지 영역</div>
            <div className="music-content">
                <label>
                    <span>유튜브 url 입력</span>
                    <input type="text" />
                </label>
                <div className="musicList">유튜브 음악 리스트</div>
            </div>
            <div className="music-bar"></div>
        </div>
    );
};

export default NowList;
