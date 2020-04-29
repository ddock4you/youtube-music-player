import React from "react";

const SearchMusicItem = ({ jacket, title, artist, key, id }) => {
    return (
        <div
            className="search-music-item"
            onClick={() => {
                alert(key);
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
