import "./css/TodoInput.css";
import { useTodo } from "../Store/Provider";
import { FormEvent, useState } from "react";

//~ generate alphabet id

const generateId = () => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let pass: string = "";

  const num1 = Math.floor(Math.random() * alphabets.length + 1);
  const num2 = Math.floor(Math.random() * alphabets.length + 1);
  const num3 = Math.floor(Math.random() * alphabets.length + 1);

  pass += alphabets.charAt(num1);
  pass += alphabets.charAt(num2);
  pass += alphabets.charAt(num3);

  return pass;
};

const TodoInput = () => {
  const { addTodo } = useTodo();

  const [todoTitle, setTodoTitle] = useState<string>("");

  //` form handling
  const formHandller = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todoTitle !== "") {
      //` create unique Id
      let todoId: string = generateId();
      todoId += Math.floor(Math.random() * 1500 + 1);

      //` create date
      const date = new Date();

      addTodo({
        id: todoId,
        title: todoTitle,
        status: false,
        date: date.toLocaleDateString()
      });

      setTodoTitle("");
    } else {
      alert("Please create or write a task first");
    }
  };

  return (
    <form className="form" onSubmit={formHandller}>
      <h1 className="heading">Todo + Type Lv2</h1>

      <div className="todo-section">
        <input
          type="text"
          onChange={(e) => setTodoTitle(e.target.value)}
          className="todoInput"
          value={todoTitle}
        />
        <button className="submit">Submit</button>
      </div>
    </form>
  );
};

export default TodoInput;
