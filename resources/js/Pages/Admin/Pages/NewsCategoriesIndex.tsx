import { AdminLayout } from '../Layout/AdminLayout';
import { NewsCategoryIndexProps } from '../Models';

function NewsCategoryIndex({auth, newsCategory}: NewsCategoryIndexProps) {
    console.log(newsCategory);
    console.log(`Pagina`)
    return (
        <AdminLayout
            user={auth.user}
        >
            <h1>News Category Index</h1>
        </AdminLayout>
    )
}

export default NewsCategoryIndex
