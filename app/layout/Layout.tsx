import { type ReactNode } from "react";

import {
	Navbar,
	Text,
	Container,
	Button,
	Dropdown,
	Switch,
} from "@nextui-org/react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

type Props = {
	darkMode: boolean;
	children: ReactNode;
	toggleDarkMode: () => void;
};

export const Layout = ({ darkMode, children, toggleDarkMode }: Props) => {
	return (
		<>
			<Navbar className="w-full items-center">
				<Navbar.Brand>
					<Text h1>Remix Shopping List</Text>
				</Navbar.Brand>
				<Navbar.Content>
					<Navbar.Link>Nueva Lista</Navbar.Link>
					<Navbar.Link>Historial</Navbar.Link>
					<Navbar.Item>
						<Dropdown>
							<Dropdown.Button>Ingresa</Dropdown.Button>
							<Dropdown.Menu>
								<Dropdown.Item>Inicia Sesión</Dropdown.Item>
								<Dropdown.Item>Registrate</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Navbar.Item>
					<Navbar.Item>
						<Switch
							checked={darkMode}
							onChange={toggleDarkMode}
							size="xl"
							iconOn={<DarkModeIcon />}
							iconOff={<LightModeIcon />}
						/>
					</Navbar.Item>
				</Navbar.Content>
			</Navbar>
			<Container>{children}</Container>
		</>
	);
};
