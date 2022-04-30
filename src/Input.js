function Input({children, id, type, value, onChange, onKeyDown}) {
    return ( 
        <input id={id} type={type} value={value} onChange={onChange} onKeyDown={onKeyDown}></input>
    )
}

export default Input;