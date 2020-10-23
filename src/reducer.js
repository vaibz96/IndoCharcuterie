export const initialState = {
    basket:[],
    user: null,
};

export const getCartTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_CART':
            //LOGIC FOR ADDING TO CART
          return { 
            ...state,
            basket: [...state.basket, action.item],
           };
        case 'REMOVE_FROM_CART':
            //LOGIC FOR REMOVING FROM CART

            //CLOND THE CART
            let newCart = [...state.basket];

            // WE CHECK 
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if (index >= 0) {
                // ITEM EXISTS IN BASKET, REMOVE IT
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id} as it's not present)`
                );
            }

            return { 
                ...state,
                basket: newCart,
             };
        default:
            return { state };
    }
} 

export default reducer;