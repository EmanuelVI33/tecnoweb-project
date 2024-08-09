import { useLocalStorage } from "@uidotdev/usehooks"


export const usePathImage = () => {
    const [path, setPath] = useLocalStorage('path', '/');

    return { path, setPath };
}