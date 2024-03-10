import { ReactNode, useContext, useState } from "react";
import { Store, todoType } from "./Store";

const Provider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<todoType[]>([]);

  // add Todo logic
  const addTodo = (todo: todoType) => {
    setTodos((prev) => [todo, ...prev]);
  };

  // delete Todo logic
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // delete all Todo logic
  const deleteAllTodo = () => {
    setTodos([]);
  };

  // todo.id === id ? (todo.status = !todo.status) : todo.status

  const updateStatus = (id: string) => {
    setTodos(prev => (
      prev.map(todo =>(
        todo.id === id ? {...todo,status : !todo.status} : todo
      ))
    ))
  };

  return (
    <Store.Provider value={{ todos, addTodo, deleteTodo, deleteAllTodo ,updateStatus}}>
      {children}
    </Store.Provider>
  );
};

export default Provider;

//` using this method we can use all value that store in our Store Context
export const useTodo = () => {
  const contextValue = useContext(Store);
  if (!useContext) {
    throw new Error("Please provide the context");
  }
  return contextValue;
};
