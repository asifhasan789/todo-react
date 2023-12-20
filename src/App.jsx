import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "remixicon/fonts/remixicon.css";

function App() {
  let tt;

  let [todos, setTodos] = useState([]);
  let [dark,setDark] = useState(false)
  // let [check,setCheck] = useState(false)

  useEffect(() => {
    
    tt = JSON.parse(localStorage.getItem("data")) || [];
    console.log("before useState", tt);
    setTodos(tt);

  }, []);

  console.log(todos);

  useEffect(() => {
    console.log("useEffect :", todos);
    console.log(dark);
    tt = [...todos];
    localStorage.setItem("data", JSON.stringify(tt));
  }, [todos,dark]);

  function alterArray(obj) {
    console.log('obj got',obj);
    tt.push(obj);
    setTodos([...todos, obj]);
    console.log(todos);
  }

  function delTodo(ki) {
    console.log("deleted :", tt.splice(ki, 1), ki);
    tt = [...todos];
    tt.splice(ki, 1);
    console.log(tt);
    setTodos(tt);
    console.log("after del", todos);
  }
  function saveCheck(ch,ki){
    // setCheck(ch)
    console.log(ch);
    tt = [...todos];
    tt[ki].done = ch;
    setTodos(tt)
  }

  return (
    <div className={`min-h-[100dvh] pb-5 ${dark ? "bg-black" : ""}`}>
      {/* style={{ minHeight: "100dvh", paddingBottom: "20px" }} */}
      {/* ${dark ? "bg-black" : ""} */}
      <button
        className={`px-2 py-1 m-2 top-20 hover:bg-indigo-700 bg-indigo-800 text-indigo-100 absolute rounded-full ${
          dark ? "b" : ""
        }`}
        onClick={() => {
          setDark(!dark);
          console.log(dark);
        }}
      >
        
        <i class={`${dark ?'ri-sun-line':"ri-moon-line"}`}></i>
      </button>
      <Header dark={dark} />
      <TodoInput addTodoProps={alterArray} dark={dark} />
      {todos.length > 0 ? (
        <TodoList
          list={todos}
          del={delTodo}
          addTodoProps={saveCheck}
          dark={dark}
        />
      ) : (
        <h1
          className={`text-center mt-4 font-semibold ${
            dark ? "text-indigo-300" : ""
          }`}
        >
          No Todo's Available
        </h1>
      )}
    </div>
  );
}

export default App;
