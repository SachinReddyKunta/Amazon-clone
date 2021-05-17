export const initState = {
    cart : [],
    user : null
}

export const getTotal = (cart) => cart?.reduce((amount,item)=>item.price+amount,0)
export const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart : [...state.cart,action.item]
            }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart]

            const index = state.cart.findIndex((item)=> item.id===action.id)

            if(index>=0){
                 newCart.splice(index,1);

            }
            else {
                console.log("There is no item to remove")
            }
            return {...state,cart : newCart}
        default :
            return state;
    }
}