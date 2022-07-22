import React from "react";
import Link from "@/components/Link"

export default function Comment({body,date,author }) {

  return (

        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
          <h5 className="font-bold">Av {author}</h5>
          <small>Publicerad {new Date(date).toLocaleString()}</small>
          <div className="mt-4">{body}</div>
          </div>
  
  );
}
