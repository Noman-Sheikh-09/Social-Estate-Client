const initialState = {
  tasks: [],
};

export const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASK": {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case "ADD_TASK": {
      let newData = [...state.tasks, action.payload];
      return {
        ...state,
        tasks: newData,
      };
    }
    case "DELETE_TASK": {
     let deletedData =  state.tasks.filter(
        (item) => item.id != action.payload
      );
      return {
        ...state,
        tasks: deletedData,
      };
    }
  

    default:
      return state;
  }
};
