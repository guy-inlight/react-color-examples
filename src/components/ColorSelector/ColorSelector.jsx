import React, { useState } from "react";
import PickerWrapper from "../PickerWrapper/PickerWrapper";
import S from "./ColorSelector.module.scss";

export default function ColorSelector({ picker, onChange }) {
    const [selectedColor, setSelectedColor] = useState("#c322d1");
    const [pickerIsOpen, setPickerIsOpen] = useState(false);

    const cssVars = {
        "--swatch-color": selectedColor,
    };

    function openPicker() {
        setPickerIsOpen(true);
    }

    function closePicker() {
        setPickerIsOpen(false);
    }

    function colorChanged(newColor) {
        setSelectedColor(newColor.hex);
        onChange && onChange(newColor);
    }

    const Picker = picker;

    return (
        <div className={S.container} onClick={openPicker}>
            <div className={S.swatch} style={cssVars}></div>
            <h3 className={S.label}>{selectedColor}</h3>
            <div className={S.picker}>
                {pickerIsOpen ? (
                    <PickerWrapper closeCB={closePicker}>
                        <Picker
                            color={selectedColor}
                            onChangeComplete={colorChanged}
                        />
                    </PickerWrapper>
                ) : null}
            </div>
        </div>
    );
}
