import { Input } from "@/shadcn/ui/input";
import { Head, router } from "@inertiajs/react";
import { Button } from "@/shadcn/ui/button";
import { SettingsIndexProps } from "../Models/index";
import { AdminLayout } from "../Layout/AdminLayout";
import { FormEvent } from "react";
import { toast } from "sonner";

function SettingsIndex({ auth, settings }: SettingsIndexProps) {
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const settingsData: { key: string; value: string | File }[] = [];

        for (const entry of formData.entries()) {
            settingsData.push({
                key: entry[0],
                value: entry[1],
            });
        }

        router.post(
            route("admin.settings.store"),
            { settings: settingsData },
            {
                onSuccess: (page) => {
                    console.log(page);
                    console.log(`Settings saved`);
                    toast.success("Configuración guardada correctamente");
                },
                onError: () => {
                    toast.error("Ocurrió un error al guardar la configuración");
                },
            }
        );
    }

    return (
        <AdminLayout user={auth.user}>
            <Head title="Configuración" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <section className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <h2 className="text-lg font-medium text-gray-900 my-5">
                            Configuraciones
                        </h2>
                        <form onSubmit={onSubmit}>
                            {settings.map((setting) =>
                                setting.type !== "file" ? (
                                    <div key={setting.key}>
                                        <label htmlFor={setting.key}>
                                            {setting.label}
                                        </label>
                                        <Input
                                            id={setting.key}
                                            name={setting.key}
                                            className="mt-2"
                                            defaultValue={
                                                setting.type !== "file"
                                                    ? setting.value
                                                    : ""
                                            }
                                            placeholder={setting.placeholder}
                                            type={setting.type}
                                        />
                                    </div>
                                ) : (
                                    <></>
                                )
                            )}
                            <Button>Guardar</Button>
                        </form>
                    </section>
                </div>
            </div>
        </AdminLayout>
    );
}

export default SettingsIndex;
