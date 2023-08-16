import {Link, useNavigate} from "react-router-dom";

export function CategoryItem(props) {
    const {
        // idCategory: id,
        strCategory: title,
        strCategoryDescription: description,
        strCategoryThumb: imgUrl
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={imgUrl} alt={title}/>
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{description.slice(0, 60)}</p>
            </div>

            <div className="card-action">
                <Link to={`/category/${title}`} className='btn'>
                    Watch category
                </Link>
            </div>
        </div>
    )
}