import { Subscription } from "@/Pages/Admin/Models/subscription";

export interface Payment {
    id: string;
    customer_name: string;
    customer_ci: string;
    phone: string;
    type_payment: string;
    subscription: Subscription; // This is the subscription that the user is buying
    transaction_id: string;
    state: string;
    state_tran: string;
    qr_image?: string;
}

export interface PFResponse {
    nroTran: string;
    qrImage?: string;
    message: string;
}
