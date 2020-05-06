import React from "react";
import MusicListPresenter from "./MusicListPresenter";

const MusicList = ({
    musicList,
    setMusicList,
    deleteMusicList,
    nowPlayingMusic,
    setNowPlayingMusic,
    setCover,
    isPlaying,
    setIsPlaying,
}) => {
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {
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
        <MusicListPresenter
            musicList={musicList} // 손자Props
            deleteMusicList={deleteMusicList} // 손자Props
            nowPlayingMusic={nowPlayingMusic} // 손자Props
            setNowPlayingMusic={setNowPlayingMusic} // 손자Props
            setCover={setCover} // 손자Props
            isPlaying={isPlaying} //손자Props
            setIsPlaying={setIsPlaying} // 손자Props
            onDragEnd={onDragEnd}
        />
    );
};

export default MusicList;
