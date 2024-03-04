export const splitType = (id, tl, config) => {
    const element = document.getElementById(id);
    if (window.SplitType) {
        const {chars} = new SplitType(element, {
            types: "chars",
        });

        tl.from(chars, config);
    } else {
        tl.from(element, config);
    }
};
