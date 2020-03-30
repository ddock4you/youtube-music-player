import React from "react";
import "./style.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Music = ({ musicList, deleteMusicList }) => {
    const playMusic = true;

    // console.log(list);
    return (
        <div className="music-list">
            <p className="music-list--title">기본목록</p>
            <div className="music-list--area">
                {musicList.map(music => (
                    <div className="music" key={music.id}>
                        <div className="music--jacket">
                            <p>
                                <img src={music.jacket} alt={music.title} />
                                {playMusic ? (
                                    <FontAwesomeIcon icon={faPlay} />
                                ) : (
                                    ""
                                )}
                            </p>
                        </div>
                        <div className="music--info">
                            <div className="music--info__title">
                                {music.title}
                            </div>
                            <div className="music--info__singer">
                                {music.singer}
                            </div>
                        </div>
                        <div className="music--duration">{music.duration}</div>
                        <div className="music--remove">
                            <FontAwesomeIcon
                                icon={faTimesCircle}
                                onClick={e => {
                                    e.stopPropagation();
                                    deleteMusicList(music.key);
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Music;
