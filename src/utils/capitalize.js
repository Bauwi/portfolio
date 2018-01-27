const capitalize = str => {
  return str
    .split("")
    .slice(1, str.length)
    .map(letter => letter.toUpperCase())
    .join("");
};

export default capitalize;
