import { PaymentsQrProps, SubscriptionIndexProps } from "../Models";
import Layout from "../Layout/Layout";
import SubsCard from "../Components/Card";
import { Button } from "@/shadcn/ui/button";
import { router, useForm } from "@inertiajs/react";

export default function PaymentsQr({ auth, payment }: PaymentsQrProps) {
    const { post, errors, data } = useForm({
        id: payment.id,
    });
    console.log(payment);

    function handleConsultar(id: string) {
        post(route("payments.consultar", id));
    }

    return (
        <Layout user={auth.user}>
            <section className="mt-5">
                <div className="w-3/4 m-auto">
                    <h1 className="text-center text-4xl font-bold mb-5">
                        Realizar Pago
                    </h1>
                    <div className="grid grid-cols-2">
                        <div className="text-center">
                            <h2 className="text-2xl ">
                                Nro de transacción:{" "}
                                <span className="font-bold">
                                    {payment.transaction_id}
                                </span>
                            </h2>
                            <p>
                                Estado de pago:{" "}
                                <span className="font-bold">
                                    {payment.state == "2"
                                        ? "Pagado"
                                        : "Pendiente"}
                                </span>
                            </p>
                            <p>
                                Estado de transacción:{" "}
                                <span className="font-bold">
                                    {payment.state_tran == "1"
                                        ? "En Cola"
                                        : "Expirado"}
                                </span>
                            </p>
                            <p>
                                Tipo de pago:{" "}
                                <span className="font-bold">
                                    {payment.type_payment == "1"
                                        ? "Pago por QR"
                                        : "Tigo Money"}
                                </span>
                            </p>
                            {payment.qr_image && (
                                <img
                                    src={payment.qr_image}
                                    className="m-auto"
                                />
                            )}
                        </div>
                        <div className="">
                            <h2 className="my-2">Compra de suscripcion</h2>
                            <SubsCard
                                subscription={payment.subscription}
                                onClick={() => {}}
                            />
                            <Button
                                className="block mx-auto my-2"
                                onClick={() => handleConsultar(payment.id)}
                            >
                                Consultar Pago
                            </Button>
                            <p className="text-center mb-1">
                                Si realizo el pago, click en consultar pago
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
