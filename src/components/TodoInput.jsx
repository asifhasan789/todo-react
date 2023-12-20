// import { handle } from 'express/lib/application';
import { useState,useRef } from "react";
import React from "react";

// let writeTodo = {
//   heading:input,
//   descr:inputd
// };

export const TodoInput = ({ addTodoProps, dark }) => {
  let [input, setInputVal] = useState("");
  let [inputd, setInputdVal] = useState("");

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  // let datat
  // let datad

  // let writeTodo = {
  //   'heading': input,
  //   'descr': inputd,
  // };

  function getInput(e) {
    if (e.target.placeholder == "Enter the Todo Title") {
      // writeTodo.heading = e.target.value;
      setInputVal(e.target.value);
      // writeTodo.heading = input
    } else {
      // writeTodo.descr = e.target.value;
      setInputdVal(e.target.value);
      // writeTodo.descr = inputd
    }
  }

  return (
    <div class="flex flex-col justify-center items-center gap-2 mt-4">
      <input
        type="text"
        ref={firstInputRef}
        class={`bg-indigo-200 p-2 w-[300px] md:w-[400px]  text-center rounded-lg text-slate-800 placeholder-slate-600 outline-slate-500 font-semibold ${
          dark ? "bg-indigo-950 text-zinc-100" : ""
        }`}
        // hover:bg-indigo-950 hover:text-zinc-100
        placeholder="Enter the Todo Title"
        value={input}
        onChange={(e) => {
          setInputVal(e.target.value);
          // writeTodo.heading = e.target.value;
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            secondInputRef.current.focus();
          }
        }}
      />
      <textarea
        ref={secondInputRef}
        name=""
        id=""
        cols="30"
        rows="5"
        class={`bg-indigo-200  rounded-lg text-center placeholder-slate-600 p-2 overflow-hidden resize-none w-[300px] md:w-[400px] outline-slate-500 m-3 font-semibold ${
          dark ? "bg-indigo-950 text-zinc-100" : ""
        }`}
        // hover:bg-indigo-950 hover:text-zinc-100
        placeholder="Enter Description Here !"
        value={inputd}
        onChange={(e) => {
          setInputdVal(e.target.value);
          // writeTodo.descr = e.target.value;
        }}
        onKeyUp={(e) => {
          if (e.key == "Enter") {
            e.preventDefault;
            if (input == "" && inputd == "") {
              alert("First Enter Something in Input");
            } else {
              addTodoProps({ head: input, desc: inputd, done: false });
              setInputVal("");
              setInputdVal("");
            }
          }
        }}
      ></textarea>
      <button
        class={`px-4 py-1 bg-indigo-600 rounded-xl text-white hover:bg-indigo-800 ${dark?'bg-indigo-900':''}`}
        // class="px-4 py-1 bg-indigo-900 rounded-xl text-white hover:bg-indigo-800"
        onClick={() => {
          if (input == "" && inputd == "") {
            alert("First Enter Something in Input");
          } else {
            addTodoProps({ head: input, desc: inputd, done: false });
            setInputVal("");
            setInputdVal("");
          }
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
