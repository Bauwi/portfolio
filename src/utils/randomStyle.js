const randomStyle = () => {
  const randomHeight = `grid-item-height-${Math.ceil(Math.random() * 5)}`;
  const randomPattern = `grid-item-pattern-${Math.ceil(Math.random() * 8)}`;
  const className = `grid-item ${randomHeight} ${randomPattern}`;
  return className;
};

export default randomStyle;
