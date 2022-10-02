const isEven = (num: number) => {
  if (num & 1) {
    // ODD
    return false;
  } else {
    // EVEN
    return true;
  }
};

const oneStep = (num: number) => {
  const numIsEven = isEven(num);
  if (numIsEven) {
    num = num / 2;
  } else {
    num = num * 3 + 1;
  }
  return num;
};

export const runCollatz = (num: number, addToCollection: { (num: number): void; (arg0: number): void; }) => {
  addToCollection(num);
  let startNum = num;
  while (startNum !== 1) {
    startNum = oneStep(startNum);
    addToCollection(startNum);
  }
};
