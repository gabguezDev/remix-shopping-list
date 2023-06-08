import { Form } from "@remix-run/react";

import { Button, Input, Text } from "@nextui-org/react";

type Props = {};

export const ListForm = (props: Props) => {
	return (
		<div className="flex flex-col">
			<Text h2>Agregar Producto</Text>
			<Form className="flex flex-col justify-center items-center space-y-4">
				<Input label="Producto" name="product" type="text" fullWidth />
				<Input
					label="Cantidad"
					name="quantity"
					type="number"
					initialValue={"1"}
					fullWidth
				/>
				<div className="flex flex-row space-x-4">
					<Button>Agregar</Button>
					<Button>Reset</Button>
				</div>
			</Form>
		</div>
	);
};
