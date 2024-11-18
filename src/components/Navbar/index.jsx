import React from "react";
import "@/components/Navbar/Navbar.css";
import "@/assets/icons/iconfont.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    const logoImageUrl = new URL("@/assets/logo.png", import.meta.url).href;
    return (
        <>
            <nav className="navbar">
                <div className="center-nav">
                    <div className="navbar-logo">
                        <img
                            src={logoImageUrl}
                            alt="Logo"
                            className="logo-pic"
                        />
                        <h3>个人网站</h3>
                    </div>
                    <nav className="nav-links">
                        <li>
                            <Link to="/">主页</Link>
                        </li>
                        <li>
                            <Link to="/project">项目</Link>
                        </li>
                        <li>
                            <Link to="/experience">经验</Link>
                        </li>
                        <li>
                            <Link to="/contact">联系</Link>
                        </li>
                        <li>
                            <Link to="/other">其他</Link>
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
                    </nav>
                </div>
            </nav>
        </>
    );
}
