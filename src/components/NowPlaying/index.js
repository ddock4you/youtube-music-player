import React from "react";
import "./style.scss";
import {
    faStepForward,
    faBackward,
    faPlay,
    faPause
} from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { fake } from "../../../fake";

const NowPlaying = () => {
    // console.log(kind);

    const playstat = false;

    return (
        <div className="nowplaying">
            <div class="nowplaying--left-control">
                <button type="button">
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button type="button">
                    <FontAwesomeIcon icon={playstat ? faPlay : faPause} />
                </button>
                <button type="button">
                    <FontAwesomeIcon icon={faStepForward} />
                </button>
                <p className="nowplaying-content--duration">00:00 / 20:00</p>
            </div>
            <div className="nowplaying-content">
                <p class="nowplaying-content--thumbnail">
                    <img
                        src="https://i.ytimg.com/vi/yd3KYOei8o4/maxresdefault.jpg"
                        alt="finalfantasy"
                    />
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
            <div className="nowplaying--right-control">
                <button type="button">사운드</button>
                <button type="button">플레이</button>
            </div>
        </div>
    );
};

export default NowPlaying;
