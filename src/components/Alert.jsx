import {useContext, useEffect} from "react";
import {ShopContext} from "../Context";

function Alert() {
    const {
        alertName = '',
        handleCloseAlert = Function.prototype
    } = useContext(ShopContext); // деструктурировать

    useEffect(() => {
        const idTimer = setTimeout(handleCloseAlert, 3000);

        return () => {
            clearTimeout(idTimer);
        }
    }, [alertName])

    return (
        <div id='toast-container'>
            <div className='toast'>
                {alertName} добавлен в корзину
            </div>
        </div>
    );
}

export {Alert};