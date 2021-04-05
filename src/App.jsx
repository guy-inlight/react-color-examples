import React from "react";
import S from "./App.module.scss";
import PremadePickers from "./components/PremadePickers/PremadePickers";
import SeparateAlphaPicker from "./components/SeparateAlphaPicker/SeparateAlphaPicker";

export default function App() {
    return (
        <div className={S.container}>
            <PremadePickers />
            <div className={S.separator}></div>
            <SeparateAlphaPicker />
        </div>
    );
}
