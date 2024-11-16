import { useState } from "react";
import "./App.css";
import Navbar from "@/components/Navbar";
import BusinessCard from "./components/BusinessCard";
import ContentCard from "./components/ContentCard";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="pic-background"></div>
            <Navbar></Navbar>
            <div className="content">
                <BusinessCard
                    avatar="/src/assets/images/avatar.jpg"
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
                            <div className="divider divider-line"></div>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
