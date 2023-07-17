function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incrementQuantity = Function.prototype,
        decrementQuantity = Function.prototype,
    } = props;

    console.log(name);
    return (
            <li className="collection-item">
                {name} <i className="material-icons basket-quantity" onClick={() => decrementQuantity(id)}>remove</i> x{quantity}{' '}
                <i className="material-icons basket-quantity" onClick={() => incrementQuantity(id)}>add</i> = {price * quantity} руб.
                <span className="secondary-content" onClick={() => removeFromBasket(id)}>
                    <i className="material-icons basket-delete">close</i>
                </span>
            </li>
    );
}

export {BasketItem};