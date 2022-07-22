import React from "react";
import Link from "@/components/Link"

export default function Comment({body,date,author }) {

  return (

        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
          <small>{new Date(date).toLocaleString()}</small>
          <div className="mt-3">{body}</div>
          </div>
  
  );
}
