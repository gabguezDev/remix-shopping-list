export type ColumnType = {
	key: string;
	label: string;
};

export type RowType = {
	key: string | null | undefined;
	product: string;
	quantity: number;
	status: "Pendiente" | "No hay" | "En el carrito" | "Comprado";
};

export type NewListContextType = {
	columns: ColumnType[];
	rows: RowType[];
	addRows: (row: RowType) => void;
};
