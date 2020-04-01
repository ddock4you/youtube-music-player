import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Music from "../Music";
import "./style.scss";

const MusicList = ({
    musicList,
    setMusicList,
    deleteMusicList,
    nowPlayingMusic,
    setNowPlayingMusic,
    setCover,
    isPlaying,
    setIsPlaying
}) => {
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

export default MusicList;
