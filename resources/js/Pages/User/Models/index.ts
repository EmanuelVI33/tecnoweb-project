import { News } from "@/Pages/Admin/Models/news";
import { PageProps } from "@/types";
import { Subscription } from "../../Admin/Models/subscription";
import { Payment, PFResponse } from "./payment";

export type UserIndexProps = PageProps & {
    news: News[];
};

export type SubscriptionIndexProps = PageProps & {
    subscriptions: Subscription[];
};

export type PaymentsIndexProps = PageProps & {
    payments: Payment[];
};

export type PaymentsQrProps = PageProps & {
    payment: Payment;
};

export type SubscriptionBuyProps = PageProps & {
    subscription: Subscription;
};
