import { PageProps } from '@/types';
import { NewsCategory } from './news-category';
import { News } from './news';

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
