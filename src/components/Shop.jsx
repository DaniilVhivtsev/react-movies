import {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";

export function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    useEffect(function getGoods() {
        fetch(`${API_URL}/v1/shop?lang=en`, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            })
    }, [])

    return (
        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading
                ? <Preloader />
                : <GoodsList goods={goods} addToBasket={addToBasket}/>
            }

            {
                isBasketShow
                && <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                />
            }

            {
                alertName && <Alert name={alertName} handleCloseAlert={handleCloseAlert} />
            }
        </main>
    );
}
