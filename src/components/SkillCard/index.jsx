import React from "react";
import "@/components/SkillCard/SkillCard.css";

export default function SkillCard({
    skill1 = "xxx",
    percent1 = 0.5,
    level1 = "",
    skill2 = "xxx",
    percent2 = 0.5,
    level2 = "",
}) {
    return (
        <>
            <div className="skill-card">
                <div className="card-header"></div>
                <div className="skill-item">
                    <div className="skill">
                        <div className="skill-name">{skill1}</div>
                        <div className="skill-content">
                            {level1 === "" ? `${percent1 * 100}%` : level1}
                        </div>
                    </div>
                    <div
                        className="skill-percent"
                        style={{ width: `${percent1 * 100}%` }}
                    ></div>
                </div>
                <div className="skill-item">
                    <div className="skill">
                        <div className="skill-name">{skill2}</div>
                        <div className="skill-content">
                            {level2 === "" ? `${percent2 * 100}%` : level2}
                        </div>
                    </div>
                    <div
                        className="skill-percent"
                        style={{ width: `${percent2 * 100}%` }}
                    ></div>
                </div>
            </div>
        </>
    );
}
