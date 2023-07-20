import {useEffect, useContext} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";
import {ShopContext} from "../Context";

export function Shop() {
    const {
        loading,
        isBasketShow,
        alertName,
        handleSetGoods = Function.prototype,
    } = useContext(ShopContext);


    useEffect(function getGoods() {
        fetch(`${API_URL}/v1/shop?lang=en`, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then((data) => {
                console.log('sdf')
                handleSetGoods(data.featured);
            })
    }, [])

    return (
        <main className='container content'>
            <Cart />
            {loading ? <Preloader/> : <GoodsList/>}
            {isBasketShow && <BasketList/>}
            {alertName && <Alert/>}
        </main>
    );
}
