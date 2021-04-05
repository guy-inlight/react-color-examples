import React from "react";
import S from "./PremadePickers.module.scss";
import {
    HuePicker,
    BlockPicker,
    ChromePicker,
    CirclePicker,
    CompactPicker,
    GithubPicker,
    MaterialPicker,
    PhotoshopPicker,
    SketchPicker,
    SliderPicker,
    SwatchesPicker,
    TwitterPicker,
} from "react-color";
import ColorSelector from "../ColorSelector/ColorSelector";

const pickers = {
    HuePicker,
    BlockPicker,
    ChromePicker,
    CirclePicker,
    CompactPicker,
    GithubPicker,
    MaterialPicker,
    PhotoshopPicker,
    SketchPicker,
    SliderPicker,
    SwatchesPicker,
    TwitterPicker,
};

export default function PremadePickers() {
    return (
        <div className={S.container}>
            <h1>Premade Pickers</h1>
            <div className={S.allPickers}>
                {Object.entries(pickers).map(
                    ([pickerName, pickerComponent]) => (
                        <div
                            className={`${S.picker} ${pickerName}-component`}
                            key={pickerName}
                        >
                            <h2>{pickerName.replace("Picker", " Picker")}</h2>
                            <ColorSelector picker={pickerComponent} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
