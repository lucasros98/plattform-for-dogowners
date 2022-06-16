import Link from "next/link";

export default function Footer() {

    return (
        <footer  className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span  className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Skaffa hundvalp. All Rights Reserved.
        </span>
        <ul  className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <Link href="/forum"  className="mr-4 hover:underline md:mr-6">Forum</Link>
            </li>
            <li>
                <Link href="/quiz"  className="mr-4 hover:underline md:mr-6 ">Quiz</Link>
            </li>
            <li>
                <Link href="/about"  className="mr-4 hover:underline md:mr-6">Om oss</Link>
            </li>
        </ul>
    </footer>
    )
}