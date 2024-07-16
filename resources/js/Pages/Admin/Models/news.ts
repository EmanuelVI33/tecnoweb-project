import { Model } from '@/types';
import { NewsCategory } from './news-category';

export interface News extends Model {
    title: string;
    content: string;
    categoryId: string;
    newsCategory: NewsCategory;
}