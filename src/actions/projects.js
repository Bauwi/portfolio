import axios from "axios";

const projectsIsLoading = bool => ({
  type: "PROJECTS_IS_LOADING",
  bool
});

const projectsHasErrored = bool => ({
  type: "PROJECTS_HAS_ERRORED",
  bool
});

const setProjects = projects => ({
  type: "SET_PROJECTS",
  projects
});

export const startSetProjects = () => async (dispatch, getState) => {
  dispatch(projectsIsLoading(true));
  const response = await axios.get("http://localhost:3001/projects");
  console.log(response.data);
  await dispatch(setProjects(response.data.projects));
  dispatch(projectsIsLoading(false));
};

const addProject = project => ({
  type: "ADD_PROJECT",
  project
});

export const startAddProject = project => async (dispatch, getState) => {
  try {
    await axios.post("http://localhost:3001/projects", project, {
      headers: { "x-auth": getState().auth.user.token }
    });
    dispatch(addProject(project));
  } catch (error) {
    return console.log("Unable to add project", error);
  }
};
