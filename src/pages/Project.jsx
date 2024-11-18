import React from "react";
import "@/pages/Project.css";

export default function Project() {
    const csigProjectUrl = new URL(
        "@/assets/images/project/csig.png",
        import.meta.url
    ).href;
    const xmlyProjectUrl = new URL(
        "@/assets/images/project/xmly.png",
        import.meta.url
    ).href;
    const leetcodeProjectUrl = new URL(
        "@/assets/images/project/leetcode.png",
        import.meta.url
    ).href;
    const jsbgProjectUrl = new URL(
        "@/assets/images/project/jsbg.png",
        import.meta.url
    ).href;
    const ylhzProjectUrl = new URL(
        "@/assets/images/project/ylhz.png",
        import.meta.url
    ).href;
    const cbltProjectUrl = new URL(
        "@/assets/images/project/cblt.png",
        import.meta.url
    ).href;
    const dingxiangProjectUrl = new URL(
        "@/assets/images/project/dingxiang.png",
        import.meta.url
    ).href;

    return (
        <>
            <div className="hello-board">
                <p>These are my projects!</p>
                <p>Crafting Pixels into </p>
                <p>Dreams</p>
                <a className="navbtn" href="#content-board">
                    了解一下
                </a>
            </div>
            <div className="project-board" id="content-board">
                <div className="project-item">
                    <img src={csigProjectUrl}></img>
                    <div className="project-title">
                        <h4>搭建会议官网</h4>
                        <span>中国图象图形学学会青年科学家会议 2023</span>
                    </div>
                </div>
                <div className="project-item">
                    <img src={xmlyProjectUrl}></img>
                    <div className="project-title">
                        <h4>基于原生html搭建的喜马拉雅首页</h4>
                        <span>喜马拉雅首页</span>
                    </div>
                </div>
                <div className="project-item">
                    <img src={leetcodeProjectUrl}></img>
                    <div className="project-title">
                        <h4>基于webpack搭建的leetcode题库</h4>
                        <span>leetcode题库</span>
                    </div>
                </div>
                <div className="project-item">
                    <img src={jsbgProjectUrl}></img>
                    <div className="project-title">
                        <h4>React,NodeJs内容管理平台前后端</h4>
                        <span>金山办公内容管理平台</span>
                    </div>
                </div>
                <div className="project-item">
                    <img src={ylhzProjectUrl}></img>
                    <div className="project-title">
                        <h4>友邻互助微信小程序</h4>
                        <span>地普开物创新工场友邻互助平台</span>
                    </div>
                </div>
                <div className="project-item">
                    <img src={cbltProjectUrl}></img>
                    <div className="project-title">
                        <h4>Gephi对微博传播链条可视化</h4>
                        <span>第六届传播数据挖掘竞赛</span>
                    </div>
                </div>
                <div className="project-item">
                    <img src={dingxiangProjectUrl}></img>
                    <div className="project-title">
                        <h4>python数据挖掘以及可视化分析</h4>
                        <span>医疗职业数据挖掘</span>
                    </div>
                </div>
            </div>
        </>
    );
}
