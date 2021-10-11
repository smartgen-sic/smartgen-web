import axios from "axios";

export const REGISTER = "REGISTER";

export const setRegister = (data) => {
    return {
        type: REGISTER,
        payload: data,
    };
};

export const registerActions = (values, event, history) => (dispatch) => {
    event.preventDefault();
    console.log("tes param", values);

    return axios
        .post("https://5f51a6865e98480016123bdd.mockapi.io/users", values)
        .then((response) => {
            console.log("res", response);
            dispatch(setRegister(response.data.student));
            history.push("/register");
        })
        .catch((error) => {
            console.log(error);
        });
};
