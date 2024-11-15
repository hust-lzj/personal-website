import { useState } from "react";
import "./App.css";
import Navbar from "@/components/Navbar";
import BusinessCard from "./components/BusinessCard";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container">
                <div className="pic-background"></div>
                <Navbar></Navbar>
                <div className="content">
                    <BusinessCard
                        avatar="/src/assets/images/avatar.jpg"
                        title="吕张杰的个人网站"
                        signature="天下没有远方，人间都是故乡"
                    ></BusinessCard>
                </div>
            </div>
        </>
    );
}

export default App;
