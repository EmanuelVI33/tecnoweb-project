import { useForm } from "@inertiajs/react";
import Layout from "../Layout/Layout";
import { SubscriptionBuyProps } from "../Models";
import { Input } from "@/shadcn/ui/input";
import { Button } from "@/shadcn/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/shadcn/ui/select";

export default function SubscriptionBuy({
    auth,
    subscription,
    response,
}: SubscriptionBuyProps) {
    const { data, setData, errors, post } = useForm({
        id: subscription.id,
        customer_name: "",
        customer_ci: "",
        phone: "",
        type_payment: "1",
    });

    console.log(response);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("payments.store"), {
            preserveScroll: true,
            onSuccess: () => {},
        });
    };

    return (
        <Layout user={auth.user}>
            <div className="w-full md:w-1/2 mx-auto mt-5">
                <h1 className="text-2xl font-bold mb-2">
                    Comprar subcripcion {subscription.name}
                </h1>
                <p className="text-lg mb-2">
                    Rellene los siguinte campos para realizar el pagó
                </p>
                <form className="p-2" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label
                            className="text-xl font-medium mb-2"
                            htmlFor="customer_name"
                        >
                            Nombre del cliente
                        </label>
                        <Input
                            type="text"
                            name={data.customer_name}
                            onChange={(e) =>
                                setData("customer_name", e.target.value)
                            }
                            placeholder="Nombre del cliente"
                            id="customer_name"
                        />
                        {errors.customer_name && <p>{errors.customer_name}</p>}
                    </div>
                    <div className="mb-5">
                        <label
                            className="text-xl font-medium mb-2"
                            htmlFor="customer_ci"
                        >
                            CI del cliente
                        </label>
                        <Input
                            type="text"
                            name={data.customer_ci}
                            onChange={(e) =>
                                setData("customer_ci", e.target.value)
                            }
                            placeholder="CI del cliente"
                            id="customer_ci"
                        />
                        {errors.customer_ci && <p>{errors.customer_ci}</p>}
                    </div>
                    <div className="mb-5">
                        <label
                            className="text-xl font-medium mb-2"
                            htmlFor="phone"
                        >
                            Número de celular
                        </label>
                        <Input
                            type="number"
                            name={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            id="phone"
                            placeholder="Número de celular"
                        />
                        {errors.phone && <p>{errors.phone}</p>}
                    </div>
                    <div className="mb-5">
                        <label className="text-xl font-medium mb-5">
                            Tipo de pago
                        </label>
                        {/* <Select name="type_payment">
                            <SelectTrigger className="" name="type_payment">
                                <SelectValue placeholder="Seleccionar Tipo de Pagó" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Tipo de Pagó</SelectLabel>
                                    <SelectItem value="1">QR</SelectItem>
                                    <SelectItem value="2">
                                        Tigo Money
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select> */}
                        <select
                            className="block w-full p-2 border border-gray-300 rounded-md"
                            name={data.type_payment}
                            onChange={(e) =>
                                setData("type_payment", e.target.value)
                            }
                            value={data.type_payment}
                            id="type_payment"
                        >
                            <option value="1">QR</option>
                            <option value="2">Tigo Money</option>
                        </select>
                        {errors.type_payment && <p>{errors.type_payment}</p>}
                    </div>

                    <div className="flex justify-end">
                        <Button
                            className="block w-full md:w-1/2 xl:w-1/3"
                            type="submit"
                        >
                            Comprar
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
