import {CategoryItem} from "./CategoryItem";

export function CategoryList({catalog = []}) {
    return (
        <>
            <div className='list'>
                {
                    catalog.map(category => (
                        <CategoryItem key={category.id} {...category} />
                    ))
                }
            </div>
        </>
    );
}