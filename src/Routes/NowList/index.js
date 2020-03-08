import React, { useState } from "react";
// import axios from "axios";
import dotenv from "dotenv";

import { fake } from "../../fake";
import "./style.scss";

dotenv.config();

const NowList = () => {
    const javasc = "javascript";

    const [url, setUrl] = useState("");

    const onChangeUrl = e => {
        setUrl(e.target.value);
    };

    const inputUrl = e => {
        e.preventDefault();
        console.log(url);

        if (url.trim === "" && !url) {
            alert("YouTube URL이나 Video ID를 입력해주세요.");
            return;
        }

        let videoID = "";
        // youtube 메뉴 중 '동영상 URL 복사'를 통해 URL를 얻어서 입력했을 경우
        if (url.includes("youtu.be") === true) {
            videoID = url.split("/")[3].split("?")[0];
            console.log(videoID);
            return;
            // 일반 URL을 복사해서 입력했을 경우
        } else if (url.includes("v=") === false) {
            videoID = url;
            return;
        }

        videoID = url.split("v=")[1];
        console.log(videoID);
    };

    // const getMovieInfo = async videoId => {
    //     try {
    //         const APIKEY = "AIzaSyCV-tsD9TwSupW3pKjwGR33jKvsCpDPMu0";
    //         const APIURL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${APIKEY}&part=snippet,contentDetails,statistics,status`;
    //         const video = await axios.get(APIURL);

    //         // if (video.status === 200 && video.data.items.length >= 1) {
    //         //     const makeThumnail =() => {
    //         //         let thumnail = '';
    //         //         video.data.items[0].snippet.thumbnails.maxres
    //         //         const {data : {items : {0 : {kind}}}} = video;

    //         //     }
    //         // }

    //         return console.log(video);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };
    // getMovieInfo("yd3KYOei8o4");

    const { kind } = fake.items[0];
    console.log(kind);

    return (
        <div className={`now-list ${javasc}`}>
            <div className="cover">이미지 영역</div>
            <div className="music-content">
                <form className="music-input" onSubmit={inputUrl}>
                    <label>
                        <span>유튜브 url 입력</span>
                        <input type="text" value={url} onChange={onChangeUrl} />
                    </label>
                    <button type="submit">+</button>
                </form>
                <div className="musicList">유튜브 음악 리스트</div>
            </div>
            <div className="music-bar"></div>
        </div>
    );
};

export default NowList;
