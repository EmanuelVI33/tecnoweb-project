import { Model } from "@/types";

export interface NewsCategory extends Model  {
    name: string;
    description?: string;
}