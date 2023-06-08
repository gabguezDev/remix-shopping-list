import { Grid } from "@nextui-org/react";

import { ListForm, ListPreview } from "~/components";

type Props = {};

export default function New(props: Props) {
	return (
		<Grid.Container justify="center" className="w-full" gap={5}>
			<Grid xs={12} md={4} justify="center">
				<ListForm />
			</Grid>
			<Grid xs={12} md={8} justify="center">
				<ListPreview />
			</Grid>
		</Grid.Container>
	);
}
