import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import "../scss/reset.scss";
import Header from "./Header";
import NowList from "../Routes/NowList";
import PlayList from "../Routes/PlayList";
import Search from "../Routes/Search";
import axios from "axios";
import dotenv from "dotenv";

import { MusicListData } from "../reducer";
import youtubeDuration from "youtube-duration-format";

dotenv.config();
function App() {
    const defaultMusicList = MusicListData[0].base.list;
    const storageMusicList = localStorage.getItem("localPlayList")
        ? JSON.parse(localStorage.getItem("localPlayList"))
        : defaultMusicList;
    const [musicList, setMusicList] = useState(storageMusicList);
    const [nowPlayingMusic, setNowPlayingMusic] = useState(musicList[0]);
    const [cover, setCover] = useState(musicList[0].bigJacket);
    const [isPlaying, setIsPlaying] = useState(false);
    const [url, setUrl] = useState("");

    useEffect(() => {
        localStorage.setItem("localPlayList", JSON.stringify(musicList));
    }, [musicList]);

    const addMusic = (music) => {
        let addMusicList = musicList.concat(music);
        setMusicList(addMusicList);
        console.log(musicList);
    };
    console.log(url);

    const getMovieInfo = async (videoId) => {
        try {
            const APIKEY = process.env.REACT_APP_APIKEY;
            const APIURL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${APIKEY}&part=snippet,contentDetails,statistics,status`;
            const video = await axios.get(APIURL);
            console.log(video);
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
                music.bigJacket = thumbnails.maxres
                    ? thumbnails.maxres.url
                    : thumbnails.standard
                    ? thumbnails.standard.url
                    : thumbnails.high
                    ? thumbnails.high.url
                    : thumbnails.medium
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
        <Router>
            <Header getMovieInfo={getMovieInfo} setUrl={setUrl} />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <NowList
                            getMovieInfo={getMovieInfo}
                            musicList={musicList}
                            setMusicList={setMusicList}
                            deleteMusicList={deleteMusicList}
                            nowPlayingMusic={nowPlayingMusic}
                            setNowPlayingMusic={setNowPlayingMusic}
                            cover={cover}
                            setCover={setCover}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            url={url}
                            setUrl={setUrl}
                        />
                    )}
                />
                <Route exact path="/playlist" component={PlayList} />
                <Route exact path="/search" component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

export default App;
