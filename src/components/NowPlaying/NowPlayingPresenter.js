import React from "react";
import YouTube from "react-player";
import InputRange from "react-input-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStepForward,
    faBackward,
    faPlay,
    faPause,
    faVolumeMute,
    faVolumeUp,
    faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";
import Duration from "../../lib/Duration";

import "react-input-range/lib/css/index.css";
import "./style.scss";

const NowPlayingPresenter = ({
    nowPlayingMusic,
    isPlaying,
    mute,
    volume,
    handleDuration,
    player,
    handlePlay,
    handleProgress,
    played,
    handleSeekChange,
    handleSeekMouseUp,
    handlePrevPlay,
    handleNextPlay,
    playingMusicIndex,
    handlePlayMusic,
    duration,
    handleMute,
    handleVolumeChange,
}) => {
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
                <button
                    type="button"
                    className="center"
                    onClick={handlePlayMusic}
                >
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

export default NowPlayingPresenter;
