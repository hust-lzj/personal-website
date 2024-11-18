import React from "react";
import "@/components/AbilityCard/AbilityCard.css";

export default function AbilityCard({
    icon = "",
    name = "xxx",
    content1 = "xxx",
    content2 = "xxx",
    content3 = "xxx",
}) {
    return (
        <>
            <div className="ability-card">
                <span className={"iconfont ability-icon " + icon}></span>
                <div className="ability-name">{name}</div>
                <div className="ability-content">
                    <p>
                        {content1}
                        <br></br>
                        {content2}
                        <br></br>
                        {content3}
                    </p>
                </div>
                <div className="ability-btn">ORDER NOW</div>
            </div>
        </>
    );
}
