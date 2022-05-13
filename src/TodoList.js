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
      const newItem = { id: list.length + 1, content: inputValue };
      setList((currentList) => [...currentList, newItem]);
      setInputValue("");
    }
  }

  function enterAddItemToList(e) {
    if (e.key === "Enter") {
      addItemToList();
    }
  }

  function deleteItem(id) {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  }

  return (
    <div id="listContainer">
      <h3>Things to Do...</h3>
      <ul id="todoList">
        <ListOfItems list={list} onDelete={deleteItem} />
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
