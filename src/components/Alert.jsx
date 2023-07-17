import {useEffect} from "react";

function Alert(props) {
    const {
        name = '',
        handleCloseAlert = Function.prototype
    } = props; // деструктурировать

    useEffect(() => {
        const idTimer = setTimeout(handleCloseAlert, 3000);

        return () => {
            clearTimeout(idTimer);
        }
    }, [name])

    return (
        <div id='toast-container'>
            <div className='toast'>
                {name} добавлен в корзину
            </div>
        </div>
    );
}

export {Alert};