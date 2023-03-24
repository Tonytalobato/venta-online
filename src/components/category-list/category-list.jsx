import React from "react";
import "./category-list.css";
import CategoryItems from '../category-items/category-items';

const CategoryList = ({categories}) => {
    return (
        <div className='categories-container'>
        {categories.map((category) => {//siempre lleva la key
          return ( 

          <CategoryItems
            title = {category.title} 
            key={category.id}  
            img={category.img}
            />
          )
        })}
      </div>
    )
}
export default CategoryList;