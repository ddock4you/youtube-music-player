import React, { useState } from "react";
import axios from "axios";
import "./style.scss";
import SearchMusicItem from "../SearchMusicItem";

const SearchMusic = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [trySearching, setTrySearching] = useState(false);

    const optionParams = {
        q: searchValue,
        part: "snippet",
        key: process.env.REACT_APP_APIKEY,
        type: "video",
        maxResults: 10,
        regionCode: "KR",
        videoDuration: "short",
    };

    //한글을 검색어로 전달하기 위해선 url encoding 필요!
    optionParams.q = encodeURI(optionParams.q);

    let searchUrl = "https://www.googleapis.com/youtube/v3/search?";
    for (var option in optionParams) {
        searchUrl += option + "=" + optionParams[option] + "&";
    }

    //searchUrl의마지막에 붙어있는 & 정리
    searchUrl = searchUrl.substr(0, searchUrl.length - 1);

    const onChangeSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const onSubmitSearch = async (e) => {
        e.preventDefault();
        if (searchValue === "") {
            alert("검색값을 입력해주세요.");
            return;
        }
        try {
            const searchResult = await axios.get(searchUrl);
            console.log(searchResult.data);
            setTrySearching(true);
            if (searchResult.status === 200) {
                setSearchList(searchResult.data.items);
            }
        } catch (e) {
            return;
        }
    };
    console.log(searchList);

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
                            jacket={item.snippet.thumbnails.default}
                            title={item.snippet.title}
                            artist={item.snippet.channelTitle}
                        />
                    ))
                ) : (
                    <p className="nothing">검색결과가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default SearchMusic;
