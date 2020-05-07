import React, { useState } from "react";
import dotenv from "dotenv";

import { Link } from "react-router-dom";
import { faGithub, faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";
import SearchMusic from "../SearchMusic";

dotenv.config();

const Header = ({ getMovieInfo, setUrl }) => {
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <header>
            <h1 className="logo">
                <Link to="/youtube-music-player">
                    <img
                        src="/youtube-music-player/images/logo.svg"
                        alt="로고"
                    />
                </Link>
            </h1>
            <nav className="menu">
                <ul>
                    <li>
                        <button
                            type="button"
                            onClick={() => {
                                // setOpenSearch(!openSearch);
                                alert("준비중입니다.");
                            }}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                            &nbsp; 검색하기
                        </button>
                        {openSearch && (
                            <SearchMusic getMovieInfo={getMovieInfo} />
                        )}
                    </li>
                </ul>
            </nav>
            <nav className="link-list">
                <a
                    href="https://github.com/ddock4you/youtube-music-player"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://ddock4you.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faBlog} />
                </a>
                <a
                    href="http://ddock4you.ivyro.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faProductHunt} />
                </a>
            </nav>
        </header>
    );
};

export default Header;
