import React from "react";
import "./style.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Music = ({ musicList }) => {
    const playMusic = true;

    // console.log(list);
    return (
        <div className="music-list">
            <p className="music-list--title">기본목록</p>
            {musicList.map(music => (
                <div className="music playing" key={music.id}>
                    <div className="music--jacket">
                        <p>
                            <img src={music.jacket} alt={music.title} />
                            {playMusic ? <FontAwesomeIcon icon={faPlay} /> : ""}
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
