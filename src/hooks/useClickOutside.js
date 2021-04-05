import { useEffect } from "react";

export default function useClickOutside(ref, cb) {
    useEffect(() => {
        function checkClickOutside(ev) {
            if (ref.current && !ref.current.contains(ev.target)) {
                cb();
            }
        }

        document.addEventListener("mousedown", checkClickOutside);

        return () => {
            document.removeEventListener("mousedown", checkClickOutside);
        };
    }, [ref]);
}
