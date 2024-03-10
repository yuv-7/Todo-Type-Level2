import { createContext } from "react";

export type todoType = {
    id:string,
    title:string,
    status:boolean,
    date:string
}

interface storeType{
    todos:todoType[],
    addTodo:(todo:todoType)=>void,
    deleteTodo:(id:string)=>void,
    deleteAllTodo:()=>void,
    updateStatus:(id:string)=>void
}


//~ This syntax we can use when we don't provide any null data type like above code.
export const Store = createContext<storeType>({
    todos:[],
    addTodo:()=>{},
    deleteTodo:()=>{},
    deleteAllTodo:()=>{},
    updateStatus:()=>{}
})