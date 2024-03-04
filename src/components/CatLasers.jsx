import React from "react";

const eyeOne = {
    x: window.innerWidth - 130,
    y: window.innerHeight - 218,
};

const eyeTwo = {
    x: window.innerWidth - 220,
    y: window.innerHeight - 232,
};

export function getAngleBetweenPoints(pointA, pointB) {
    const dX = pointB.x - pointA.x;
    const dY = pointB.y - pointA.y;
    const rad = Math.atan2(dY, dX);
    return radianToDegrees(rad);
}

export function radianToDegrees(rad) {
    return rad * (180 / Math.PI);
}

export function getLengthBetweenPoints(pointA, pointB) {
    // sqrt((x2 - x1)^2 + (y2 - y1)^2))
    return Math.sqrt(
        Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2),
    );
}

export const CatLasers = (target) => {
    return (
        <>
            <div
                id="laser1"
                style={{
                    width: `${getLengthBetweenPoints(eyeOne, target)}px`,
                    height: `${12}px`,
                    background: `linear-gradient(to bottom, red,  yellow,  red)`,
                    position: `fixed`,
                    left: `${eyeOne.x}px`,
                    top: `${eyeOne.y}px`,
                    zIndex: 10000,
                    pointerEvents: `none`,
                    borderRadius: "100px",
                    transformOrigin: `0 center`,
                    // display: isFiring ? "block" : "none",
                    // Set the rotation to be the angle between the eye and the target.
                    // For some reason we need to add 0.1deg, look into this magic number in the future.
                    transform: `rotate(${getAngleBetweenPoints(eyeOne, target) + 0.1}deg)`,
                }}
            />
            <div
                id="laser2"
                style={{
                    width: `${getLengthBetweenPoints(eyeTwo, {x: window.clientX, y: window.clientY})}px`,
                    height: `${12}px`,
                    background: `linear-gradient(to bottom, red,  yellow,  red)`,
                    position: `fixed`,
                    left: `${eyeTwo.x}px`,
                    top: `${eyeTwo.y}px`,
                    zIndex: 10000,
                    pointerEvents: `none`,
                    borderRadius: "100px",
                    transformOrigin: `0 center`,
                    // display: isFiring ? "block" : "none",
                    // Set the rotation to be the angle between the eye and the target.
                    // For some reason we need to add 0.1deg, look into this magic number in the future.
                    transform: `rotate(${getAngleBetweenPoints(eyeTwo, target) + 0.1}deg)`,
                }}
            />
        </>
    );
};
