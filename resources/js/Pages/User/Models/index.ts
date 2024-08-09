import { News } from "@/Pages/Admin/Models/news";
import { PageProps } from "@/types";
import { Subscription } from "../../Admin/Models/subscription";

export type UserIndexProps = PageProps & {
    news: News[];
};

export type SubscriptionIndexProps = PageProps & {
    subscriptions: Subscription[];
};

export type PaymentsIndexProps = PageProps & {
    laQrImage: string;
    lnNroTran: string;
    sub: Subscription;
};
