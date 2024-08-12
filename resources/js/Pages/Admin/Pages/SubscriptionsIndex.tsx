import DialogSubscription from '../Components/Subscription/DialogSubscription';
import TableSubscription from '../Components/Subscription/TableSubscription';
import { AdminLayout } from '../Layout/AdminLayout';
import { SubscriptionIndexProps } from '../Models';

function SubscriptionIndex({auth}: SubscriptionIndexProps) {
    return (
        <AdminLayout
            user={auth.user}
        >
            <div className="flex justify-between content-center my-4 w-11/12 m-auto">
                <h1 className="scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight">
                    Subscripciones
                </h1>
                <DialogSubscription />
            </div>

            <div className="w-3/4 m-auto">
                <TableSubscription />
            </div>
        </AdminLayout>
    )
}

export default SubscriptionIndex
