import React, { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import S from "./PickerWrapper.module.scss";

export default function PickerWrapper({ children, closeCB }) {
    const wrapperRef = useRef(null);
    useClickOutside(wrapperRef, closeCB);

    return (
        <div
            className={`${S.container} PickerWrapper_container`}
            ref={wrapperRef}
        >
            {children}
        </div>
    );
}
