import React from "react";
import "./style.scss";
import SearchMusicItem from "../SearchMusicItem";

const SearchMusicPresenter = ({
    getMovieInfo, // 손자
    onSubmitSearch,
    searchValue,
    onChangeSearch,
    searchList,
}) => {
    return (
        <div className="search-area">
            <div className="search-area--search">
                <form onSubmit={onSubmitSearch}>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={onChangeSearch}
                    />
                    <button type="submit">검색</button>
                </form>
            </div>
            <div className="search-area--result">
                {searchList.length !== 0 ? (
                    searchList.map((item) => (
                        <SearchMusicItem
                            key={item.id.videoId}
                            id={item.id.videoId}
                            jacket={item.snippet.thumbnails.default}
                            title={item.snippet.title}
                            artist={item.snippet.channelTitle}
                            getMovieInfo={getMovieInfo}
                        />
                    ))
                ) : (
                    <p className="nothing">검색결과가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default SearchMusicPresenter;
