import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

import { Layout } from "./layout";
import { darkTheme, lightTheme } from "./styles/theme";

import stylesheet from "~/tailwind.css";
import { useState } from "react";

export const links: LinksFunction = () => [
	...(cssBundleHref
		? [
				{ rel: "stylesheet", href: stylesheet },
				{ rel: "stylesheet", href: cssBundleHref },
		  ]
		: [{ rel: "stylesheet", href: stylesheet }]),
];

export default function App() {
	const [darkMode, setIsDarkMode] = useState(true);

	const toggleDarkMode = () => {
		setIsDarkMode(!darkMode);
	};

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<NextThemesProvider
					defaultTheme="system"
					attribute="class"
					value={{
						light: lightTheme.className,
						dark: darkTheme.className,
					}}
				>
					<NextUIProvider>
						<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
							<Outlet />
							<ScrollRestoration />
							<Scripts />
							<LiveReload />
						</Layout>
					</NextUIProvider>
				</NextThemesProvider>
			</body>
		</html>
	);
}
