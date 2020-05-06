import React from "react";
import SearchMusicItemPresenter from "./SearchMusicItemPresenter";

const SearchMusicItem = ({ jacket, title, artist, id, getMovieInfo }) => {
    const addSearchItem = (videoID) => {
        alert(videoID);
        getMovieInfo(videoID);
    };

    return (
        <SearchMusicItemPresenter
            jacket={jacket} // 손자
            title={title} // 손자
            artist={artist} // 손자
            id={id} // 손자
            addSearchItem={addSearchItem}
        />
    );
};

export default SearchMusicItem;
