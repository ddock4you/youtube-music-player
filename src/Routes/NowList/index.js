import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import axios from "axios";
import youtubeDuration from "youtube-duration-format";

import MusicList from "../../components/MusicList";
import InputMusic from "../../components/InputMusic";
import MusicBar from "../../components/MusicBar";
import { MusicListData } from "../../reducer";
import "./style.scss";
import NowPlaying from "../../components/NowPlaying";

dotenv.config();

const NowList = () => {
    const javasc = "javascript";

    const defaultMusicList = MusicListData[0].base.list;
    const storageMusicList = localStorage.getItem("localPlayList")
        ? JSON.parse(localStorage.getItem("localPlayList"))
        : defaultMusicList;
    const [musicList, setMusicList] = useState(storageMusicList);
    const [nowPlayingMusic, setNowPlayingMusic] = useState(musicList[0]);
    const [cover, setCover] = useState(musicList[0].bigJacket);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        localStorage.setItem("localPlayList", JSON.stringify(musicList));
    }, [musicList]);

    const addMusic = (music) => {
        let addMusicList = musicList.concat(music);
        setMusicList(addMusicList);
        console.log(musicList);
    };

    const getMovieInfo = async (videoId) => {
        try {
            const APIKEY = process.env.REACT_APP_APIKEY;
            const APIURL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${APIKEY}&part=snippet,contentDetails,statistics,status`;
            const video = await axios.get(APIURL);

            if (video.status === 200 && video.data.items.length >= 1) {
                const music = {
                    id: "",
                    title: "",
                    singer: "",
                    key: "",
                    jacket: "",
                    bigJacket: "",
                    duration: "",
                };

                const { id } = video.data.items[0];
                const { snippet } = video.data.items[0];
                const { contentDetails } = video.data.items[0];
                const { thumbnails } = snippet;

                music.title = snippet.title;
                music.singer = snippet.channelTitle;
                music.key = id;
                music.id = new Date().valueOf();
                music.duration = youtubeDuration(contentDetails.duration);
                music.jacket = thumbnails.default.url;
                music.bigJacket = thumbnails.maxres.url
                    ? thumbnails.maxres.url
                    : thumbnails.standard.url
                    ? thumbnails.standard.url
                    : thumbnails.high.url
                    ? thumbnails.high.url
                    : thumbnails.medium.url
                    ? thumbnails.medium.url
                    : thumbnails.default.url;
                console.log(musicList);

                return addMusic(music);
            }
            // return console.log(video);
        } catch (e) {
            console.error(e);
        }
    };

    const deleteMusicList = (selectedMusic) => {
        if (musicList.length === 1) {
            alert("플레이리스트에 최소 하나 이상의 음악이 있어야 합니다.");
            return;
        }
        const deleteMusic = musicList.filter(
            (music) => music.key !== selectedMusic
        );
        setMusicList(deleteMusic);
    };

    return (
        <div className={`now-list ${javasc}`}>
            <div className="cover">
                <div className="cover-img">
                    <img src={cover} alt={`${cover} cover`} />
                </div>
            </div>
            <div className="music-content">
                <InputMusic
                    getMovieinfo={getMovieInfo}
                    musicList={musicList}
                    // url={url}
                    // onChangeUrl={onChangeUrl}
                />
                <MusicList
                    musicList={musicList}
                    setMusicList={setMusicList}
                    deleteMusicList={deleteMusicList}
                    nowPlayingMusic={nowPlayingMusic}
                    setNowPlayingMusic={setNowPlayingMusic}
                    setCover={setCover}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                />
            </div>
            <MusicBar />
            <NowPlaying
                nowPlayingMusic={nowPlayingMusic}
                setNowPlayingMusic={setNowPlayingMusic}
                musicList={musicList}
                setCover={setCover}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
        </div>
    );
};

export default NowList;
