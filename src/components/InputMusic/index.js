import React, { useState } from "react";
// import { fake } from "../../fake";
import "./style.scss";

const InputMusic = ({ getMovieinfo }) => {
    const [url, setUrl] = useState("");

    const onChangeUrl = e => {
        setUrl(e.target.value);
    };

    const inputUrl = e => {
        e.preventDefault();
        console.log(url);

        if (url.trim === "" && !url) {
            alert("YouTube URL이나 Video ID를 입력해주세요.");
            return;
        }

        let videoID = "";
        // youtube 메뉴 중 '동영상 URL 복사'를 통해 URL를 얻어서 입력했을 경우
        if (url.includes("youtu.be") === true) {
            videoID = url.split("/")[3].split("?")[0];
            // 일반 URL을 복사해서 입력했을 경우
        } else if (url.includes("v=") === false) {
            videoID = url;
        } else if (url.includes("v=") === true) {
            videoID = url.split("v=")[1];
        }
        getMovieinfo(videoID);
        setUrl("");
    };

    return (
        <form className="music-input" onSubmit={inputUrl}>
            <label>
                <span>유튜브 url 입력</span>
                <input type="text" value={url} onChange={onChangeUrl} />
            </label>
            <button type="submit">+</button>
        </form>
    );
};

export default InputMusic;
