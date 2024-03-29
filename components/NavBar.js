import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

import devjeziel from "../public/devjeziel.png";



export default function NavBar({ darkMode, setDarkMode }) {

    const [lightIcon, setLightIcon] = useState(false)

    return (
        <section className="min-h-screen">
            <nav className="py-10 mb-4 flex justify-between items-center dark:text-white">
                
                <h1 className="text-xl font-burtons">
                    <span className="hover:text-2xl">J</span>
                    <span className="hover:text-2xl">E</span>
                    <span className="hover:text-2xl">Z</span>
                    <span className="hover:text-2xl">I</span>
                    <span className="hover:text-2xl">E</span>
                    <span className="hover:text-2xl">L</span>
                </h1>


                <ul className="flex items-center">
                    {!lightIcon
                        ?
                        <li className="transition duration-500 hover:scale-110">
                            <MdDarkMode onClick={() => {
                                setDarkMode(!darkMode);
                                setLightIcon(true);
                            }} className="cursor-pointer text-2xl" />
                        </li>
                        :
                        <li className="transition duration-500 hover:scale-110">
                            <MdLightMode onClick={() => {
                                setDarkMode(!darkMode);
                                setLightIcon(false);
                            }} className="cursor-pointer text-2xl" />
                        </li>
                    }
                    <li>
                        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 flex items-center transition duration-500 ease-in-out hover:scale-110 hover:bg-gradient-to-l">
                            <FiDownload />
                            <a className="ml-2" href="../public/CurriculoJeziel.pdf" download>Currículo</a>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400" id="AnimatedTitle">Jeziel Almeida</h2>
                <h3 className="text-2xl py-2 md:text-1xl dark:text-white">Developer and Designer</h3>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">Estudando programação e, atualmente, no 4º período de Análise e Desenvolvimento de Sistemas.</p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="https://twitter.com/barrosjeziel" target="_blank" rel="noreferrer"><AiFillTwitterCircle className="cursor-pointer hover:text-teal-600 transition duration-300 ease-in-out hover:scale-110" /></a>
                <a href="https://www.linkedin.com/in/jeziel-almeida-352252147" target="_blank" rel="noreferrer"><AiFillLinkedin className="cursor-pointer hover:text-teal-600 transition duration-300 ease-in-out hover:scale-110" /></a>
                <a href="https://github.com/jeziel-almeida" target="_blank" rel="noreferrer"><AiFillGithub className="cursor-pointer hover:text-teal-600 transition duration-300 ease-in-out hover:scale-110" /></a>
            </div>

            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-20 overflow-hidden md:h-96 md:w-96">
                <Image src={devjeziel} layout="fill" objectFit="cover" alt="dev" />
            </div>
        </section>
    )
}