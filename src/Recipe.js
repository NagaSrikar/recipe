import React from 'react'
const Recipe = ({title,calorie,image,ingredients}) => {
    return (
        <div className='recipe-container'>
            <h1 className='title'>{title}</h1>
            <ol className='list'>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calorie}</p>
            <img className='photo' src={image} alt=''/>

        </div>

    )
};
export default Recipe;