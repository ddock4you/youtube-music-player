import React, { useState } from "react";
import YouTube from "react-player";
import {
    faStepForward,
    faBackward,
    faPlay,
    faPause
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Duration from "../Duration";
import "./style.scss";

const NowPlaying = ({ nowPlayingMusic, setNowPlayingMusic, musicList }) => {
    const [mute, setMute] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [seek, setSeek] = useState(0);
    const [played, setPlayed] = useState(0);
    const [playing, setPlaying] = useState(false);

    const handleDuration = duration => {
        console.log("onDuration", duration);
        setDuration(duration);
    };

    const handleSeekChange = e => {
        setPlayed({ played: parseFloat(e.target.value) });
    };

    const handlePlayMusic = () => {
        setIsPlaying(!isPlaying);
    };

    const handlePlay = () => {};

    const playingMusicIndex = musicList.findIndex(
        item => item.key === nowPlayingMusic.key
    );

    return (
        <div className="nowplaying">
            <YouTube
                className="hidden"
                url={`https://www.youtube.com/watch?v=${nowPlayingMusic.key}`}
                volume={mute ? 0 : volume}
                // onSeek={e => console.log("onSeek", e)}
                onDuration={handleDuration}
                playing={isPlaying}
                onPlay={handlePlay}
            />
            <div className="nowplaying--left-control">
                <button type="button">
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button type="button" onClick={handlePlayMusic}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
                <button type="button">
                    <FontAwesomeIcon icon={faStepForward} />
                </button>
                <p className="nowplaying-content--duration">
                    <Duration seconds={played} /> /{" "}
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
                <button type="button">사운드</button>
                <button type="button">플레이</button>
            </div>
        </div>
    );
};

export default NowPlaying;
