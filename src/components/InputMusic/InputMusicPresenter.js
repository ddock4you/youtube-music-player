import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const InputMusicPresenter = ({ inputUrl, onChangeUrl, url }) => {
    return (
        <form className="music-input" onSubmit={inputUrl}>
            <label>
                <span>YouTube URL :</span>
                <input
                    type="text"
                    value={url}
                    onChange={onChangeUrl}
                    placeholder="ex) https://www.youtube.com/watch?v=_XSVrRK205Q"
                />
            </label>
            <button type="submit">
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </form>
    );
};

export default InputMusicPresenter;
