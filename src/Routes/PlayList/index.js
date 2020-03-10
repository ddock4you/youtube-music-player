import React from "react";
// import { fake } from "../../fake";

const PlayList = ({ musicList }) => {
    console.log(musicList);
    const {
        base: { list }
    } = musicList;

    console.log(list);
    return (
        <div className="playlist">
            <div className="playlist--music">
                <div className="playlist--music=thumnail">
                    <img src={list.jacket} alt="" />
                </div>
                <div className="playlist--info">
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default PlayList;
