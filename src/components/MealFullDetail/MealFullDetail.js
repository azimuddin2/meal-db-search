import React from 'react';

const MealFullDetail = (props) => {
    console.log(props);
    const { strMeal, strInstructions, strMealThumb, strArea } = props.meal;
    return (
        <div className='row mx-5 p-5 border rounded-3'>
            <div className='d-grid col-4'>
                <img className='w-100 rounded-3' src={strMealThumb} alt="" />
            </div>
            <div className='d-grid col-8'>
                <h2>{strMeal}</h2>
                <p>{strInstructions}</p>
                <p>Area: {strArea}</p>
            </div>
        </div>
    );
};

export default MealFullDetail;