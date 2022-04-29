import './App.css';
import { useState } from 'react';

import Button from './Button';
import Input from './Input';


function TodoList() {
    const initialList = ['shower', 'dishes'];
    
    const [list, setList] = useState(
        initialList.map((item) => (<li>{item}</li>))
    );

    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value)
    };

    function addItemToList() {
        const newItem = (<li>{inputValue}</li>);
        const updatedList = [...list, newItem];
        setList(updatedList);
        setInputValue('');
    };

    return (
        <div id="listContainer">
            <h3>Things to Do...</h3>
            <ul id="todoList">
                { list }
            </ul>
            
            <Input id="textInput" type="text" value={inputValue} onChange={handleChange}></Input>
            <Button id="inputBtn" onClick={addItemToList}>입력</Button>
            <div id="buttonContainer">
                <Button>선택 삭제</Button>
                <Button>Done 삭제</Button>
            </div>
        </div>
    );
};

export default TodoList;