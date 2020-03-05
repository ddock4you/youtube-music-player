import React from "react";

const NowPlaying = () => {
    return (
        <div className="nowplaying">
            <div class="nowplaying-navi1">
                <button type="button">이전</button>
                <button type="button">재생/취소</button>
                <button type="button">다음</button>
            </div>
            <div className="nowplaying-content">
                <p className="nowplaying-content--duration">00:00 / 20:00</p>
                <p class="nowplaying-content--thumnail">
                    <img src="" alt="" />
                </p>
                <div className="nowplaying-content--info">
                    <p className="nowplaying-content--info__title">
                        Lofi hip hop mix - Beats to Relex/Study to [2018]
                    </p>
                    <p className="nowplaying-content--info__artist">
                        ChilledCow
                    </p>
                </div>
            </div>
            <div className="nowplaying-navi2">
                <button type="button">사운드</button>
                <button type="button">플레이</button>
            </div>
        </div>
    );
};

export default NowPlaying;
