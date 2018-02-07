const filtersReducerDefaultState = {
  categories: ["Projects", "Boilerplates", "Node Modules", "Snippets"],
  technologies: ["HTML5", "CSS3", "JavaScript"]
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_CATEGORIES":
      return {
        ...state,
        categories: action.categories
      };
    case "UPDATE_TECHNOLOGIES":
      return {
        ...state,
        technologies: action.technologies
      };
    default:
      return state;
  }
};
