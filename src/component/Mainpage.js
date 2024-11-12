import React, { useState } from 'react'
import Mealcards from './Mealcards'
import "../App.css"

const Mainpage = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");


    const handleInput = (event) =>{
        setSearch(event.target.value)
    }

    const myFun = async() => {
        if(search === ""){
            setMessage("Please Enter Something 🍔")
        }else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const jsonData = await get.json()
            //console.log(jsonData.meals)
            setData(jsonData.meals)
            setMessage('')
        }
    }
    
    //console.log(data)
    return (
        <>
            <h1 className='App'>My Recipe App</h1>
            <div className='container'>
                <div className='searchBar'>
                    <input type='text' placeholder='Enter Spices type...' onChange={handleInput}/>
                    <button onClick={myFun}>Search</button>
                </div>
                <h4 className='msg'>{message}</h4>
                <div>
                    <Mealcards detail={data}/>
                </div>
            </div>
        </>
    )
}

export default Mainpage;
