import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Music from "../Music";
import "./style.scss";

const MusicListPresenter = ({
    musicList, // 손자Props
    deleteMusicList, //손자Props
    nowPlayingMusic, // 손자Props
    setNowPlayingMusic, // 손자Props
    setCover, // 손자Props
    isPlaying, // 손자Props
    setIsPlaying, // 손자Props
    onDragEnd,
}) => {
    return (
        <div className="music-list">
            <p className="music-list--title">기본목록</p>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="music-list--area"
                        >
                            <Music
                                musicList={musicList}
                                deleteMusicList={deleteMusicList}
                                isPlaying={isPlaying}
                                setIsPlaying={setIsPlaying}
                                nowPlayingMusic={nowPlayingMusic}
                                setNowPlayingMusic={setNowPlayingMusic}
                                setCover={setCover}
                            />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default MusicListPresenter;
