import { ReactNode } from "react";
import {
    Table as TableShadcn,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shadcn/ui/table";

interface CustomTableProps<T> {
    caption: string;
    headers: string[];
    data: T[];
    renderRow: (item: T) => ReactNode;
}

function CustomTable<T>({ caption, headers, data, renderRow }: CustomTableProps<T>) {
    return (
        <TableShadcn>
            <TableCaption>{caption}</TableCaption>
            <TableHeader>
                <TableRow>
                    {headers.map((header, index) => (
                        <TableHead key={index}>{header}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index}>
                        {renderRow(item)}
                    </TableRow>
                ))}
            </TableBody>
        </TableShadcn>
    );
}

export default CustomTable;
