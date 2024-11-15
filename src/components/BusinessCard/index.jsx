import React from "react";
import "./BusinessCard.css";

export default function BusinessCard({
    avatar = "",
    title = "这是网页的标题",
    signature = "这是你的签名",
    address = "这是你的地址",
    phone = "这是你的电话",
    email = "xxx@xxx.com",
}) {
    return (
        <>
            <div className="card">
                <img src={avatar} alt="Avatar" className="card-avatar" />
                <p className="card-title">{title}</p>
                <p className="card-signature">{signature}</p>
                <div className="divider"></div>
                <p className="card-address">{address}</p>
                <p className="card-phone">{phone}</p>
                <p className="card-email">{email}</p>
            </div>
        </>
    );
}
