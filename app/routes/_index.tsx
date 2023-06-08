import { Grid, Spacer, Text } from "@nextui-org/react";
import type { V2_MetaFunction } from "@remix-run/node";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Remix Shopping List App" },
		{ name: "description", content: "Welcome to the best shopping list ever!" },
	];
};

export default function Index() {
	return (
		<Grid.Container gap={2} justify="center">
			<Grid xs={12} className="flex justify-center">
				<Text h2 className="text-center">
					Bienvenido a Remix Shopping List
				</Text>
			</Grid>
			<Grid xs={12} className="flex justify-center">
				<Text h3>
					Una app de lista de compra creada para que puedas planificar tus
					compras y tener un registro de compras realizadas.
				</Text>
			</Grid>
			<Grid xs={3}>
				<Text h4 className="text-center">
					Luego de realizadas tus compras, puedes guardar imagenes de tus
					tickets de compras para tener un registro de lo gastado a lo largo del
					tiempo.
				</Text>
			</Grid>
			<Grid xs={3}>
				<Text h4 className="text-center">
					Puedes crear listas colaborativas para idearlas con las personas que
					tú quieras.
				</Text>
			</Grid>
			<Spacer y={20} />
			<Grid xs={12} className="flex justify-center">
				<Text h4 className="text-center">
					¡Próximamente nuevas funcionalidades!
				</Text>
			</Grid>
			<Grid xs={12} className="flex justify-center items-center">
				<Text h4 className="text-center">
					@GabguezDev - Remix Shopping List v1.0.0
				</Text>
			</Grid>
			<Grid xs={12} className="flex justify-center items-center gap-2">
				<GitHubIcon className="text-4xl" />
				<LinkedInIcon className="text-5xl" />
			</Grid>
		</Grid.Container>
	);
}
