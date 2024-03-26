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
