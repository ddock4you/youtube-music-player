import React from "react";
import { Link } from "react-router-dom";
// import { faGithub } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
            <nav className="menu">
                <ul>
                    <li>
                        <button
                            type="button"
                            onClick={() => {
                                alert("준비중입니다.");
                            }}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                            &nbsp; 검색하기
                        </button>
                    </li>
                </ul>
            </nav>
            <nav className="link-list">
                <a
                    href="https://github.com/ddock4you/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://redbeanmilk-dev.tistory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/images/tistory_icon2.jpg"
                        alt="티스토리 아이콘"
                    />
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
