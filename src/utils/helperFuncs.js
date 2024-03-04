export const debounce = (cb, timeout = 300) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            return cb(...args);
        }, timeout);
    };
};

export const throttle = (cb, delay) => {
    let lastTime = 0;

    return (...args) => {
        const now = new Date().getTime();
        if (now - lastTime < delay) return;

        lastTime = now;
        return cb(...args);
    };
};
