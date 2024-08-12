import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";

export interface Props {
    src: string;
    alt: string;
    className?: string;
}

export default function Imagen(props: Props) {
    const {
        props: { settings },
    } = usePage<PageProps>();

    const setting = settings.find((setting) => setting.key === "path");
    console.log(setting);

    const src = setting ? `${setting.value}${props.src}` : props.src;

    return (
        <>
            <img {...props} src={src} />
        </>
    );
}
