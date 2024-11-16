import React from "react";
import "./ContentCard.css";

export default function ContentCard({ num = "0", name = "xxxxx" }) {
    return (
        <>
            <div className="back-card">
                <div className="card-header"></div>
                <p className="nums">
                    {num}
                    <span className="plus">+</span>
                </p>
                <div className="divider"></div>
                <p className="card-name">{name}</p>
            </div>
        </>
    );
}
