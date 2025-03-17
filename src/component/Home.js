import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch recipes from the API
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://dummyjson.com/recipes');
                const data = await response.json();
                setRecipes(data.recipes);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    // Change recipe every 10 seconds
    useEffect(() => {
        if (recipes.length === 0) return;
        
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

    // If loading, show a spinner
    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Discovering delicious recipes...</p>
            </div>
        );
    }

    // If there are no recipes, show an error message
    if (recipes.length === 0) {
        return (
            <div className="error-container">
                <h2>Oops! Something went wrong</h2>
                <p>We couldn't find any recipes. Please try again later.</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    // Get the current recipe
    const currentRecipe = recipes[currentRecipeIndex];

    return (
        <div
            className="home-container"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${currentRecipe.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                transition: 'background-image 1s ease-in-out'
            }}
        >
            <div className="recipe-carousel-indicator">
                {recipes.slice(0, 5).map((_, idx) => (
                    <span 
                        key={idx} 
                        className={`carousel-dot ${idx === currentRecipeIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
            
            <div
                className="welcome-content"
                style={{
                    padding: '30px',
                    maxWidth: '800px',
                    width: '90%',
                    borderRadius: '15px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    animation: 'fadeIn 0.5s ease-in-out'
                }}
            >
                <h1 style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '10px',
                    fontWeight: '700',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                }}>
                    Culinary Delights
                </h1>
                <p style={{ 
                    fontSize: '1.2rem', 
                    marginBottom: '25px',
                    fontWeight: '300',
                    maxWidth: '600px',
                    margin: '0 auto 25px'
                }}>
                    Discover mouthwatering recipes from around the world, perfectly crafted for your kitchen adventures.
                </p>
                
                <button 
                    onClick={handleNavigate} 
                    style={{ 
                        padding: '12px 28px',
                        fontSize: '1.1rem',
                        backgroundColor: '#FF6B6B',
                        color: 'white',
                        border: 'none',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        marginBottom: '25px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#FF5252'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#FF6B6B'}
                >
                    Explore Recipes
                </button>
                
                <div className="recipe-highlight" style={{ 
                    padding: '20px', 
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(5px)',
                    marginTop: '10px',
                    animation: 'slideUp 0.5s ease-in-out',
                    transition: 'all 0.3s ease'
                }}>
                    <h2 style={{ 
                        fontSize: '1.8rem', 
                        marginBottom: '15px',
                        color: '#FFD166'
                    }}>
                        Featured: {currentRecipe.name}
                    </h2>
                    
                    <div className="recipe-stats" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '15px',
                        marginBottom: '15px'
                    }}>
                        <div className="stat-item">
                            <span className="stat-icon">⏱️</span>
                            <span className="stat-label">Prep: {currentRecipe.prepTimeMinutes} min</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-icon">🍳</span>
                            <span className="stat-label">Cook: {currentRecipe.cookTimeMinutes} min</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-icon">🍽️</span>
                            <span className="stat-label">{currentRecipe.mealType.join(', ')}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-icon">⭐</span>
                            <span className="stat-label">{currentRecipe.rating} ({currentRecipe.reviewCount} reviews)</span>
                        </div>
                    </div>
                    
                    <p style={{ fontSize: '1rem', fontStyle: 'italic', opacity: '0.9' }}>
                        {currentRecipe.cuisine} cuisine • {currentRecipe.difficulty} difficulty • Serves {currentRecipe.servings}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;