import { UserIndexProps } from "../Models";
import Layout from "../Layout/Layout";
import NewsCard from "../Components/CardNews";
import { PageWithPaginationProps } from "@/types";
import { News } from "@/Pages/Admin/Models/news";
import { Link } from "@inertiajs/react";

export default function UserIndex({
    auth,
    response,
}: PageWithPaginationProps<News>) {
    console.log(response);

    return (
        <Layout user={auth.user}>
            <div className="p-2">
                <h1 className="text-2xl font-bold mb-4">
                    Noticias del momento
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {response.data.map((item) => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </div>
                {response.links.length > 0 && (
                    <div className="flex justify-center mt-4">
                        <ul className="flex">
                            {response.links.map((link, i) =>
                                link.url ? (
                                    <Link
                                        key={link.label}
                                        href={link.url}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                i === 0 ||
                                                i === response.links.length - 1
                                                    ? i === 0
                                                        ? "Anterior"
                                                        : "Siguiente"
                                                    : link.label,
                                        }}
                                        className={`p-1 mx-1 ${
                                            link.active
                                                ? "text-blue-500 font-bold"
                                                : ""
                                        }`}
                                    />
                                ) : (
                                    <span
                                        key={link.label}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                i === 0
                                                    ? "Anterior"
                                                    : "Siguiente",
                                        }}
                                        className="p-1 mx-1"
                                    />
                                )
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </Layout>
    );
}
