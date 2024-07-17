import { News } from "@/Pages/Admin/Models/news";
import { PageProps } from "@/types";

export type UserIndexProps = PageProps & {
    news: News[];
};