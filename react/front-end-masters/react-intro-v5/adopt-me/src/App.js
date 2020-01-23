const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
        
    ])
}

const App = () =>{
    return React.createElement(
        "div",
        { id: "something-id"},
        [
            React.createElement("h1",{},"Adopt Me!"),
            React.createElement(Pet, {name: "milo", animal: "dog", breed: "street"}),
            React.createElement(Pet, {name: "laika", animal: "dog", breed: "street"}),
            React.createElement(Pet, {name: "fiona", animal: "cat", breed: "street"})
        ]
    )
}

ReactDOM.render(
    React.createElement(App), 
    document.getElementById("root")
);