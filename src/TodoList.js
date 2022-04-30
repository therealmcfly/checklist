import "./App.css";
import { useState } from "react";

import ListOfItems from "./ListOfItems";

import Button from "./Button";
import Input from "./Input";

function TodoList() {
  const initialList = [];
  const [list, setList] = useState(initialList);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function addItemToList() {
    if (inputValue) {
      const newItem = { key: list.length + 1, content: inputValue };
      setList([...list, newItem]);
      setInputValue("");
    }
  }

  function enterAddItemToList(e) {
    if (e.key === "Enter") {
      addItemToList();
    }
  }

  return (
    <div id="listContainer">
      <h3>Things to Do...</h3>
      <ul id="todoList">
        <ListOfItems list={list} />
      </ul>
      <div id="buttonContainer">
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={enterAddItemToList}
        />
        <Button onClick={addItemToList}>입력</Button>
        <Button>선택 삭제</Button>
        <Button>Done 삭제</Button>
      </div>
    </div>
  );
}

export default TodoList;
