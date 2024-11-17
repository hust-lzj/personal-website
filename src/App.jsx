import { useState } from "react";
import "./App.css";
import Navbar from "@/components/Navbar";
import BusinessCard from "./components/BusinessCard";
import ContentCard from "./components/ContentCard";
import AbilityCard from "./components/AbilityCard";
import Footer from "./components/Footer";

function App() {
    const [count, setCount] = useState(0);
    const avatarImageUrl = new URL(
        "@/assets/images/avatar.jpg",
        import.meta.url
    ).href;
    const selfDrivingVideoUrl = new URL(
        "@/assets/images/自驾318.mp4",
        import.meta.url
    ).href;
    return (
        <>
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
                    <div className="hello-board">
                        <p>Hi My New Friend!</p>
                        <p>Hello</p>
                        <p>I`m Zhangjie Lv</p>
                        <a className="navbtn" href="#content-board">
                            了解一下
                        </a>
                    </div>
                    <div className="content-board" id="content-board">
                        <div className="board1">
                            <ContentCard
                                num="3"
                                name="完成的个人项目"
                            ></ContentCard>
                            <ContentCard
                                num="3"
                                name="完成的团队项目"
                            ></ContentCard>
                            <ContentCard num="3" name="获奖情况"></ContentCard>
                        </div>
                        <div className="divider-box">
                            <div className="divider-name">我的故事</div>
                            <div className="divider"></div>
                            <div className="divider-name">01</div>
                        </div>
                        <div className="my-story">
                            <div className="blockquote">
                                <p>
                                    我从山中来 带着兰花草 家中无富贵 口袋无财宝
                                </p>
                                <p>
                                    寒风终刺骨 勤为好仕途 博得明月出
                                    用兰花换锦服
                                </p>
                            </div>
                        </div>
                        <div
                            className="divider-box"
                            style={{ marginBottom: "0.5rem" }}
                        >
                            <div className="divider-name">自驾318纪录片</div>
                            <div className="divider"></div>
                            <div className="divider-name">02</div>
                        </div>
                        <video
                            preload="metadata"
                            width="100%"
                            height="400"
                            src={selfDrivingVideoUrl}
                            controls
                            autoPlay
                            loop
                            muted
                        ></video>
                        <div className="divider-box">
                            <div className="divider-name">我的能力</div>
                            <div className="divider"></div>
                            <div className="divider-name">03</div>
                        </div>
                        <div className="board2">
                            <AbilityCard
                                icon="icon-cloud-service"
                                name="UI设计"
                                content1="UI排版"
                                content2="响应式页面"
                                content3="静态页面、动画效果"
                            ></AbilityCard>
                            <AbilityCard
                                icon="icon-qianduan1"
                                name="网页制作"
                                content1="HTML、JS、css、TS"
                                content2="JS交互"
                                content3="AJAX数据渲染"
                            ></AbilityCard>
                            <AbilityCard
                                icon="icon-kuangjiaguanli2"
                                name="前端框架"
                                content1="vue框架"
                                content2="react框架"
                                content3="微信小程序"
                            ></AbilityCard>
                            <AbilityCard
                                icon="icon-qianduan"
                                name="后端"
                                content1="nodejs+mysql"
                                content2="koa"
                                content3="django"
                            ></AbilityCard>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
