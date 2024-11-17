import React from "react";
import "./Navbar.css";
import "@/assets/icons/iconfont.css";

export default function Navbar() {
    const logoImageUrl = new URL("@/assets/react.svg", import.meta.url).href;
    return (
        <>
            <nav className="navbar">
                <div className="center-nav">
                    <div className="navbar-logo">
                        <img src={logoImageUrl} alt="Logo" />
                        <h3>个人主页</h3>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a href="/">主页</a>
                        </li>
                        <li>
                            <a href="/project">项目</a>
                        </li>
                        <li>
                            <a href="/experience">经验</a>
                        </li>
                        <li>
                            <a href="/contact">联系</a>
                        </li>
                        <li>
                            <a href="/other">其他</a>
                        </li>
                        <li className="setting">
                            <span className="iconfont icon-shezhi"></span>
                            <div className="switch">
                                <input type="checkbox" id="toggle" />
                                <label
                                    htmlFor="toggle"
                                    className="slider"
                                ></label>
                            </div>
                            <span className="iconfont icon-yueliang1 white"></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
