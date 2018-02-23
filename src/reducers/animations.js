const animationReducerDefaultState = {
  home: false
};

export default (state = animationReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_HOME_ANIMATION_PLAYED":
      return {
        home: true
      };

    default:
      return state;
  }
};
