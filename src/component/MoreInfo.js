import React from "react";
import "../App.css";

const MoreInfo = ({ info }) => {
    // Helper function to render ingredients and measurements
    const renderIngredients = () => {
        let ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = info[`strIngredient${i}`];
            const measure = info[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
                ingredients.push(
                    <li key={i}>
                        {measure} {ingredient}
                    </li>
                );
            }
        }
        return ingredients;
    };

    return (
        <div className="moreInfo">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">{renderIngredients()}</ul>
            {info.strYoutube && (
                <div className="video">
                    <h3>Video Tutorial</h3>
                    <a href={info.strYoutube} target="_blank" rel="noopener noreferrer">
                        Watch on YouTube
                    </a>
                </div>
            )}
        </div>
    );
};

export default MoreInfo;
