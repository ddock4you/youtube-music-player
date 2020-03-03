import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/" exact>
                        플레이 리스트
                    </Link>
                </li>
                <li>
                    <Link to="/playlist" exact>
                        재생목록
                    </Link>
                </li>
                <li>
                    <Link to="/search" exact>
                        검색
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
