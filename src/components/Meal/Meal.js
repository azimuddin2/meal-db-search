import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';
import { useNavigate } from "react-router-dom";

const Meal = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;

    const navigate = useNavigate();

    const handleMealDetail = () => {
        navigate(`/meal/${idMeal}`)
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5'>
            <img className='w-100' src={strMealThumb} alt="" />
            <div className='border border-top-0 p-3 rounded-bottom'>
                <h2>{strMeal}</h2>
                <p>{strInstructions.slice(0, 80)}</p>
                <Link to={'/meal/' + idMeal}>Buy Now</Link>
                <button onClick={handleMealDetail} className='btn btn-success ms-3'>Buy Now</button>
            </div>
        </div>
    );
};

export default Meal;