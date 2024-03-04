import {getCurrentHash, scrollById} from "../../hooks/useApp";

export const NavigationItem = ({id, text, hash, isSide}) => {
    if (isSide)
        return (
            <li className="text-3xl h-fit w-[20%]  text-base-white-700 hover:text-base-white-850 transition-transform translate-y-6 hover:translate-y-0">
                {/* <button
            className="w-fit border-none bg-transparent text-3xl text-base-white-700 hover:text-base-white-800 hover:underline hover:scale-105 transition-all"
            onClick={() => onClick(id)}
        >
            {text}
        </button> */}
                <a
                    href={hash}
                    className="navlink inline-block text-center w-full overflow-clip relative cursor-pointer"
                >
                    {text}
                </a>
            </li>
        );

    return (
        <li className="text-base-white-700 hover:text-base-white-850 hover:scale-110 transition-transform">
            {/* <button
                className="w-fit border-none bg-transparent text-3xl text-base-white-700 hover:text-base-white-800 hover:underline hover:scale-105 transition-all"
                onClick={() => onClick(id)}
            >
                {text}
            </button> */}
            <a
                href={hash}
                onClick={() => {
                    // console.log(getCurrentHash() === hash);
                    if (`#${getCurrentHash()}` === hash) scrollById(id);
                }}
                aria-label={`Scroll to ${text} section`}
                className="navlink w-fit overflow-clip relative cursor-pointer whitespace-nowrap text-xl lg:text-3xl"
            >
                {text}
            </a>
        </li>
    );
};
