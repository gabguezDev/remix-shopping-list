import { createTheme } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom values
export const lightTheme = createTheme({
	type: "light",
	theme: {
		colors: {
			// brand colors
			primaryLight: "$purple200",
			primaryLightHover: "$purple300",
			primaryLightActive: "$purple400",
			primaryLightContrast: "$purple600",
			primary: "$purple100",
			primaryBorder: "$purple500",
			primaryBorderHover: "$purple600",
			primarySolidHover: "$purple700",
			primarySolidContrast: "$white",
			primaryShadow: "$purple500",

			gradient:
				"linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
			link: "#5E1DAD",

			// you can also create your own color
			myColor: "#ff4ecd",

			// ...  more colors
		},
		space: {},
		fonts: {},
	},
});

export const darkTheme = createTheme({
	type: "dark",
	theme: {
		colors: {
			// brand colors
			primaryLight: "$purple200",
			primaryLightHover: "$purple300",
			primaryLightActive: "$purple400",
			primaryLightContrast: "$purple600",
			primary: "$purple100",
			primaryBorder: "$purple500",
			primaryBorderHover: "$purple600",
			primarySolidHover: "$purple700",
			primarySolidContrast: "$white",
			primaryShadow: "$purple500",

			gradient:
				"linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
			link: "#5E1DAD",

			// you can also create your own color
			myColor: "#ff4ecd",

			// ...  more colors
		},
		space: {},
		fonts: {},
	},
});
