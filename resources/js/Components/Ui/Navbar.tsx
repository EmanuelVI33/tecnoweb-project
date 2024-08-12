import { Link, usePage } from "@inertiajs/react";
import NavLink from "../NavLink";
import Dropdown from "../Dropdown";
import ResponsiveNavLink from "../ResponsiveNavLink";
import { useEffect, useState } from "react";
import { ProjectShowPageProps } from "../../types/index";
import SaveToogle from "./SaveToogle";
import { useLocalStorage } from "@uidotdev/usehooks";
import FontSizeDropdown from "./FontSizeDropdown";
import Imagen from "../Image";

function Navbar() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const { props } = usePage<ProjectShowPageProps>();
    const {
        auth: { user },
    } = props;
    const selectedProject = props.project;

    const [dark, setDark] = useLocalStorage("dark", false);
    const [fontSize, setFontSize] = useLocalStorage("fontSize", "text-base");

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove(
            "text-xs",
            "text-sm",
            "text-base",
            "text-lg",
            "text-xl",
            "text-2xl"
        );
        document.documentElement.classList.add(fontSize);
    }, [fontSize]);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setDark(!dark);
    };

    const changeFontSize = (size: string) => {
        setFontSize(size);
    };

    return (
        <nav className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between ali h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <Imagen
                                    src="Logo.jpg"
                                    alt="Logo"
                                    className="h-14"
                                />
                            </Link>
                        </div>

                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <NavLink
                                href={route("projects.index")}
                                active={route().current("projects")}
                            >
                                Proyectos
                            </NavLink>
                        </div>
                    </div>

                    {selectedProject && (
                        <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-xs md:text-sm text-center truncate ">
                            <p className="font-medium">
                                {selectedProject.name}
                            </p>
                            <p>{selectedProject.presenter.full_name}</p>
                        </div>
                    )}

                    <div className="flex items-center">
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <button
                                className="rounded text-gray-900 dark:text-gray-100 hover:bg-slate-100 dark:hover:bg-slate-700 px-1 ml-4"
                                onClick={toggleDarkMode}
                            >
                                🌙
                            </button>
                            <FontSizeDropdown changeFontSize={changeFontSize} />
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <div className=" text-slate-600 dark:bg-transparent dark:bg-slate-800 dark:text-white flex gap-2 justify-center items-center">
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-gray-700 dark:text-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </div>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Perfil
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Cerrar Sesión
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <SaveToogle />
                    </div>

                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink
                        href={route("projects.index")}
                        active={route().current("projects")}
                    >
                        Dashboard
                    </ResponsiveNavLink>
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">
                            {user?.name}
                        </div>
                        <div className="font-medium text-sm text-gray-500">
                            {user?.email}
                        </div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink href={route("profile.edit")}>
                            Perfil
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                        >
                            Cerrar Sesión
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
