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
    const newTodoList = todoList.slice();
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleOnChange = (e) => {
    console.log("onChange", e.target.vallue);
    setTodoList([
      ...todoList,
      {
        title: e.target.value,
        id: `${+(todoList[todoList.length - 1].id || 0) + 1}`,
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
