function superbowlWin(arr) {
  const found = arr.find((element) => element.result === "W");
  return (found === undefined? undefined : found.year)
  };