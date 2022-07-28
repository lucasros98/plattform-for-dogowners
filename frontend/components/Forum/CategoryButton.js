import React from "react";
import Dropdown from "@/components/Buttons/Dropdown";


export default function CategoryButton({text,setFilter }) {

  return (
    <button type="button" onClick={() => setFilter(text)}className="mt-4 text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2  ">{text}</button>
  );
}
