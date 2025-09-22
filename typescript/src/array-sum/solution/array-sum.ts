export const arraySum = (arr: number[]) => {
  if (!arr || arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return (arr[0] + arr[1]) * 2;
  }

  let result = arr[0] + arr[1];
  for (let i = 1; i < arr.length; i++) {
    const left = arr[i - 1];
    const middle = arr[i];
    const right = arr[i + 1] || 0;

    const sum = left + middle + right;

    result += sum;
  }

  return result;
};
