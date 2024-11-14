import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch saved recipes from the API when the component mounts
        const fetchSavedRecipes = async () => {
            try {
                const response = await fetch("https://recipe-app-yt9e.onrender.com/savedRecipes");
                if (!response.ok) {
                    throw new Error("Failed to fetch saved recipes");
                }
                const data = await response.json();
                setSavedRecipes(data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
                alert("Error fetching saved recipes. Please try again later.");
            }
        };
        fetchSavedRecipes();
    }, []);

    const handleDeleteRecipe = async (idMeal) => {
        console.log("Attempting to delete recipe with ID:", idMeal);
        try {
            const response = await fetch(`https://recipe-app-yt9e.onrender.com/savedRecipes/${idMeal}`, {
                method: 'DELETE',
            });
            
            if (response.ok) {
                // If deletion is successful, update the state
                setSavedRecipes(savedRecipes.filter(recipe => recipe.idMeal !== idMeal));
                alert("Recipe deleted successfully!");
            } else {
                // Log the response from the backend
                const errorDetails = await response.json();  
                console.error('Failed to delete recipe:', errorDetails);
                alert('Error deleting recipe: ' + (errorDetails.message || response.statusText));
            }
        } catch (error) {
            // Catch network or other errors
            console.error("Error in DELETE request:", error);
            alert("Error deleting recipe: " + error.message);
        }
    };
    
    

    const handleBackToRecipe = () => {
        navigate('/mainpage');
    };

    return (
        <div>
            <h1 className='App'>Saved Recipes</h1>
            <div className='meals'>
                {savedRecipes.length > 0 ? (
                    savedRecipes.map(recipe => (
                        <div className='mealImg' key={recipe.idMeal}>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                            <p>{recipe.strMeal}</p>
                            <NavLink to={`/${recipe.idMeal}`}>
                                <button>View Recipe</button>
                            </NavLink>
                            <button onClick={() => handleDeleteRecipe(recipe.idMeal)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No saved recipes found.</p>
                )}
            </div>
            <button className='backbutton' onClick={handleBackToRecipe}>Back To Recipes</button>
        </div>
    );
};

export default SavedRecipes;
