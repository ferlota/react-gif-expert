import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {

        const newCategoryLowerCase = newCategory.toLowerCase();
        const categoriesLowerCase = categories.map( (cat) => cat.toLowerCase() );
        if( categoriesLowerCase.includes(newCategoryLowerCase) ) return;
            setCategories([newCategory, ...categories ]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ onAddCategory }
        />

        { 
            categories.map( ( category ) => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))
        }
    </>
  )
}
