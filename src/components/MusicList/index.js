import React from "react";

const Music = ({ musicList }) => {
    const {
        base: { list }
    } = musicList;

    console.log(list);
    return (
        <div className="musicList">
            {list.map(music => (
                <div className="music">
                    <div className="music--thumnail">
                        <img src={music.jacket} alt={music.title} />
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
