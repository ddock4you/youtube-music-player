import React, { useRef, useEffect } from "react";
import SearchMusicItem from "../SearchMusicItem";
import "./style.scss";

const SearchMusicPresenter = ({
    getMovieInfo, // 손자
    onSubmitSearch,
    searchValue,
    onChangeSearch,
    searchList,
    openSearch,
    isSearch,
}) => {
    const searchInput = useRef(null);
    useEffect(() => {
        openSearch && searchInput.current.focus();
    }, [openSearch, isSearch]);
    return (
        <div className="search-area">
            <div className="search-area--search">
                <form onSubmit={onSubmitSearch}>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={onChangeSearch}
                        placeholder="검색"
                        ref={searchInput}
                    />
                    <button type="submit"></button>
                </form>
            </div>
            {isSearch && (
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
            )}
        </div>
    );
};

export default SearchMusicPresenter;
