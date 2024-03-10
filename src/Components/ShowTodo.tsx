import { useTodo } from "../Store/Provider";

import "./css/ShowTodo.css";

const ShowTodo = () => {
  const { todos, deleteTodo, updateStatus } = useTodo();

  const handleCheckStatus = (id: string) => {

    const todoTitle = document.querySelector(`.${id}`) as HTMLParagraphElement;

    //` jehetu amra if er modhhe todo-status ke update korechi, tai todos update hobe component next time mount hoyar somoy

    updateStatus(id);
    todos.map(todo =>{
      if(todo.id === id) !todo.status ? todoTitle.setAttribute("class",`${id} strike`) : todoTitle.setAttribute("class",`${id} `)
    })
    
  };

  return (
    <div className="container">
      <div className="task-header">
        <span id="all">All</span>
        <span id="active">Active</span>
        <span id="completed">Completed</span>
      </div>

      {todos.length != 0 ? (
        <div className="todos-container">
          {todos.map((todo) => (
            <div className="todo" key={todo.id}>
              <div className="left-todo-side">
                <input
                  type="checkbox"
                  checked={todo.status}
                  onChange={() => handleCheckStatus(todo.id)}
                  id={`${todo.id}`}
                />
                <p className={`${todo.id}`}>{todo.title}</p>
              </div>

              <div className="right-todo-side">
                {todo.status && (
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="demoTitle">No Todo Yet</h2>
      )}
    </div>
  );
};

export default ShowTodo;
