import React from "react";
import { fake } from "../../fake";

const PlayList = () => {
    const {
        snippet: {
            thumbnails: {
                maxres: { url }
            }
        }
    } = fake.items[0];

    return (
        <div className="playlist">
            <div className="playlist--music">
                <div className="playlist--music=thumnail">
                    <img src={url} alt="" />
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default PlayList;
