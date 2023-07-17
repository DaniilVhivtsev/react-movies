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

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }

        setAlertName(item.name);
    }

    const incrementQuantity = (itemId) => {
        const newOrder = order.map((item) => {
            if (item.id === itemId) {
                const newQuantity = item.quantity + 1;
                return {
                    ...item,
                    quantity: newQuantity,
                }
            }

            return item;
        });

        setOrder(newOrder);
    }

    const decrementQuantity = (itemId) => {
        const newOrder = order.map((item) => {
            if (item.id === itemId) {
                const newQuantity = item.quantity - 1;
                return {
                    ...item,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            }

            return item;
        });

        setOrder(newOrder);
    }

    const removeFromBasket = (id) => {
        const newOrder = order.filter(el => el.id !== id);
        setOrder(newOrder);
    }

    const handleCloseAlert = () => {
        setAlertName('');
    }

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
