export const SvgIcon = (props) => (
    <svg
        width={props.width}
        height={props.height}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        fill={props.fill}
        {...props}
        className={props.className}
    >
        <use
            xlinkHref={`#${props.id}`}
        />
    </svg>
);
