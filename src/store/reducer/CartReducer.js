const initialState = {
  cartItems: [],
};
export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const alreadyExists = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      console.log('alreadye exist',alreadyExists);
      if (alreadyExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload_id ? action.payload : item
          ),
        };
      } 
      else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    }

    case "DELETE_CART": {
    
       let deletedCart =  state.cartItems.filter(
          (item) => item._id != action.payload._id
        );
        return {
          ...state,
          cartItems: deletedCart,
        };
      }




    //   case "ADD_TASK": {
    //     let newData = [...state.tasks, action.payload];
    //     return {
    //       ...state,
    //       tasks: newData,
    //     };
    //   }
      // 

    default:
      return state;
  }
};
