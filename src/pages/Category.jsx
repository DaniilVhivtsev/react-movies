import {useNavigate, useParams} from "react-router-dom";
import {getMealByCategory} from "../api";
import {useEffect, useState} from "react";
import {Preloader} from "../components/Preloader";
import {MealList} from "../components/MealList";

function Category() {
    const {title} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getMealByCategory(title)
            .then(data => data.meals && setMeals(data.meals))
    }, [title]);

    return (
        <>
            <button className='btn' onClick={() => navigate(-1)}>Go back</button>
            {
                !meals.length ? <Preloader/> : <MealList meals={meals}/>
            }
        </>
    )
}

export {Category};