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
      console.log("id in delete reducer", action.payload);
      let data= state.tasks;
      console.log('data in redcuer',data);
      let deletedData = data?.data?.filter((item) => {
        if (item._id !== action.payload) {
          return item;
        }
      });
console.log('deletdData', deletedData);
      return {
        ...state,
        tasks: deletedData,
      };
    }

    default:
      return state;
  }
};
