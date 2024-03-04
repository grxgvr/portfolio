export const Button = ({className, onClick, text}) => {
    return (
        <button
            className="bg-transparent p-0 border-none text-base-green outline-none focus-visible:outline-none hover:scale-105"
            onClick={onClick}
        >
            {text}
        </button>
    );
};
