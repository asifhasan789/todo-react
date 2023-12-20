import React,{useState} from 'react'

const TodoItem = ({
  title,
  desc,
  del,
  index,
  done,
  addTodoProps,
  dark
}) => {
  const [isChecked, setIsChecked] = useState(done);

  const handleCheckboxChange = () => {
    console.log('in item chk',isChecked);
    addTodoProps(!isChecked,index)
    setIsChecked(!isChecked);
  };

  console.log(title);
  return (
    <div
      className="todo"
      class={`flex gap-3 items-center justify-between bg-indigo-200 rounded-lg p-1.5 hover:bg-indigo-200 w-[100%] h-auto ${dark?'bg-indigo-700 text-indigo-50 hover:bg-indigo-900':''}`}
      // hover:bg-indigo-950 hover:text-indigo-50
    >
      <div className="todoTxt flex items-center gap-5 text-">
        <input
          style={{ borderRadius: "50%" }}
          checked={isChecked}
          onChange={handleCheckboxChange}
          type="checkbox"
          name=""
          id=""
          class="w-3 h-3 accent-indigo-300 hover:accent-indigo-600 "
        />
        <div
          className={`w-[170px] md:w-[269px] ${
            isChecked ? "line-through" : ""
          }`}
        >
          <h2 class=" font-semibold break-words">{title}</h2>
          <p className="break-words">{desc}</p>
        </div>
      </div>
      <button
        class={`bg-indigo-800 px-1.5 py-0.5 rounded-md text-white float-right ${dark?'bg-indigo-600':''}`}
        // hover:bg-indigo-600
        onClick={() => {
          del(index);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default TodoItem

// {
//   title, descp, del, key, index;
// }