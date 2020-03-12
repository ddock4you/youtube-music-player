import React from "react";
import "./style.scss";

const Music = ({ musicList }) => {
    const {
        base: { list }
    } = musicList;

    console.log(list);
    return (
        <div className="music-list">
            <p className="music-list--title">기본목록</p>
            {list.map(music => (
                <div className="music">
                    <div className="music--jacket">
                        <p>
                            <img src={music.jacket} alt={music.title} />
                        </p>
                    </div>
                    <div className="music--info">
                        <div className="music--info__title">{music.title}</div>
                        <div className="music--info__singer">
                            {music.singer}
                        </div>
                    </div>
                    <div className="music--duration">{music.duration}</div>
                </div>
            ))}
        </div>
    );
};

export default Music;
