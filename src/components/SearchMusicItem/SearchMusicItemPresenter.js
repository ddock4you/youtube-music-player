import React from "react";

const SearchMusicItemPresenter = ({
    jacket, // 손자
    title, // 손자
    artist, // 손자
    id, // 손자
    addSearchItem,
}) => {
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

export default SearchMusicItemPresenter;
