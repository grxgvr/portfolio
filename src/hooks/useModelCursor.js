import {useCursor} from "@react-three/drei";
import {useState} from "react";

export const useModelCursor = () => {
    const hover = useState(false);
    useCursor(hover[0]);

    return hover;
};
