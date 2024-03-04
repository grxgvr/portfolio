export const isPrefersLessMotion = (cb) => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    cb(!!mediaQuery?.matches);
    mediaQuery.addEventListener("change", () => {
        cb(!!mediaQuery?.matches);
    });

    return () => {};
};
