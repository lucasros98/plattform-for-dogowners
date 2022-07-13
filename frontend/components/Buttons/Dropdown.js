import { useEffect, useState } from "react"

export default function Dropdown({ children, dropDownClass = "" }) {

    const [show, setShow] = useState(false)

    const handleClick = (event) => {
        setShow(!show);
    }

    const handleBlur = (event) => {
        console.log('event.relatedTarget', event.relatedTarget);
        if (!event.currentTarget.contains(event.relatedTarget)) {
          if (show) {
            setShow(false);
          }
        }
      }

    return (
        <div className={"relative inline-block text-left " + dropDownClass} onBlur={handleBlur}>
            <button onClick={handleClick} type="button" aria-expanded={show} aria-controls="id-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
            </button>

            {show && <div aria-controls="id-container" className="py-1 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    {children}
            </div>}
        </div>
    );
}


