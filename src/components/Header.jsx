import React from "react";

const Header = ({dark}) => {
  return (
    <h1 class={`text-xl font-bold text-indigo-100 bg-indigo-900 text-center py-3 ${dark?'bg-indigo-950 text-indigo-100':''}`}>
      {/* hover:bg-indigo-950 hover:text-indigo-100 */}
      TODO APP 
    </h1>
  );
};

export default Header;
