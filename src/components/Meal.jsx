import {Link} from "react-router-dom";

function Meal(props) {
    const {
        strMeal: title,
        idMeal: id,
        strMealThumb: imgUrl,
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={imgUrl} alt={title}/>
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
            </div>

            <div className="card-action">
                <Link to={`/meal/${id}`} className='btn'>
                    Watch recipe
                </Link>
            </div>
        </div>
    )
}

export {Meal};