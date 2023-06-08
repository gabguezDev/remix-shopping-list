import { useContext, useState, useId, ChangeEvent } from "react";

import { Form } from "@remix-run/react";

import { Button, FormElement, Input, Text } from "@nextui-org/react";

import NewListContext from "~/context/NewListContext/NewListContext";

import { type RowType } from "../interfaces";

type Props = {};

export const ListForm = (props: Props) => {
	const id = useId();

	const initialProduct: RowType = {
		key: id,
		product: "",
		quantity: 1,
		status: "Pendiente",
	};

	const [newProduct, setNewProduct] = useState<RowType>(initialProduct);

	const handleChange = ({ currentTarget }: ChangeEvent<FormElement>) => {
		const { name, value } = currentTarget;

		setNewProduct({ ...newProduct, [name]: value });

		setNewProduct(initialProduct);
	};

	const { product, quantity } = newProduct;

	const { addRows } = useContext(NewListContext);

	const addProduct = (product: RowType): void => {
		addRows(product);
	};

	return (
		<div className="flex flex-col">
			<Text h2>Agregar Producto</Text>
			<Form className="flex flex-col justify-center items-center space-y-4">
				<Input
					label="Producto"
					name="product"
					type="text"
					value={product}
					fullWidth
					onChange={handleChange}
				/>
				<Input
					label="Cantidad"
					name="quantity"
					type="number"
					value={quantity}
					fullWidth
					onChange={handleChange}
				/>
				<div className="flex flex-row space-x-4">
					<Button onClick={() => addProduct(newProduct)}>Agregar</Button>
					<Button>Reset</Button>
				</div>
			</Form>
		</div>
	);
};
