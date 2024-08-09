import { PaymentsIndexProps, SubscriptionIndexProps } from "../Models";
import Layout from "../Layout/Layout";
import SubsCard from "../Components/Card";
import { router } from "@inertiajs/react";

export default function PaymentsQr({
    auth,
    laQrImage,
    lnNroTran,
}: PaymentsIndexProps) {
    console.log(laQrImage, lnNroTran);

    function handleBuy(id: string) {
        console.log("Buy", id);
    }

    return (
        <Layout user={auth.user}>
            <section className="mt-5">
                <div className="w-3/4 m-auto">
                    <h1 className="text-center text-4xl font-bold mb-5">
                        Pagos
                    </h1>
                </div>
            </section>
        </Layout>
    );
}
