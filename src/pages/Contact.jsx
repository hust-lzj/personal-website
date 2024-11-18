import React from "react";

export default function Contact() {
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
            <div className="content-board" id="content-board">
                <div className="contact-item">
                    <span></span>
                </div>
            </div>
        </>
    );
}
