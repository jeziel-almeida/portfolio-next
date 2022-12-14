import Head from "next/head";
import { useState } from "react";

import NavBar from "../components/NavBar";
import Portfolio from "../components/Portfolio";
//import Services from "../components/Services";


export default function Home() {

	const [darkMode, setDarkMode] = useState(false)


	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Jeziel Almeida</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/letraj.png" />
			</Head>

			<main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">

				<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

				{/*
        		<Services />
	      		*/}

				<Portfolio />

			</main>
		</div>
	)
}