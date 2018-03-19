export default function(transitions, pieceOfState) {
  transitions.forEach((cur, i) => {
    setTimeout(() => {
      this.setState(prevState => ({
        [`${pieceOfState}`]: prevState[pieceOfState].replace(
          cur.className.trim(),
          ""
        )
      }));
    }, cur.delay);
  });
}
