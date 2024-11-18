import React from "react";
import "@/components/Divider/Divider.css";

export default function Divider({ title, num }) {
    return (
        <div className="divider-box">
            <div className="divider-name">{title}</div>
            <div className="divider"></div>
            <div className="divider-name">{num}</div>
        </div>
    );
}
