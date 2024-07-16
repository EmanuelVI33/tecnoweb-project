import { AdminLayout } from "../Layout/AdminLayout";
import { NewsCategoryShowProps } from "../Models"

function NewsCategoriesShow({ auth, newsCategory} : NewsCategoryShowProps) {
    console.log(newsCategory);
    
    return (
        <AdminLayout
            user={auth.user}
        >
            <h1>{newsCategory.name}</h1>
        </AdminLayout>
    )
}

export default NewsCategoriesShow
