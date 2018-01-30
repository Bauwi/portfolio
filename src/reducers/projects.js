const projectsReducerDefaultState = { projects: [] };

export default (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.project]
      };
    case "PROJECTS_IS_LOADING":
      return {
        ...state,
        isLoading: action.bool
      };
    case "PROJECTS_HAS_ERRORED":
      return {
        ...state,
        hasErrored: action.bool
      };
    case "SET_PROJECTS":
      return {
        ...state,
        projects: [...state.projects, ...action.projects]
      };
    default:
      return state;
  }
};
