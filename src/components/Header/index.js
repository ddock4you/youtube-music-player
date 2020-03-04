import React from "react";
import { Link } from "react-router-dom";
// import { faGithub } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const Header = () => {
    return (
        <header>
            <h1 className="logo">
                <Link to="/">
                    <img src="/images/logo.svg" alt="로고" />
                </Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">플레이 리스트</Link>
                    </li>
                    <li>
                        <Link to="/playlist">재생목록</Link>
                    </li>
                    <li>
                        <Link to="/search">검색</Link>
                    </li>
                </ul>
            </nav>
            <h2>
                <a
                    href="https://github.com/ddock4you/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </h2>
        </header>
    );
};

export default Header;
