export function Reducer(state, {type, payload}) {
    switch (type) {
        case 'HANDLE_CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };

        case 'REMOVE_FROM_BASKET':
            const newOrder = state.order.filter(el => el.id !== payload.id);
            return {
                ...state,
                order: newOrder,
            };

        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((item) => {
                    if (item.id === payload.id) {
                        const newQuantity = item.quantity - 1;
                        return {
                            ...item,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    }

                    return item;
                }),
            };

        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((item) => {
                    if (item.id === payload.id) {
                        const newQuantity = item.quantity + 1;
                        return {
                            ...item,
                            quantity: newQuantity,
                        };
                    }

                    return item;
                }),
            };

        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.item.id);

            let newOrder = null
            if (itemIndex < 0) {
                const newItem = {
                    ...payload.item,
                    quantity: 1
                };
                newOrder = {
                    ...newItem
                };
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                alertName: payload.item.name,
                order: newOrder,
            };
        }

        case 'HANDLE_BASKET_SHOW': {
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            }
        }

        default:
            return state;
    }
}