import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, del, addTodoProps,dark }) => {
  console.log(list);
  return (
    <div className="todomenu" class=" flex justify-center my-5">
      <div className={`listTodos bg-indigo-100 w-[300px] md:w-[400px] p-2.5 flex flex-col gap-1.5 justify-start items-center min-h-[300px] rounded-md ${dark?'bg-indigo-950':''}`}>
        {/* hover:bg-indigo-900 */}
        {list.map((d, i) => (
          <TodoItem
            key={i}
            index={i}
            title={d.head}
            desc={d.desc}
            done={d.done}
            del={del}
            addTodoProps={addTodoProps}
            dark={dark}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

// title={d.heading} descp={d.descr}
