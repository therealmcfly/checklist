import Button from "./Button";

function Item({ id, index, content, onDelete }) {
  const handleDeleteItem = () => onDelete(id);
  return (
    <>
      <li key={id}>
        {index + 1}. {content}
      </li>
      <Button onClick={handleDeleteItem}>x</Button>
    </>
  );
}

function ListOfItems({ list, onDelete }) {
  return list.map((item, i) => (
    <>
      <Item id={item.id} index={i} content={item.content} onDelete={onDelete} />
    </>
  ));
}
export default ListOfItems;
