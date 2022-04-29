function Button({children, id, onClick}) {
    return(
        <button id={id} onClick={onClick}>{children}</button>
    )
};

export default Button;