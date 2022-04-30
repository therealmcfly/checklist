function Item({ index, content }) {
  return (
    <li>
      {index + 1}. {content}
    </li>
  );
}

function ListOfItems({ list }) {
  return list.map((item, i) => (
    <Item key={item.key} index={i} content={item.content} />
  ));
}
export default ListOfItems;
