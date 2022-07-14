import React from "react";
import Link from "next/link";

export default function Footer(props) {
  return (
    <footer className="text-gray-600 body-font border-t">
      <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 ">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="text-xl">Hundvalpen</span>
          </div>
          <p className="mt-2 text-sm text-gray-500">En plattform för att hjälpa nya hundägare med sin valp.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 md:text-left text-center order-first">
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">Innehåll</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={"/"} className="text-gray-600 hover:text-gray-800">Hem</Link>
              </li>
              <li>
                <Link href={"/forum"} className="text-gray-600 hover:text-gray-800">Forum</Link>
              </li>
              <li>
                <Link href={"/quiz"} className="text-gray-600 hover:text-gray-800">Quiz</Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">Andra länkar</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={"/om"} className="text-gray-600 hover:text-gray-800">Om oss</Link>
              </li>
          
              <li>
                <Link href="/login" className="text-gray-600 hover:text-gray-800">Logga in</Link>
              </li>
              <li>
                <Link href="/signup" className="text-gray-600 hover:text-gray-800">Skapa konto</Link>
              </li>
          
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 —
            <Link href="/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Hundvalpen</Link>
          </p>

        </div>
      </div>
    </footer>
  );
}
