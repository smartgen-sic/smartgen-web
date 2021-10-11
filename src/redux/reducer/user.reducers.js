import { REGISTER } from "../actions/Signup.actions";

const token = localStorage.getItem("token");

const initialState = token
    ? { isLogged: true, data: [], error: null }
    : {
          isLogged: false,
          data: [],
          error: null,
      };

const user = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                registerData: action.payload,
            };
        default:
            return state;
    }
};

export default user;
