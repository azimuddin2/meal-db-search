import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MealFullDetail from '../MealFullDetail/MealFullDetail';

const MealDetail = () => {
    const { mealId } = useParams();
    const [mealDetail, setMealDetail] = useState([])
    // console.log(mealDetail)

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMealDetail(data.meals))
    }, [mealId])

    return (
        <div>
            <h1>Meal Detail Id: {mealId}</h1>
            {
                mealDetail.map(meal => <MealFullDetail
                    key={meal.idMeal}
                    meal={meal}
                ></MealFullDetail>)
            }
        </div>
    );
};

export default MealDetail;