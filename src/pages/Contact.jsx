import React from "react";
import "@/pages/Contact.css";
import Divider from "@/components/Divider";

export default function Contact() {
    function sendMessage() {
        alert("抱歉，发送功能暂未开放，敬请期待~");
    }
    return (
        <>
            <div className="hello-board">
                <p>Here is my contact information！</p>
                <p>Let's Build Tomorrow</p>
                <p>Together</p>
                <a className="navbtn" href="#content-board">
                    了解一下
                </a>
            </div>
            <div className="content-board contact-board" id="content-board">
                <div className="contact-card">
                    <div className="card-header"></div>
                    <span className="iconfont icon-email"></span>
                    <p className="contact-way">email</p>
                    <p className="contact-num">1721597041@qq.com</p>
                </div>
                <div className="contact-card">
                    <div className="card-header"></div>
                    <span className="iconfont icon-github"></span>
                    <p className="contact-way">github</p>
                    <p className="contact-num">hust-lzj</p>
                </div>
                <Divider title="联系我" num="02"></Divider>
                <div className="email-box">
                    <input type="text" placeholder="收件人" />
                    <input type="text" placeholder="主题" />
                    <textarea placeholder="邮件内容"></textarea>
                    <button type="submit" onClick={sendMessage}>
                        发送
                    </button>
                </div>
            </div>
        </>
    );
}
