"use strict";
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
    return (MiniReact.createElement("div", null,
        MiniReact.createElement("input", { type: "text", onChange: handleOnChange }),
        MiniReact.createElement("ul", null, todoList.map((item, index) => {
            return (MiniReact.createElement("li", { key: item.id },
                MiniReact.createElement("p", null, item.title),
                MiniReact.createElement("button", { onClick: () => handleDelete(index) }, "X")));
        }))));
}
function App() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount((count) => count + 1);
    }
    return (MiniReact.createElement("div", null,
        MiniReact.createElement("p", null, count),
        MiniReact.createElement("button", { onClick: handleClick }, "\u52A0\u4E00"),
        MiniReact.createElement(ToDo, null)));
}
render(MiniReact.createElement(App, null), document.getElementById("root"));
