import { Badge } from "@/shadcn/ui/badge";
import { News } from "../../Admin/Models/news";

const NewsCard = ({ news }: { news: News }) => {
    return (
        <div className="border p-4 rounded-md shadow-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <span className="text-sm text-blue-500">
                {news.news_category.name}
            </span>
            <h2 className="text-xl font-bold">{news.title}</h2>
            <p className="text-gray-700 my-4">
                {news.content.substring(0, 200)}...
            </p>
            {news.is_premium && (
                <div className="flex justify-end">
                    <Badge variant="default">Esclusiva</Badge>
                </div>
            )}
        </div>
    );
};

export default NewsCard;
