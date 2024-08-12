import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";

function WelcomeNavbar() {
    const { auth } = usePage<PageProps>().props;

    return (
        <nav className="px-5 flex justify-between items-center h-14 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-800">
            <img
                src="/assets/images/logo.png"
                alt="Canal 11 TVU"
                className="h-14"
            />
            <div className="px-2">
                {auth.user ? (
                    <Link
                        href={route("projects.index")}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default WelcomeNavbar;
