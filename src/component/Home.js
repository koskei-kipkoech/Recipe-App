import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
    const navigate = useNavigate();

    // Fetch recipes from the API
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('https://dummyjson.com/recipes');
                const data = await response.json();
                setRecipes(data.recipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    // Change recipe every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRecipeIndex((prevIndex) => 
                (prevIndex + 1) % recipes.length
            );
        }, 10000);

        return () => clearInterval(interval); // Cleanup the interval
    }, [recipes.length]);

    const handleNavigate = () => {
        navigate('/mainpage');
    };

    // If there are no recipes, show a loading message
    if (recipes.length === 0) {
        return <div className="home-container">Loading recipes...</div>;
    }

    // Get the current recipe
    const currentRecipe = recipes[currentRecipeIndex];

    return (
        <div
            className="home-container"
            style={{
                backgroundImage: `url(${currentRecipe.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative'
            }}
        >
            <div
                className="overlay-content"
                style={{
                    position: 'absolute',
                    top: '40%',
                    transform: 'translateY(-50%)',
                    padding: '20px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better text visibility
                    borderRadius: '10px',
                }}
            >
                <h1>Welcome to My Recipe App</h1>
                <p className='ptag'>Find and explore delicious recipes from around the world.</p>
                <button onClick={handleNavigate} style={{ marginTop: '10px', padding: '10px 20px' }}>
                    Go to Main Page
                </button>
                <div className="recipe-info" style={{ borderRadius: '10px', maxWidth: '400px' }}>
                    <h2 className='h2'>{currentRecipe.name}</h2>
                    <p className='new'>Preparation Time:{currentRecipe.prepTimeMinutes} minutes</p>
                    <p className='new'>Cooking Time:{currentRecipe.cookTimeMinutes}minutes</p>
                    <p className='new'>Meal Type: {currentRecipe.mealType.join(', ')}</p>
                    <p className='new'>Rating: {currentRecipe.rating} ({currentRecipe.reviewCount} reviews)</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
