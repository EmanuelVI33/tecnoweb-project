import { SubscriptionIndexProps } from "../Models";
import Layout from "../Layout/Layout";
import SubsCard from "../Components/Card";
import { router, useForm } from "@inertiajs/react";
import { Progress } from "@/shadcn/ui/progress";

export default function SubscriptionsIndex({
    auth,
    subscriptions,
}: SubscriptionIndexProps) {
    const { data, get, processing, progress, errors, clearErrors } = useForm({
        id: "",
    });

    function handleBuy(id: string) {
        console.log(id);
        data.id = id;
        get(route("subscriptions.buy", id));
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
                                isProcessing={processing}
                                onClick={handleBuy}
                            />
                        ))}
                    </div>
                    {processing && (
                        <div className="my-5">
                            <p className="text-center text-xl">
                                Redireccionando...
                            </p>
                            <Progress
                                value={progress?.percentage}
                                max={100}
                                className="m-auto"
                            />
                        </div>
                    )}
                    {errors && <p className="text-red-600">{errors.id}</p>}
                </div>
            </section>
        </Layout>
    );
}
