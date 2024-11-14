import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import MoreInfo from "./MoreInfo";

const Mealinfo = () => {
    const [info, setInfo] = useState(null);
    const [showMoreInfo, setShowMoreInfo] =useState(false)
    const { mealid } = useParams();
    const  navigate =useNavigate()
    console.log(mealid);
    useEffect(()=>{
        const getInfo = async () => {
            try{
                const get = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
                    );
                    const jsonData = await get.json();
                    console.log(jsonData.meals[0]);
                    setInfo(jsonData.meals[0]);
            }catch(error){
                console.error("Error Fetching Meal Information:", error)
            }
        };
            getInfo();
    },[mealid]);
    
    const handleBackToSearch = () => {
        const searchQuery = new URLSearchParams(window.location.search).get("search");
        navigate(`/mainpage?search=${searchQuery}`);
    };
    return (
        <div>
        {!info ? (
            "Data Not Found"
        ) : (
            <div className="mealInfo">
                <img src={info.strMealThumb} alt={info.strMeal}  className="mealImage"/>
                <div className="info">
                    <h1>Recipe Details</h1>
                    <button>{info.strMeal}</button>
                    <p><strong>Category:</strong> {info.strCategory}</p>
                    <p><strong>Area:</strong> {info.strArea}</p>
                    <h3>Instructions</h3>
                    <p>{info.strInstructions}</p>
                    <button onClick={() => setShowMoreInfo(!showMoreInfo)}>
                            {showMoreInfo ? "Hide More Info" : "Show More Info"}
                    </button>
                    {showMoreInfo && <MoreInfo info={info} />}
                    <button onClick={handleBackToSearch}>Back to Search</button>
                </div>
            </div>
        )}
        </div>
    );
};

export default Mealinfo;
