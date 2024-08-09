import { News } from "../../Admin/Models/news";

const NewsCard = ({ news }: { news: News }) => {
    return (
        <div className="border p-4 rounded-md shadow-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-bold mb-2">{news.title}</h2>
            <p className="text-gray-700 mb-4">
                {news.content.substring(0, 200)}...
            </p>
            <span className="text-sm text-blue-500">
                {news.news_category.name}
            </span>
        </div>
    );
};

export default NewsCard;
