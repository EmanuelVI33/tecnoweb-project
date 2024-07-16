import { PageProps } from '@/types';
import { NewsCategory } from './news-category';

export type NewsCategoryIndexProps = PageProps & {
    newsCategory: NewsCategory[];
};  

export type NewsCategoryShowProps = PageProps & {
    newsCategory: NewsCategory;
};
