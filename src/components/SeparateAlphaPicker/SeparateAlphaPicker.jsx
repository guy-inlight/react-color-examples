import React, { useState } from "react";
import { AlphaPicker, CirclePicker } from "react-color";
import ColorSelector from "../ColorSelector/ColorSelector";
import S from "./SeparateAlphaPicker.module.scss";

export default function SeparateAlphaPicker() {
    const [selectedColor, setSelectedColor] = useState(
        "rgba(100, 200, 50, 1.00)"
    );

    const selectedColorStyle = {
        "--selected-color": selectedColor,
    };

    function colorSelected(newColor) {
        setSelectedColor(toRGBA(newColor));
    }

    return (
        <>
            <h1>Separate Alpha Control</h1>
            <div className={S.container}>
                <div>
                    <ColorSelector
                        picker={CirclePicker}
                        onChange={colorSelected}
                    />
                    <AlphaPicker
                        onChangeComplete={colorSelected}
                        color={selectedColor}
                    />
                </div>
                <div>
                    selected color:
                    <h3>{selectedColor}</h3>
                    <div className={S.selectedColorWrapper}>
                        <img src="https://www.iconsdb.com/icons/preview/black/delete-xxl.png" />
                        <div
                            className={S.selectedColor}
                            style={selectedColorStyle}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}

function toRGBA(color) {
    const { r, g, b, a } = color.rgb;
    return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
}
