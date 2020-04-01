import React from "react";
import { faPlay, faPause, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./style.scss";

const Music = ({
    musicList,
    setMusicList,
    deleteMusicList,
    nowPlayingMusic,
    setNowPlayingMusic,
    setCover,
    isPlaying,
    setIsPlaying
}) => {
    // const playMusic = null;
    const clickPlayMusic = key => {
        setNowPlayingMusic(musicList.find(item => item.key === key));
        setCover(musicList.find(item => item.key === key).bigJacket);
        setIsPlaying(true);
    };

    const playingMusicIndex = musicList.findIndex(
        item => item.key === nowPlayingMusic.key
    );

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            musicList,
            result.source.index,
            result.destination.index
        );
        setMusicList(items);
    };

    return (
        <div className="music-list">
            <p className="music-list--title">기본목록</p>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {provided => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="music-list--area"
                        >
                            {musicList.map((music, index) => (
                                <Draggable
                                    key={music.id}
                                    index={index}
                                    draggableId={String(music.id)}
                                >
                                    {provided => (
                                        <div
                                            className={
                                                "music " +
                                                (index === playingMusicIndex &&
                                                isPlaying
                                                    ? "playing"
                                                    : index ===
                                                          playingMusicIndex &&
                                                      !isPlaying
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
                                                        <FontAwesomeIcon
                                                            icon={faPlay}
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            icon={faPause}
                                                        />
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
                                                    onClick={e => {
                                                        e.stopPropagation();
                                                        deleteMusicList(
                                                            music.key
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default Music;
