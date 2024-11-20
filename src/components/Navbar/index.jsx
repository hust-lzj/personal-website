import React, { useRef, useEffect } from "react";
import "@/components/Navbar/Navbar.css";
import "@/assets/icons/iconfont.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const logoImageUrl = new URL("@/assets/logo.png", import.meta.url).href;
    const bgImageUrl1 = new URL(
        "@/assets/images/back/bgpic.jpg",
        import.meta.url
    ).href;
    const bgImageUrl2 = new URL(
        "@/assets/images/back/light-bgpic.jpg",
        import.meta.url
    ).href;

    const switchCheckboxRef = useRef(null);

    useEffect(() => {
        const switchCheckbox = switchCheckboxRef.current;
        const root = document.documentElement;

        const handleChange = () => {
            if (switchCheckbox.checked) {
                // 切换到亮色模式
                root.style.setProperty("--dark-bg", "#f4f5f7");
                root.style.setProperty("--dark-main-color", "#ffffff");
                root.style.setProperty("--font-color", "#00283a");
                root.style.setProperty("--bgpic-url", `url("${bgImageUrl2}")`);
            } else {
                // 切换到暗色模式
                root.style.setProperty("--dark-bg", "#02162b");
                root.style.setProperty("--dark-main-color", "#00283a");
                root.style.setProperty("--font-color", "#ffffff");
                root.style.setProperty("--bgpic-url", `url("${bgImageUrl1}")`);
            }
        };

        switchCheckbox.addEventListener("change", handleChange);

        return () => {
            switchCheckbox.removeEventListener("change", handleChange);
        };
    }, []);

    function useActiveLink(path) {
        const location = useLocation();
        return location.pathname === path;
    }
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
                        <li className={useActiveLink("/") ? "active-link" : ""}>
                            <Link to="/">主页</Link>
                        </li>
                        <li
                            className={
                                useActiveLink("/project") ? "active-link" : ""
                            }
                        >
                            <Link to="/project">项目</Link>
                        </li>
                        <li
                            className={
                                useActiveLink("/experience")
                                    ? "active-link"
                                    : ""
                            }
                        >
                            <Link to="/experience">经验</Link>
                        </li>
                        <li
                            className={
                                useActiveLink("/contact") ? "active-link" : ""
                            }
                        >
                            <Link to="/contact">联系</Link>
                        </li>
                        <li
                            className={
                                useActiveLink("/other") ? "active-link" : ""
                            }
                        >
                            <Link to="/other">其他</Link>
                        </li>
                        <li className="setting">
                            <span className="iconfont icon-shezhi"></span>
                            <div className="switch">
                                <input
                                    type="checkbox"
                                    id="switch-checkbox"
                                    ref={switchCheckboxRef}
                                />
                                <label
                                    htmlFor="switch-checkbox"
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
