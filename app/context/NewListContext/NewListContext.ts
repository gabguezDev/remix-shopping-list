import { createContext } from "react";
import {
	type NewListContextType,
	type ColumnType,
	type RowType,
} from "~/components/interfaces";

const columns: ColumnType[] = [
	{
		key: "product",
		label: "Producto",
	},
	{
		key: "quantity",
		label: "Cantidad",
	},
	{
		key: "status",
		label: "Estado",
	},
	{
		key: "action",
		label: "Acciones",
	},
];

const rows: RowType[] = [
	{
		key: "1",
		product: "Mayonesa",
		quantity: 1,
		status: "No hay", // En el carrito | No hay | Comprado
	},
	{
		key: "2",
		product: "Mostaza",
		quantity: 1,
		status: "En el carrito", // En el carrito | No hay | Comprado
	},
	{
		key: "3",
		product: "Medallones de verdura",
		quantity: 2,
		status: "No hay", // En el carrito | No hay | Comprado
	},
	{
		key: "4",
		product: "Arroz",
		quantity: 1,
		status: "Comprado", // En el carrito | No hay | Comprado
	},
];

const addRows = (row: RowType): void => {
	rows.push(row);
};

const NewListDefault: NewListContextType = { columns, rows, addRows };

const NewListContext = createContext(NewListDefault);

export default NewListContext;
