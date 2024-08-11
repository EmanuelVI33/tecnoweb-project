import { useForm } from "@inertiajs/react";
import Layout from "../Layout/Layout";
import { SubscriptionBuyProps } from "../Models";
import { Input } from "@/shadcn/ui/input";
import { Button } from "@headlessui/react";

export default function SubscriptionBuy({
    auth,
    subscription,
}: SubscriptionBuyProps) {
    const { data, setData, errors, post } = useForm({
        id: subscription.id,
        customer_name: "",
        customer_ci: "",
        phone: "",
        type_payment: "",
    });

    console.log(errors);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("payments.store"), {
            preserveScroll: true,
            onSuccess: () => {
                alert("Compra exitosa");
            },
        });
    };

    return (
        <Layout user={auth.user}>
            <div>
                <h1>Comprar subcripcion {subscription.name}</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="customer_name">
                            Nombre del cliente
                        </label>
                        <Input
                            type="text"
                            name={data.customer_name}
                            onChange={(e) =>
                                setData("customer_name", e.target.value)
                            }
                            id="customer_name"
                        />
                        {errors.customer_name && <p>{errors.customer_name}</p>}
                    </div>
                    <div>
                        <label htmlFor="customer_ci">CI del cliente</label>
                        <Input
                            type="text"
                            name={data.customer_ci}
                            onChange={(e) =>
                                setData("customer_ci", e.target.value)
                            }
                            id="customer_ci"
                        />
                        {errors.customer_ci && <p>{errors.customer_ci}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone">Número de celular</label>
                        <Input
                            type="number"
                            name={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            id="phone"
                        />
                        {errors.phone && <p>{errors.phone}</p>}
                    </div>
                    <div>
                        <label htmlFor="type_payment">Tipo de pago</label>
                        <select
                            name={data.type_payment}
                            onChange={(e) =>
                                setData("type_payment", e.target.value)
                            }
                            id="type_payment"
                        >
                            <option value="1">QR</option>
                            <option value="2">Tigo Money</option>
                        </select>
                        {errors.type_payment && <p>{errors.type_payment}</p>}
                    </div>

                    <Button type="submit">Comprar</Button>
                </form>
            </div>
        </Layout>
    );
}
