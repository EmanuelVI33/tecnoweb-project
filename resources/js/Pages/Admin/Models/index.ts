import { PageProps, Setting } from "@/types";
import { NewsCategory } from "./news-category";
import { News } from "./news";
import { Subscription } from "./subscription";
import SettingsIndex from "../Pages/SettingsIndex";

export type NewsCategoryIndexProps = PageProps & {
    newsCategory: NewsCategory[];
};

export type NewsCategoryShowProps = PageProps & {
    newsCategory: NewsCategory;
};

export type NewsIndexProps = PageProps & {
    news: News[];
    newsCategories: NewsCategory[];
};

export type SubscriptionIndexProps = PageProps & {
    subscriptions: Subscription[];
};

export type SettingsIndexProps = PageProps & {};
