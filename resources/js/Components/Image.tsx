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

    let src = props.src;
    if (props.src.length > 0) {
        if (props.src[0] === "/") {
            // Remove the first character of the string
            src = props.src.slice(1);
            console.log(props.src);
        }
    }

    src = setting ? `${setting.value}${src}` : src;

    return (
        <>
            <img {...props} src={src} />
        </>
    );
}
