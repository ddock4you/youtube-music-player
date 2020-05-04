import React from "react";
import dotenv from "dotenv";

import MusicList from "../../components/MusicList";
import InputMusic from "../../components/InputMusic";
import "./style.scss";
import NowPlaying from "../../components/NowPlaying";

dotenv.config();

const NowList = ({
    getMovieInfo,
    musicList,
    setMusicList,
    deleteMusicList,
    nowPlayingMusic,
    setNowPlayingMusic,
    cover,
    setCover,
    isPlaying,
    setIsPlaying,
    url,
    setUrl,
}) => {
    return (
        <div className={`now-list`}>
            <div className="cover">
                <div className="cover-img">
                    <img src={cover} alt={`${cover} cover`} />
                </div>
            </div>
            <div className="music-content">
                <InputMusic
                    getMovieinfo={getMovieInfo}
                    musicList={musicList}
                    url={url}
                    setUrl={setUrl}
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
