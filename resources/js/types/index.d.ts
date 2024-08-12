import { Project } from "@/Pages/Edition/models/project";
import { Presenter } from "../Pages/Edition/models/presenter";
import { ProjectResponse } from "@/Pages/Edition/models/response";

// type ID = string | number;

export interface Model {
    id?: string;
}

export interface User extends Model {
    name: string;
    email: string;
    email_verified_at: string;
    pointer: number;
    is_premium: boolean;
}

export interface Role extends Model {
    name: string;
}

export interface ErrorMessage {
    message: string;
    statu: string;
}

interface Setting {
    key: string;
    value: string;
    label?: string;
    placeholder?: string;
    type: string;
    description?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
        rol: Role;
    };
    presenters: Presenter[];
    success: string;
    error: ErrorMessage;
    settings: Setting[];
};

export interface Link {
    url: null | string;
    label: string;
    active: boolean;
}

export interface Pagination<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

export interface PageWithPaginationProps<T> {
    response: Pagination<T>;
    auth: {
        user: User;
        rol: string;
    };
    presenters: Presenter[];
    success: string;
    error: ErrorMessage;
    settings: Setting[];
}

export type ProjectPageProps = PageProps & {
    projects: Project[];
};

export type ProjectShowPageProps = PageProps & {
    project: ProjectResponse;
};
