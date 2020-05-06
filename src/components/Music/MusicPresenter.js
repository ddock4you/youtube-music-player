import React from "react";
import { faPlay, faPause, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable } from "react-beautiful-dnd";

const MusicPresenter = ({
    musicList,
    deleteMusicList,
    isPlaying,
    clickPlayMusic,
    playingMusicIndex,
}) => {
    return (
        <>
            {musicList.map((music, index) => (
                <Draggable
                    key={music.id}
                    index={index}
                    draggableId={String(music.id)}
                >
                    {(provided) => (
                        <div
                            className={
                                "music " +
                                (index === playingMusicIndex && isPlaying
                                    ? "playing"
                                    : index === playingMusicIndex && !isPlaying
                                    ? "stop"
                                    : "")
                            }
                            onClick={() => {
                                clickPlayMusic(music.key);
                            }}
                            key={music.id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <div className="music--jacket">
                                <p>
                                    <img
                                        src={music.bigJacket}
                                        alt={music.title}
                                    />
                                    {isPlaying ? (
                                        <FontAwesomeIcon icon={faPlay} />
                                    ) : (
                                        <FontAwesomeIcon icon={faPause} />
                                    )}
                                </p>
                            </div>
                            <div className="music--info">
                                <div className="music--info__title">
                                    {music.title}
                                </div>
                                <div className="music--info__singer">
                                    {music.singer}
                                </div>
                            </div>
                            <div className="music--duration">
                                {music.duration}
                            </div>
                            <div className="music--remove">
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteMusicList(music.key);
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </Draggable>
            ))}
        </>
    );
};

export default MusicPresenter;
