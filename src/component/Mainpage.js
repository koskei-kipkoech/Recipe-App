import React, { useState, useEffect } from 'react'
import Mealcards from './Mealcards'
import "../App.css"

const Mainpage = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");

    // Retrieve the search term from sessionStorage when the component mounts
    useEffect(() => {
        const savedSearch = sessionStorage.getItem("searchTerm");
        if (savedSearch) {
            setSearch(savedSearch);  // Pre-fill the input with the saved search term
            fetchData(savedSearch);  // Fetch the data for the saved search term
        }
    }, []); // This will run only once when the component is first mounted

    const handleInput = (event) => {
        setSearch(event.target.value);
    };

    const fetchData = async (searchTerm) => {
        if (searchTerm === "") {
            setMessage("Please Enter Something 🍔");
            setData(null); // Clear the previous data
        } else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const jsonData = await get.json();
            setData(jsonData.meals);
            setMessage('');
        }
    };

    const myFun = () => {
        if (search === "") {
            setMessage("Please Enter Something 🍔");
        } else {
            // Save the search term in sessionStorage
            sessionStorage.setItem("searchTerm", search);
            fetchData(search); // Fetch data based on new search term
        }
    };

    return (
        <>
            <h1 className='App'>My Recipe App</h1>
            <div className='container'>
                <div className='searchBar'>
                    <input
                        type='text'
                        value={search} // Pre-fill input field with the current search term
                        placeholder='Enter Spices type...'
                        onChange={handleInput}
                    />
                    <button onClick={myFun}>Search</button>
                </div>
                <h4 className='msg'>{message}</h4>
                {data ? (
                    <div>
                        <Mealcards detail={data} />
                    </div>
                ) : (
                    <div className="default-image-container">
                        <img
                            src="https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Delicious Food"
                            className="default-image"
                        />
                        <div className="overlay-message">
                            <h1>Search Your Favorite Recipe🔍 <br/> 🍔 🥩 🌶️ 🌿 🧄 🧅 🌱 🍳 🥕<br/>🥬 🍤 🥓 🍗 🥦 🥣 🍝</h1>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Mainpage;
