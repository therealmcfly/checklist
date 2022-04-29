function Input({children, id, type, value, onChange}) {
    return ( 
        <input id={id} type={type} value={value} onChange={onChange}></input>
    )
}

export default Input;