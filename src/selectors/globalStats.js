export default projects => {
  const keys = ["numOfComponents", "clientjs", "serverjs", "css", "html"];
  const totalStats = {};
  keys.forEach(key => {
    const stat = projects.reduce((a, b) => {
      if (b.stats[key]) {
        return a + b.stats[key];
      }
      return a;
    }, 0);
    totalStats[key] = stat;
  });
  return totalStats;
};
