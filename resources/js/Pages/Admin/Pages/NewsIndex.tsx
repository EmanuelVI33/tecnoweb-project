import { Tab } from '@headlessui/react';
import DialogNews from '../Components/News/DialogNews';
import { AdminLayout } from '../Layout/AdminLayout';
import { NewsCategoryIndexProps } from '../Models';
import TableNews from '../Components/News/TableNews';

function NewsCategoryIndex({auth}: NewsCategoryIndexProps) {
    return (
        <AdminLayout
            user={auth.user}
        >
            <div className="flex justify-between content-center my-4 w-11/12 m-auto">
                <h1 className="scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight">
                    Noticias
                </h1>
                <DialogNews /> 
            </div>

            <div className="w-3/4 m-auto">
                <TableNews />
            </div>
        </AdminLayout>
    )
}

export default NewsCategoryIndex
