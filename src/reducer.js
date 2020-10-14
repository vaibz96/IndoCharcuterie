export const initialState = {
    basket:[{
            description: "You can enjoy this lip-smacking butter chicken dish on occasions such as kitty party, potluck, and even buffet.",
            id: 1,
            image: "https://i0.wp.com/notacurry.com/wp-content/uploads/2015/02/Best-butter-chicken-recipe-instagram.jpg?resize=682%2C600&ssl=1",
            price: 7.99,
            rating: 5,
            title: "Butter Chicken",
        },
    ],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            //LOGIC FOR ADDING TO CART
          return { 
            ...state,
            basket: [...state.basket, action.item],
           };
        case 'REMOVE_FROM_CART':
            //LOGIC FOR REMOVING FROM CART
            return { state };
        default:
            return { state };
    }
} 

export default reducer;