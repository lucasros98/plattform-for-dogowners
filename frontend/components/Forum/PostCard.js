import React from "react";
import Link from "@/components/Link"

export default function PostCard({ id, title, body,date,nrOfComments }) {

  return (
    <Link href={"/forum/" + id} className="mb-6 block p-4 w-full bg-white rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 ">
      <div className="sm:flex">
        <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
        <small className="font-small text-gray-500 mb-2 ">Publicerad {new Date(date).toLocaleDateString()}</small>

        <p className="font-normal text-gray-700 my-3">{body.length > 150 ? body.substring(0,150) + "..." :body}</p>
     
        </div>
        <div className="ml-auto sm:text-center">
          <p className="text-gray-600 ml-auto hidden sm:block">
            {nrOfComments || "0"} kommentarer
          </p>
        <button type="button" className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2  mt-auto ">Till inlägget →</button>

        </div>
      </div>
    </Link>
  );
}
