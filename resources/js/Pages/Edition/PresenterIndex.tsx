import { PresenterCreate } from "@/Pages/Edition/models/presenter";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from "@/types";
import CreateOrEdit from "@/Components/Edition/Presenter/CreateOrEdit";

function Index({auth, presenters} : PageProps<{ presenters: Array<PresenterCreate> }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            {/* <Head title="Dashboard" /> */}
           <CreateOrEdit />
        </AuthenticatedLayout>
    )
}

export default Index
