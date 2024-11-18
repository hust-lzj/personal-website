import React from "react";
import Divider from "@/components/Divider";
import "@/pages/Other.css";

export default function Other() {
    const pic1Url = new URL("@/assets/images/pic1.jpg", import.meta.url).href;
    const pic2Url = new URL("@/assets/images/pic2.jpg", import.meta.url).href;
    const pic3Url = new URL("@/assets/images/pic3.jpg", import.meta.url).href;
    const pic4Url = new URL("@/assets/images/pic4.jpg", import.meta.url).href;
    const pic5Url = new URL("@/assets/images/pic5.jpg", import.meta.url).href;
    const pic6Url = new URL("@/assets/images/pic6.jpg", import.meta.url).href;

    return (
        <>
            <div className="hello-board">
                <p>Photos！</p>
                <p>Life is like a box of </p>
                <p>chocolates</p>
                <a className="navbtn" href="#content-board">
                    生活像块巧克力
                </a>
            </div>
            <div className="content-board" id="content-board">
                <div className="board1">
                    <div className="back-card">
                        <div className="card-header"></div>
                        <p className="nums">Travel</p>
                        <div className="divider"></div>
                        <p className="card-name">旅行</p>
                    </div>
                    <div className="back-card">
                        <div className="card-header"></div>
                        <p className="nums">Food</p>
                        <div className="divider"></div>
                        <p className="card-name">美食</p>
                    </div>
                    <div className="back-card">
                        <div className="card-header"></div>
                        <p className="nums">Sport</p>
                        <div className="divider"></div>
                        <p className="card-name">运动</p>
                    </div>
                </div>
                <Divider title="生活精彩瞬间" num="02"></Divider>
                <div className="pic-board">
                    <div className="pic-item">
                        <img src={pic1Url}></img>
                        <div className="pic-title">
                            <h4>翡翠湖</h4>
                            <span>地点：大柴旦 翡翠湖</span>
                        </div>
                    </div>
                    <div className="pic-item">
                        <img src={pic2Url}></img>
                        <div className="pic-title">
                            <h4>海拔5130米</h4>
                            <span>地点：左贡县 东达山</span>
                        </div>
                    </div>
                    <div className="pic-item">
                        <img src={pic3Url}></img>
                        <div className="pic-title">
                            <h4>姊妹湖</h4>
                            <span>地点：四川巴塘 姊妹湖</span>
                        </div>
                    </div>
                    <div className="pic-item">
                        <img src={pic4Url}></img>
                        <div className="pic-title">
                            <h4>布达拉宫倒影</h4>
                            <span>地点：拉萨 布达拉宫</span>
                        </div>
                    </div>
                    <div className="pic-item">
                        <img src={pic5Url}></img>
                        <div className="pic-title">
                            <h4>黄厝海滩日出</h4>
                            <span>地点：厦门 黄厝海滩</span>
                        </div>
                    </div>
                    <div className="pic-item">
                        <img src={pic6Url}></img>
                        <div className="pic-title">
                            <h4>米堆冰川</h4>
                            <span>地点：林芝市 米堆冰川</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
