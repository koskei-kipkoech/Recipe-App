import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';


const Mealcards = ({detail}) => {
    console.log(detail)
    return (
        <div>
            <div className='meals'>
            {!detail ? "": detail.map((currItem) => {
                return (
                    <div className='mealImg'>
                        <img src={currItem.strMealThumb} alt="Product" />
                        <p>{currItem.strMeal}</p>
                        <NavLink to={`/${currItem.idMeal}`}>
                            <button>Recipe</button>
                        </NavLink>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default Mealcards;
