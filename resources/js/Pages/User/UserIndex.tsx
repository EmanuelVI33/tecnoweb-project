import { UserIndexProps } from "./Models";
import Layout from "./Layout/Layout";
import NewsCard from "./Components/CardNews";

export default function UserIndex({ auth, news }: UserIndexProps) {
    return (
        <Layout user={auth.user}>
            <div className="p-2">
                <h1 className="text-2xl font-bold mb-4">Noticias del momento</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {news.map((item) => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}