import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import LoginModal from "./LoginModal";
import { useAppContext } from '../contexts/AppContext';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [login, setLogin] = useState(false)
	const [loggedIn, setLoggedIn] = useState(false)

	const context = useAppContext();

	useEffect(() => {
		if (context.user) setLoggedIn(true)
	}, [context])

	return (
		<>
			<LoginModal visible={login} setVisible={setLogin} />
			<div>
				<nav className="shadow-sm w-full z-10 bg-white">
					<div className="w-full">
						<div className="flex items-center h-20 w-full">
							<div className="flex items-center px-4 sm:px-8 lg:px-16 xl:px-20 justify-between w-full">
								<div className="flex justify-center items-center flex-shrink-0 ">
									<h1 className="font-bold text-xl cursor-pointer">
										<Link href={"/"} className="text-black">Hund<span className="text-blue-500">valpen</span></Link>
									</h1>
								</div>
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4">
										{headerNavLinks.map((link) => (
											<Link
												key={link.title}
												href={link.href}
												smooth={"true"}
												offset={50}
												duration={500}
												className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
											>
												{link.title}
											</Link>
										))}
										{loggedIn ? <div className={"relative inline-block text-left profile-link"} >
											<Link
												href={"/profile"}
												smooth={"true"}
												offset={50}
												duration={500}
												className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
											>
												Profil
											</Link>
											<div aria-controls="id-container" className="hidden submenu py-1 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
												<Link href={"/settings"}>
													<button className="w-full text-gray-700 block px-4 py-2 text-sm text-start hover:bg-gray-100">Inställningar</button>
												</Link>
												<Link href={"/logout"}>
													<button className="w-full text-gray-700 block px-4 py-2 text-sm text-start hover:bg-gray-100">Logga ut</button>
												</Link>
											</div>
										</div>

											: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded-full" data-modal-toggle="authentication-modal" onClick={() => setLogin(true)}>Logga in</button>}

									</div>
								</div>
							</div>
							<div className="mr-4 flex md:hidden ">
								<button
									onClick={() => setIsOpen(!isOpen)}
									type="button"
									className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
									aria-controls="mobile-menu"
									aria-expanded="false"
								>
									<span className="sr-only">Open main menu</span>
									{!isOpen ? (
										<svg
											className="block h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									) : (
										<svg
											className="block h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>

					<Transition
						show={isOpen}
						enter="transition ease-out duration-100 transform"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="transition ease-in duration-75 transform"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						{(ref) => (
							<div className="md:hidden" id="mobile-menu">
								<div
									ref={ref}
									className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
								>
									{headerNavLinks.map((link) => (
										<Link
											key={link.title}
											href={link.href}
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
										>
											{link.title}
										</Link>
									))}
									{loggedIn ?
										<div>
														<Link
											href="/profile"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											key="profile"

										>
											Profil
										</Link>
										<Link
											href="/logout"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											key="profile"

										>
											Logga ut
										</Link>

										</div>
							 :
										<Link
											href="/login"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											key="login"

										>
											Logga in
										</Link>}


								</div>
							</div>
						)}
					</Transition>
				</nav>
			</div>
		</>
	);
}

export default Navbar;
