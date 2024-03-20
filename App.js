const heading=React.createElement(
    "h1",
    {id:"head"},
    "Hi from React"
    );


const root=ReactDOM.createRoot(document.getElementById("root"));


const parent=React.createElement
("div",{id:"parent"},[
React.createElement("div",{id:"child-1"},
[React.createElement("h1",{id:"sib-1"},"Im Sib-1"),
React.createElement("h1",{id:"sib-2"},"Im Sib-2"),]),
React.createElement("div",{id:"child-2"},
[React.createElement("h1",{id:"sib-1"},"Im Sib-1"),
React.createElement("h1",{id:"sib-2"},"Im Sib-2"),]),
]);

console.log(parent);
root.render(parent); 