import axios from "axios";

const loginHasErrored = (bool, err) => ({
  type: "LOGIN_HAS_ERRORED",
  bool
});

const loginIsLoading = bool => ({
  type: "LOGIN_IS_LOADING",
  bool
});

export const login = user => ({
  type: "LOGIN",
  user
});

export const startLogin = credentials => async dispatch => {
  dispatch(loginIsLoading(true));
  try {
    const response = await axios.post(
      `http://localhost:3001/users/login`,
      credentials
    );

    await dispatch(login(response.data));
    await sessionStorage.setItem("user", JSON.stringify(response.data));

    dispatch(loginIsLoading(false));
  } catch (error) {
    dispatch(loginIsLoading(false));
    dispatch(loginHasErrored(true));
    throw new Error("Unable to login", error);
  }
};
