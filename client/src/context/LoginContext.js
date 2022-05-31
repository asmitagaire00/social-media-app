import { createContext, useReducer } from "react";
import LoginReducer from "./LoginReducer";
import PropTypes from "prop-types";

const USER_INITIAL_STATE = {
  user: null,
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
