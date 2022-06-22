import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText])

    const searchMeal = event => {
        setSearchText(event.target.value);
    }

    return (
        <div className='m-5'>
            <input onChange={searchMeal} className='w-25  py-1 px-2' placeholder='Search for Meal' type="text" />
            <p>Result found: {meals.length}</p>
            <div className='row'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;