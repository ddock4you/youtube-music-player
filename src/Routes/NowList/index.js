import React from "react";
import axios from "axios";
import dotenv from "dotenv";

import { fake } from "../../fake";
import "./style.scss";
import PlayList from "../PlayList";
import InputMusic from "../../components/InputMusic";
import MusicBar from "../../components/MusicBar";

dotenv.config();

const NowList = () => {
    const javasc = "javascript";

    const getMovieInfo = async videoId => {
        try {
            const APIKEY = "AIzaSyCV-tsD9TwSupW3pKjwGR33jKvsCpDPMu0";
            const APIURL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${APIKEY}&part=snippet,contentDetails,statistics,status`;
            const video = await axios.get(APIURL);

            if (video.status === 200 && video.data.items.length >= 1) {
                const music = {
                    song: "",
                    singer: "",
                    key: "",
                    jacket: "",
                    bigJacket: "",
                    duration: ""
                };

                const {
                    snippet: { thumbnails }
                } = video.data.items[0];

                music.bigJacket = thumbnails.maxres
                    ? thumbnails.maxres
                    : thumbnails.standard
                    ? thumbnails.standard
                    : thumbnails.high
                    ? thumbnails.high
                    : thumbnails.medium
                    ? thumbnails.medium
                    : thumbnails.default;
                console.log(music.bigJacket);
            }

            return console.log(video);
        } catch (e) {
            console.error(e);
        }
    };
    getMovieInfo("yd3KYOei8o4");

    const { kind } = fake.items[0];
    console.log(kind);

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
                <PlayList />
            </div>
            <MusicBar />
        </div>
    );
};

export default NowList;
