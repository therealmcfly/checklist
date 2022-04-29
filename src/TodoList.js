import './App.css';
import { useState } from 'react';


function TodoList() {
    const initialList = ['shower', 'dishes'];
    const [list, setList] = useState(
        initialList.map((item) => (<li>{item}</li>))
    );
    const [inputValue, setInputValue] = useState('');

    function HandleChange(e) {
        setInputValue(e.target.value)};

    function itemAdder() {
        const newItem = (<li>{inputValue}</li>);
        const updatedList = [...list, newItem];
        setList(updatedList);
        setInputValue('');
    }
    return (
        <>
        <div id="listContainer">
            <h3>Things to Do...</h3>
            <ul id="todoList">
                { list }
            </ul>
            
            <input id="textInput" type="text" value={inputValue} onChange={HandleChange}></input>
            <button id="inputBtn" onClick ={ itemAdder }>입력</button>
            <div id="buttonContainer">
                <button>선택 삭제</button>
                <button>Done 삭제</button>
            </div>
        </div>
        </>
    );
};


export default TodoList;