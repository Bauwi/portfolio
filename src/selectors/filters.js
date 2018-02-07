const getVisibleProjects = (projects, { categories, technologies }) => {
  return projects
    .filter(project => categories.includes(project.type))
    .filter(project => {
      const matching = project.options.filter(option =>
        technologies.includes(option)
      );
      return matching.length >= technologies.length;
    });
};
export default getVisibleProjects;
