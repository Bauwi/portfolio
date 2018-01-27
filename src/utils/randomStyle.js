const randomStyle = () => {
  const randomHeight = `grid-item-height-${Math.ceil(Math.random() * 5)}`;
  const className = `grid-item ${randomHeight}`;
  return className;
};

export default randomStyle;
