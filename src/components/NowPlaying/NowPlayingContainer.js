import React, { useState, useRef } from "react";
import NowPlayingPresenter from "./NowPlayingPresenter";

const NowPlayingContainer = ({
    nowPlayingMusic,
    setNowPlayingMusic,
    musicList,
    setCover,
    isPlaying,
    setIsPlaying,
}) => {
    const [mute, setMute] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [beforeVolume, setBeforeVolume] = useState(null);
    const [duration, setDuration] = useState(0);
    const [played, setPlayed] = useState(0);
    const handleDuration = (duration) => {
        // console.log("onDuration", duration);
        setDuration(duration);
    };

    const player = useRef();

    const handlePlayMusic = () => {
        setIsPlaying(!isPlaying);
    };

    const handlePlay = () => {};

    const handleProgress = (state) => {
        // console.log("onProgress", state.played);
        setPlayed(state.played);
        if (state.played === 1) {
            handleNextPlay(playingMusicIndex);
        }
    };

    const playingMusicIndex = musicList.findIndex(
        (item) => item.key === nowPlayingMusic.key
    );

    const handleNextPlay = (index) => {
        if (index + 1 === musicList.length) {
            setIsPlaying(false);
            alert("끝 부분입니다.");
            return;
        }
        setCover(musicList[index + 1].bigJacket);
        setNowPlayingMusic(musicList[index + 1]);
        setIsPlaying(true);
    };

    const handlePrevPlay = (index) => {
        if (index - 1 === -1) {
            setIsPlaying(false);
            alert("처음 시작되는 부분입니다.");
            return;
        }
        setCover(musicList[index - 1].bigJacket);
        setNowPlayingMusic(musicList[index - 1]);
        setIsPlaying(true);
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        if (e.target.value === "0") {
            setMute(true);
        } else {
            setMute(false);
        }
    };

    const handleMute = () => {
        if (mute === false) {
            setMute(!mute);
            setBeforeVolume(volume);
            setVolume(0);
        } else {
            setMute(!mute);
            setVolume(beforeVolume);
        }
    };

    const handleSeekChange = (value) => {
        setPlayed(parseFloat(value));
    };

    const handleSeekMouseUp = (value) => {
        // this.setState({ seeking: false })
        player.current.seekTo(parseFloat(value));
        setIsPlaying(true);
    };

    return (
        <NowPlayingPresenter
            nowPlayingMusic={nowPlayingMusic}
            isPlaying={isPlaying}
            mute={mute}
            volume={volume}
            handleDuration={handleDuration}
            player={player}
            handlePlay={handlePlay}
            handleProgress={handleProgress}
            played={played}
            handleSeekChange={handleSeekChange}
            handleSeekMouseUp={handleSeekMouseUp}
            handlePrevPlay={handlePrevPlay}
            handleNextPlay={handleNextPlay}
            playingMusicIndex={playingMusicIndex}
            handlePlayMusic={handlePlayMusic}
            duration={duration}
            handleMute={handleMute}
            handleVolumeChange={handleVolumeChange}
        />
    );
};

export default NowPlayingContainer;
