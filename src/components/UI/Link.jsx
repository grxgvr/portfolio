export const Link = ({
    className = "",
    href,
    hash,
    target = "_blank",
    text,
    onClick,
}) => (
    <a
        className={`bg-transparent ${className}`}
        href={href}
        hash={hash}
        target={target}
        onClick={onClick}
    >
        {text}
    </a>
);
