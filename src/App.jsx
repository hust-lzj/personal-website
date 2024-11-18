import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BusinessCard from "@/components/BusinessCard";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Project from "@/pages/Project";
import Experience from "@/pages/Experience";
import Contact from "@/pages/Contact";
import Other from "@/pages/Other";

function App() {
    const [count, setCount] = useState(0);
    const avatarImageUrl = new URL(
        "@/assets/images/avatar.jpg",
        import.meta.url
    ).href;

    const bgMusicUrl = new URL(
        "@/assets/images/bgmusic_min.mp3",
        import.meta.url
    ).href;
    return (
        <>
            <BrowserRouter>
                <audio
                    controls
                    src={bgMusicUrl}
                    className="bg-music"
                    preload="none"
                >
                    您的浏览器不支持音频播放。
                </audio>
                <div className="pic-background"></div>
                <Navbar></Navbar>
                <div className="content">
                    <BusinessCard
                        avatar={avatarImageUrl}
                        name="吕张杰"
                        title="吕张杰的个人网站"
                        signature="天下没有远方，人间都是故乡"
                        school="华中科技大学"
                        grade="25届应届生"
                        address="湖北 武汉"
                        qq="1721597041"
                        wechat="wx_70417041"
                        github="https://github.com/hust-lzj"
                        email="1721597041@qq.com"
                    ></BusinessCard>
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/project" element={<Project />} />
                            <Route
                                path="/experience"
                                element={<Experience />}
                            />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/other" element={<Other />} />
                        </Routes>
                        <Footer></Footer>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
