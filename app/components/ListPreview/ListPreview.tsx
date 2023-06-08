import { Button, Table } from "@nextui-org/react";

import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { type NewListContextType } from "../interfaces";

export const ListPreview = ({ columns, rows }: Partial<NewListContextType>) => {
	return (
		<Table
			aria-label="Shopping List Preview"
			bordered={true}
			borderWeight={"extrabold"}
			selectionMode="single"
			containerCss={{ width: "100%" }}
			animated
		>
			<Table.Header columns={columns}>
				{column => <Table.Column key={column.key}>{column.label}</Table.Column>}
			</Table.Header>
			<Table.Body items={rows}>
				{(item: any) => (
					<Table.Row key={item.key}>
						{columnKey =>
							columnKey !== "action" ? (
								<Table.Cell>{item[columnKey]}</Table.Cell>
							) : (
								<Table.Cell css={{ display: "flex", gap: 10 }}>
									<Button
										icon={<RemoveRedEyeIcon />}
										auto
										css={{ maxWidth: "auto" }}
									/>

									<Button icon={<EditIcon />} auto css={{ maxWidth: "auto" }} />

									<Button
										icon={<DeleteForeverIcon />}
										auto
										css={{ maxWidth: "auto" }}
									/>
								</Table.Cell>
							)
						}
					</Table.Row>
				)}
			</Table.Body>
		</Table>
	);
};
