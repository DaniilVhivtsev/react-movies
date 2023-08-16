import {Link, useLocation, useNavigate, useParams, useResolvedPath, Routes, Route} from "react-router-dom";

export function Movie() {
    const {id} = useParams(); // pathParam. Ключ : . \:id
    const navigate = useNavigate();
    const url = useResolvedPath("").pathname;
    console.log(url);
    const value2 = useLocation();
    console.log(value2);

    return (
        <>
            <h1>
                Some movie by {id}
            </h1>
            <button className='btn' onClick={() => navigate(-1)}>
                Go back
            </button>

           {/* <li>
                <Link to={`${url}/hello`}>Hello</Link>
            </li>
            <li>
                <Link to={`${url}/today`}>Today</Link>
            </li>
            <li>
                <Link to={`${url}/afternoon`}>Afternoon</Link>
            </li>

            <Routes>
                <Route path={`${url}/: id`} Component={Example}/>
            </Routes>*/}
        </>
    );
}

/*
export function Example() {
    const {id} = useParams();

    return (
        <h1>{id}</h1>
    );
}*/
