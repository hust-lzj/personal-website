import React from "react";
import SkillCard from "@/components/SkillCard";
import Divider from "@/components/Divider";
import "@/pages/Experience.css";

export default function Experience() {
    return (
        <>
            <div className="hello-board">
                <p>Mastered Ability！</p>
                <p>Continuous Learning, </p>
                <p>Continuous Growth</p>
                <a className="navbtn" href="#content-board">
                    了解一下
                </a>
            </div>
            <div className="content-board" id="content-board">
                <div className="skill-board1">
                    <SkillCard
                        skill1="HTML"
                        percent1={0.95}
                        skill2="css"
                        percent2={0.8}
                    ></SkillCard>
                    <SkillCard
                        skill1="JS"
                        percent1={0.85}
                        skill2="TS"
                        percent2={0.75}
                    ></SkillCard>
                    <SkillCard
                        skill1="AntDesign"
                        percent1={0.85}
                        skill2="tailwindcss"
                        percent2={0.75}
                    ></SkillCard>
                    <SkillCard
                        skill1="Webpack"
                        percent1={0.85}
                        level1="掌握"
                        skill2="tailwindcss"
                        percent2={0.8}
                        level2="掌握"
                    ></SkillCard>
                    <SkillCard
                        skill1="React"
                        percent1={0.85}
                        level1="掌握"
                        skill2="Vue"
                        percent2={0.8}
                        level2="掌握"
                    ></SkillCard>
                    <SkillCard
                        skill1="NodeJS"
                        percent1={0.85}
                        level1="掌握"
                        skill2="Koa"
                        percent2={0.4}
                        level2="了解"
                    ></SkillCard>
                </div>
                <Divider title="其他技能" num="02"></Divider>
                <ul className="skill-board2">
                    <li>Python爬虫</li>
                    <li>数据处理及可视化</li>
                    <li>markdown文档编写</li>
                    <li>Office PowerPoint</li>
                </ul>
            </div>
        </>
    );
}
