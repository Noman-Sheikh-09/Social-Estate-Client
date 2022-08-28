import { formControlClasses } from "@mui/material";

const initalState = {
  isUserLoggedIn: false,
  user: {},
};

export const AuthReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SIGNUP": {
      return {
        ...state,
        user: action.payload,
        isUserLoggedIn: true,
      };
    }
    case "SIGNIN": {
        return {
          ...state,
          user: action.payload,
          isUserLoggedIn: true,
        };
      }
    case "ACTIVE_USER": {
        return {
          ...state,
          user: action.payload,
          isUserLoggedIn: true,
        };
      }
      case "LOGOUT": {
        return {
          
          user: null,
          isUserLoggedIn: false,
        };
      }
    default:
      return state;
  }
};
