export function Todos({ todos }) {
    console.log(`This is the todos in todo.jsx  : ${todos}`);
    if (!Array.isArray(todos)) {
        {
            console.log("todo is not array")
        }
    }
    return (
        <div>
        {todos.length > 0 ? (
            todos.map((element) => {
                return (
                    <div key={element.id}>
                        <h1>{element.title}</h1>
                        <h2>{element.description}</h2>
                        <button>{element.completed ? "Completed" : "Not Completed"}</button>
                    </div>
                );
            })
        ) : (
            <p>No todos available</p>
        )}
    </div>
    );
}


