export const Pill = ({text}) => {
    return (
        <div className="pill bg-background-main bg-opacity-[.75] text-base-green border-base-green border-[1px] md:border-2 rounded-full py-1 px-3 text-sm md:text-xl">
            {text}
        </div>
    );
};
