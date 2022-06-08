import { createContext, useReducer } from "react";
import LoginReducer from "./LoginReducer";
import PropTypes from "prop-types";

const USER_INITIAL_STATE = {
  user: {
    _id: "628c19d188c621a89e9f8a71",
    username: "Ram",
    email: "ram@gmail.com",
    password: "hello",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const LoginContext = createContext(USER_INITIAL_STATE);

export default function LoginContextProvider({ children }) {
  const [state, dispatch] = useReducer(LoginReducer, USER_INITIAL_STATE);

  return (
    <div>
      <LoginContext.Provider
        value={{
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </LoginContext.Provider>
    </div>
  );
}

LoginContextProvider.propTypes = {
  children: PropTypes.children,
};
