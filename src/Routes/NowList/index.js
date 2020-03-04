import React from "react";
import "./style.scss";
import axios from "axios";

const NowList = () => {
    const javasc = "javascript";

    return (
        <div className={`now-list ${javasc}`}>
            NowList Test
            <div className="cover">이미지 영역</div>
            <div className="music-content">
                <label>
                    <span>유튜브 url 입력</span>
                    <input type="text" />
                </label>
                <div className="musicList">유튜브 음악 리스트</div>
            </div>
            <div className="music-bar"></div>
        </div>
    );
};

export default NowList;
