import { PaymentsIndexProps, SubscriptionIndexProps } from "../Models";
import Layout from "../Layout/Layout";
import SubsCard from "../Components/Card";

export default function PaymentsQr({
    auth,
    laQrImage,
    lnNroTran,
    sub,
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
                        Realizar Pago
                    </h1>
                    <div className="grid grid-cols-2">
                        <div className="">
                            <h2 className="text-2xl text-center">
                                Nro de transacción:{" "}
                                <span className="font-bold">{lnNroTran}</span>
                            </h2>
                            {laQrImage && (
                                <img src={laQrImage} className="m-auto" />
                            )}
                        </div>
                        <div className="">
                            <h2 className="my-2">Compra de suscripcion</h2>
                            <SubsCard subscription={sub} onClick={() => {}} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
