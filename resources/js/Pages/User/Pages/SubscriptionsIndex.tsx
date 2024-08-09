import { SubscriptionIndexProps } from "../Models";
import Layout from "../Layout/Layout";
import SubsCard from "../Components/Card";
import { router } from "@inertiajs/react";

export default function SubscriptionsIndex({
    auth,
    subscriptions,
}: SubscriptionIndexProps) {
    console.log(subscriptions);

    function handleBuy(id: string) {
        console.log("Buy", id);

        router.post(route("payments.store"), { id });
    }

    return (
        <Layout user={auth.user}>
            <section className="mt-5">
                <div className="w-3/4 m-auto">
                    <h1 className="text-center text-4xl font-bold mb-5">
                        Ofertas de subscripciones
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {subscriptions.map((sub) => (
                            <SubsCard
                                key={sub.id}
                                subscription={sub}
                                buttonText="Comprar"
                                onClick={handleBuy}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
