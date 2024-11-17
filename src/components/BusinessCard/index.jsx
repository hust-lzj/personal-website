import React from "react";
import "./BusinessCard.css";

export default function BusinessCard({
    avatar = "",
    name = "姓名",
    title = "这是网页的标题",
    signature = "这是你的签名",
    school = "这是你的学校",
    grade = "这是你的年级",
    address = "这是你的地址",
    qq = "",
    wechat = "",
    github = "",
    email = "",
}) {
    return (
        <>
            <div className="card sticky">
                <div className="card-avatar">
                    <img src={avatar} alt="Avatar" />
                    <span className="name-box">{name}</span>
                </div>

                <p className="card-title">{title}</p>
                <p className="card-signature">
                    <span>{signature}</span>
                </p>
                <div className="divider"></div>
                <div className="contact">
                    <a
                        className="iconfont icon-weixin card-contact"
                        title={"wx: " + wechat}
                    ></a>
                    <a
                        className="iconfont icon-github card-contact"
                        title={"github: " + github}
                        href={github}
                    ></a>
                    <a
                        className="iconfont icon-email card-contact"
                        title={"email: " + email}
                        href={
                            "Mailto:" +
                            email +
                            "?Subject=邮箱标题&amp;Body=邮箱内容！"
                        }
                    ></a>
                    <a
                        className="iconfont icon-qq card-contact"
                        title={"qq: " + qq}
                    ></a>
                </div>
                <div className="divider"></div>
                <div className="info-box">
                    <span className="info-title">毕业院校</span>
                    <span className="info-content">{school}</span>
                </div>
                <div className="info-box">
                    <span className="info-title">所在城市</span>
                    <span className="info-content">{address}</span>
                </div>
                <div className="info-box">
                    <span className="info-title">年级</span>
                    <span className="info-content">{grade}</span>
                </div>
                <div className="divider"></div>
                <a
                    className="contact-me"
                    href={
                        "Mailto:" +
                        email +
                        "?Subject=邮箱标题&amp;Body=邮箱内容！"
                    }
                >
                    联系我
                </a>
            </div>
        </>
    );
}
