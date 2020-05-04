import React from "react";

const SearchMusicItem = ({
    jacket,
    title,
    artist,
    id,
    getMovieInfo,
    setUrl,
}) => {
    const addSearchItem = (videoID) => {
        alert(videoID);
        getMovieInfo(videoID);
    };

    return (
        <div
            className="search-music-item"
            onClick={() => {
                addSearchItem(id);
            }}
        >
            <p className="search-music-item--thumbnail">
                <img src={jacket.url} alt={title} />
            </p>
            <div className="search-music-item--info">
                <p className="search-music-item--info__title">{title}</p>
                <p className="search-music-item--info__artist">{artist}</p>
            </div>
        </div>
    );
};

export default SearchMusicItem;
