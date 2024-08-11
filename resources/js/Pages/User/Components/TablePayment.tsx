import { Button } from "@/shadcn/ui/button";
import { TableCell } from "@/shadcn/ui/table";
import { router, usePage } from "@inertiajs/react";
import { useModalStore } from "@/store/modal-store";
import CustomTable from "@/Components/Ui/CustomTable";
import { PaymentsIndexProps } from "../Models";
import { Payment } from "../Models/payment";
import { Badge } from "@/shadcn/ui/badge";

const routeBase = "payments";

const headers = [
    "Nombre del Cliente",
    "CI/NIT Cliente",
    "Télefono del Cliente",
    "Tipo de Pago",
    "Subscripción",
    "Estado",
    "Estado de la transacción",
    "Acciones",
];

function TablePayment() {
    const { toggleModal } = useModalStore();
    const {
        props: { payments },
    } = usePage<PaymentsIndexProps>();

    const handleOpen = (payment: Payment) => {
        router.visit(route(`${routeBase}.show`, payment.id));
    };

    return (
        <>
            <CustomTable
                caption="Mis Pagos"
                headers={headers}
                data={payments}
                renderRow={(payment) => (
                    <>
                        <TableCell>
                            <p>{payment.customer_name}</p>
                        </TableCell>
                        <TableCell>
                            <p>{payment.customer_ci}</p>
                        </TableCell>
                        <TableCell>
                            <p>{payment.phone}</p>
                        </TableCell>
                        <TableCell>
                            <p>
                                {payment.type_payment == "1"
                                    ? "Pago por QR"
                                    : "Tigo Money"}
                            </p>
                        </TableCell>
                        <TableCell>
                            <div className="flex flex-col items-center">
                                <p>{payment.subscription.name}</p>
                                <p>{payment.subscription.price}$</p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge
                                variant={
                                    payment.state == "2"
                                        ? "success"
                                        : "secondary"
                                }
                            >
                                {payment.state == "2" ? "Pagado" : "Pendiente"}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <Badge
                                variant={
                                    payment.state_tran == "1"
                                        ? "default"
                                        : "outline"
                                }
                            >
                                {payment.state == "1"
                                    ? "En Espera"
                                    : "Expirado"}
                            </Badge>
                        </TableCell>
                        <TableCell className="flex justify-center">
                            <Button
                                className=""
                                onClick={() => handleOpen(payment)}
                            >
                                <span className="mr-2">Abrir</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 1200 1200"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m249.17 117.7l-83.716 108.032H0v609.972l123.572-465.318H993.75V225.732h-402.1L507.935 117.7zM0 1016.612v65.688h993.75L1200 410.669H175.134z"
                                    />
                                </svg>
                            </Button>
                        </TableCell>
                    </>
                )}
            />
        </>
    );
}

export default TablePayment;
