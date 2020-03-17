import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import axios from "axios";

import MusicList from "../../components/MusicList";
import InputMusic from "../../components/InputMusic";
import MusicBar from "../../components/MusicBar";
import { musicList } from "../../reducer";
import "./style.scss";
import NowPlaying from "../../components/NowPlaying";

dotenv.config();

const NowList = () => {
    const javasc = "javascript";
    // console.log(musicList[0].base.list);
    // let {
    //     base: { list }
    // } = musics;

    const storageInMusic = localStorage.getItem("localPlayList")
        ? JSON.parse(localStorage.getItem("localPlayList"))
        : musicList[0].base.list;
    const [statePlayList, setStatePlayList] = useState(storageInMusic);

    useEffect(() => {
        localStorage.setItem("localPlayList", JSON.stringify(statePlayList));
    });

    const addMusic = music => {
        let musicsStep1 = musicList[0].base.list;
        let musicsStep2 = musicsStep1.concat(...music);
        musicsStep1 = musicsStep2;
        console.log(musicsStep1);
    };

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
                // addMusic(music);
                return addMusic(music);
            }
            // return console.log(video);
        } catch (e) {
            console.error(e);
        }
    };

    // getMovieInfo("yd3KYOei8o4");

    return (
        <div className={`now-list ${javasc}`}>
            <div className="cover">
                <div className="cover-img">
                    <img
                        src="https://i.ytimg.com/vi/yd3KYOei8o4/maxresdefault.jpg"
                        alt="cover"
                    />
                </div>
            </div>
            <div className="music-content">
                <InputMusic
                    getMovieinfo={getMovieInfo}
                    // url={url}
                    // onChangeUrl={onChangeUrl}
                />
                <MusicList musicList={musicList[0]} />
            </div>
            <MusicBar />
            <NowPlaying />
        </div>
    );
};

export default NowList;
