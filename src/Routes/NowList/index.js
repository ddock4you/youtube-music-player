import React from "react";
import dotenv from "dotenv";
import axios from "axios";

import MusicList from "../../components/MusicList";
import InputMusic from "../../components/InputMusic";
import MusicBar from "../../components/MusicBar";
import { musicList } from "../../reducer";
import "./style.scss";

dotenv.config();

const NowList = () => {
    const javasc = "javascript";

    const getMovieInfo = async videoId => {
        try {
            const APIKEY = process.env.REACT_APP_APIKEY;
            const APIURL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${APIKEY}&part=snippet,contentDetails,statistics,status`;
            const video = await axios.get(APIURL);

            if (video.status === 200 && video.data.items.length >= 1) {
                const music = {
                    title: "",
                    singer: "",
                    key: "",
                    jacket: "",
                    bigJacket: "",
                    duration: ""
                };

                const { id } = video.data.items[0];
                const { snippet } = video.data.items[0];
                const { contentDetails } = video.data.items[0];
                const { thumbnails } = snippet;

                music.title = snippet.title;
                music.singer = snippet.channelTitle;
                music.key = id;
                music.duration = contentDetails.duration;
                music.jacket = thumbnails.default;
                music.bigJacket = thumbnails.maxres.url
                    ? thumbnails.maxres.url
                    : thumbnails.standard.url
                    ? thumbnails.standard.url
                    : thumbnails.high.url
                    ? thumbnails.high.url
                    : thumbnails.medium.url
                    ? thumbnails.medium.url
                    : thumbnails.default.url;
                // console.log(music);
                musicList[0] = musicList[0].base.list.concat(music);

                // return console.log(musicList[0]);
            }
            // return console.log(video);
        } catch (e) {
            console.error(e);
        }
    };
    getMovieInfo("yd3KYOei8o4");

    return (
        <div className={`now-list ${javasc}`}>
            <div className="cover">
                <div className="cover-img">
                    <p>
                        <img src="" alt="" />
                    </p>
                </div>
            </div>
            <div className="music-content">
                <InputMusic
                // inputUrl={inputUrl}
                // url={url}
                // onChangeUrl={onChangeUrl}
                />
                <MusicList musicList={musicList[0]} />
            </div>
            <MusicBar />
        </div>
    );
};

export default NowList;
