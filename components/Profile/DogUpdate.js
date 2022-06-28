import "moment"
import Link from "next/link"
import moment from "moment"

export default function DogUpdate({ dogs = [] }) {

    //get first dog in array
    const dog = dogs && dogs.length > 0 ? dogs[0] : false

    return (
            <div class="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg  w-full">
                <div class="flex mb-4">
                    <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <div class="ml-2 mt-0.5">
                        <span class="block font-medium text-base leading-snug text-black dark:text-gray-100">Loyce Kuvalis</span>
                        <span class="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">16 December at 08:25</span>
                    </div>
                </div>
                <p class="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div class="flex justify-between items-center mt-5">
                    <div class="flex ">
                        <span class="ml-1 text-gray-500 dark:text-gray-400  font-light">8</span>
                    </div>
                    <div class="ml-1 text-gray-500 dark:text-gray-400 font-light">33 comments</div>
                </div>
            </div>
    );
}
