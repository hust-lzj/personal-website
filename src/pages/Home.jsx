import React from "react";
import ContentCard from "@/components/ContentCard";
import AbilityCard from "@/components/AbilityCard";
import "@/pages/Home.css";
import Divider from "@/components/Divider";
export default function Home() {
    const selfDrivingVideoUrl = new URL(
        "@/assets/images/自驾318.mp4",
        import.meta.url
    ).href;
    return (
        <>
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
                    <ContentCard num="3" name="完成的个人项目"></ContentCard>
                    <ContentCard num="3" name="完成的团队项目"></ContentCard>
                    <ContentCard num="5" name="获奖情况"></ContentCard>
                </div>
                <Divider title="我的故事" num="01"></Divider>
                <div className="my-story">
                    <div className="blockquote">
                        <p>我从山中来 带着兰花草 家中无富贵 口袋无财宝</p>
                        <p>寒风终刺骨 勤为好仕途 博得明月出 用兰花换锦服</p>
                    </div>
                </div>
                <Divider title="自驾318纪录片" num="02"></Divider>
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
                <Divider title="我的能力" num="03"></Divider>
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
            </div>
        </>
    );
}
