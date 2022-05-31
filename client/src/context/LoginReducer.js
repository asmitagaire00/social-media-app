const LoginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: !state.isFetching,
        error: state.error,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        isFetching: state.isFetching,
        error: state.error,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: state.isFetching,
        error: !state.error,
      };
    default:
      state;
  }
};

export default LoginReducer;
