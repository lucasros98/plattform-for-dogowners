import React from "react";
import Link from "@/components/Link"
import Dropdown from "@/components/Buttons/Dropdown";


export default function Comment({ body, date,hidden, author, isOwner, hideComment,id }) {

  if(hidden) {
    return  ( 
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
    <div className="flex">
      <h5 className="font-bold">Bortagen kommentar</h5>
   
    </div>
    <small>Publicerad {new Date(date).toLocaleString()}</small>
    <div className="mt-4 italic">Denna kommentaren har gömts av författaren.</div>
  </div>)
  }

  return (

    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex">
        <h5 className="font-bold">Av {author}</h5>
        {isOwner && <div className="ml-auto">
          <Dropdown>
            <button className="w-full text-gray-700 block px-4 py-2 text-sm text-start hover:bg-gray-100" onClick={(e) => hideComment(id)}>Göm kommentar</button>

          </Dropdown>
        </div>}
      </div>
      <small>Publicerad {new Date(date).toLocaleString()}</small>
      <div className="mt-4">{body}</div>
    </div>

  );
}
