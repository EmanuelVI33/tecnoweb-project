import {
    PaymentsIndexProps,
    PaymentsQrProps,
    SubscriptionIndexProps,
} from "../Models";
import Layout from "../Layout/Layout";
import SubsCard from "../Components/Card";
import { Button } from "@headlessui/react";
import TablePayment from "../Components/TablePayment";
import { router } from "@inertiajs/react";

export default function PaymentsIndex({ auth, payments }: PaymentsIndexProps) {
    console.log(payments);

    function handleBuy(id: string) {
        console.log("Buy", id);
        router.get(route("payments.show", id));
    }

    return (
        <Layout user={auth.user}>
            <section className="mt-5">
                <div className="w-3/4 m-auto">
                    <h1 className="text-center text-4xl font-bold mb-5">
                        Mis pagos
                    </h1>
                    <div className="m-auto">
                        <TablePayment />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
