const { render, useState, useEffect } = window.MiniReact;

function ToDo() {
  const [todoList, setTodoList] = useState([
    {
      title: "Play Game",
      id: "1",
    },
    {
      title: "Stduy Math",
      id: "2",
    },
  ]);

  const handleDelete = (index) => {
    setTodoList((preState) => {
      return [...preState.splice(index, 1)];
    });
  };

  const handleOnChange = (e) => {
    setTodoList([
      ...setTodoList,
      {
        title: e.target.value,
        id: `${+setTodoList[setTodoList.length - 1].id + 1}}`,
      },
    ]);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <ul>
        {todoList.map((item, index) => {
          return (
            <li key={item.id}>
              <p>{item.title}</p>
              <button onClick={() => handleDelete(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>加一</button>
      <ToDo />
    </div>
  );
}

render(<App />, document.getElementById("root"));
