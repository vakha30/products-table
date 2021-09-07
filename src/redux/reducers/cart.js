const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = (data) => {
    return Object.keys(data).reduce((acum, key) => data[key].totalPrice + acum, 0);
}

const getTotalCount = (data) => {
    return Object.keys(data).reduce((acum, key) => data[key].count + acum, 0);
}


const products = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            
            const newItems = {
                ...state.items,
                [action.payload.id]: action.payload
            }
            return {
                ...state,
                items: newItems,
                totalPrice: getTotalPrice(newItems),
                totalCount: getTotalCount(newItems)
            }

        default:
            return state
    }
}

export default products;
