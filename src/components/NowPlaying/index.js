import React, { useState, useRef } from "react";
import YouTube from "react-player";
import {
    faStepForward,
    faBackward,
    faPlay,
    faPause,
    faVolumeMute,
    faVolumeUp,
    faVolumeDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import Duration from "../Duration";
import "./style.scss";

const NowPlaying = ({
    nowPlayingMusic,
    setNowPlayingMusic,
    musicList,
    setCover,
    isPlaying,
    setIsPlaying
}) => {
    const [mute, setMute] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [beforeVolume, setBeforeVolume] = useState(null);
    const [duration, setDuration] = useState(0);
    const [seek, setSeek] = useState(0);
    const [played, setPlayed] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [seeking, setSeeking] = useState(true);
    const handleDuration = duration => {
        console.log("onDuration", duration);
        setDuration(duration);
    };

    const player = useRef();

    // const handleSeekChange = e => {
    //     setPlayed({ played: parseFloat(e.target.value) });
    // };

    const handlePlayMusic = () => {
        setIsPlaying(!isPlaying);
    };

    const handlePlay = () => {};

    const handleProgress = state => {
        // console.log("onProgress", state.played);

        setPlayed(state.played);
    };

    const playingMusicIndex = musicList.findIndex(
        item => item.key === nowPlayingMusic.key
    );

    const handleNextPlay = index => {
        if (index + 1 === musicList.length) {
            setIsPlaying(false);
            alert("끝 부분입니다.");
            return;
        }
        setCover(musicList[index + 1].bigJacket);
        setNowPlayingMusic(musicList[index + 1]);
        setIsPlaying(true);
    };

    const handlePrevPlay = index => {
        if (index - 1 === -1) {
            setIsPlaying(false);
            alert("처음 시작되는 부분입니다.");
            return;
        }
        setCover(musicList[index - 1].bigJacket);
        setNowPlayingMusic(musicList[index - 1]);
        setIsPlaying(true);
    };

    const handleVolumeChange = e => {
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

    const handleSeekChange = value => {
        setPlayed(parseFloat(value));
    };

    const handleSeekMouseUp = value => {
        // this.setState({ seeking: false })
        player.current.seekTo(parseFloat(value));
        setIsPlaying(true);
    };

    return (
        <div className="nowplaying">
            <YouTube
                className="hidden"
                url={`https://www.youtube.com/watch?v=${nowPlayingMusic.key}`}
                volume={mute ? 0 : volume}
                onDuration={handleDuration}
                playing={isPlaying}
                ref={player}
                onPlay={handlePlay}
                onProgress={handleProgress}
            />
            <div className="duration--bar">
                {/* <input
                    type="range"
                    min={0}
                    max={0.99999}
                    step="any"
                    value={played}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                /> */}
                <InputRange
                    step={0.000001}
                    minValue={0}
                    maxValue={0.999999}
                    value={played}
                    onChange={handleSeekChange}
                    onChangeComplete={handleSeekMouseUp}
                />
            </div>
            <div className="nowplaying--left-control">
                <button
                    type="button"
                    onClick={() => {
                        handlePrevPlay(playingMusicIndex);
                    }}
                >
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button type="button" onClick={handlePlayMusic}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleNextPlay(playingMusicIndex);
                    }}
                >
                    <FontAwesomeIcon icon={faStepForward} />
                </button>
                <p className="nowplaying-content--duration">
                    <Duration seconds={duration * played} /> /{" "}
                    <Duration seconds={duration} />
                </p>
            </div>
            <div className="nowplaying-content">
                <p className="nowplaying-content--thumbnail">
                    <img
                        src={nowPlayingMusic.bigJacket}
                        alt={nowPlayingMusic.title}
                    />
                </p>
                <div className="nowplaying-content--info">
                    <p className="nowplaying-content--info__title">
                        {nowPlayingMusic.title}
                    </p>
                    <p className="nowplaying-content--info__artist">
                        {nowPlayingMusic.singer}
                    </p>
                </div>
            </div>
            <div className="nowplaying--right-control">
                <button type="button" className="volume" onClick={handleMute}>
                    <FontAwesomeIcon
                        icon={
                            mute
                                ? faVolumeMute
                                : volume >= 0.5
                                ? faVolumeUp
                                : faVolumeDown
                        }
                    />
                </button>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        </div>
    );
};

export default NowPlaying;
