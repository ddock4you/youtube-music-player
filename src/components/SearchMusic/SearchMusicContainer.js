import React, { useState } from "react";
import axios from "axios";
import "./style.scss";
import SearchMusicPresenter from "./SearchMusicPresenter";

const SearchMusicContainer = ({ getMovieInfo, setUrl }) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchList, setSearchList] = useState([]);
    // const [trySearching, setTrySearching] = useState(false);

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
            // setTrySearching(true);
            if (searchResult.status === 200) {
                setSearchList(searchResult.data.items);
            }
        } catch (e) {
            return;
        }
    };

    return (
        <SearchMusicPresenter
            getMovieInfo={getMovieInfo} // 손자
            setUrl={setUrl} // 손자
            onSubmitSearch={onSubmitSearch}
            searchValue={searchValue}
            onChangeSearch={onChangeSearch}
            searchList={searchList}
        />
    );
};

export default SearchMusicContainer;
