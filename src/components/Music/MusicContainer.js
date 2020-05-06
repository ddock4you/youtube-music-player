import React from "react";
import MusicPresenter from "./MusicPresenter";

const MusicContainer = ({
    musicList,
    deleteMusicList,
    isPlaying,
    setIsPlaying,
    nowPlayingMusic,
    setNowPlayingMusic,
    setCover,
}) => {
    const clickPlayMusic = (key) => {
        setNowPlayingMusic(musicList.find((item) => item.key === key));
        setCover(musicList.find((item) => item.key === key).bigJacket);
        setIsPlaying(true);
    };

    const playingMusicIndex = musicList.findIndex(
        (item) => item.key === nowPlayingMusic.key
    );

    return (
        <MusicPresenter
            musicList={musicList}
            deleteMusicList={deleteMusicList}
            isPlaying={isPlaying}
            clickPlayMusic={clickPlayMusic}
            playingMusicIndex={playingMusicIndex}
        />
    );
};

export default MusicContainer;
