export const getDaysPassDate = (prevDate: string): string => {
  const dateNow = new Date();
  const datePrew = new Date(prevDate);
  let timeToDate: number = (dateNow.getTime() - datePrew.getTime()) / 86400000;
  if (timeToDate > 365) {
    return `Posted ${Math.floor(timeToDate / 356)} years ago`;
  } else {
    return `Posted ${timeToDate} days ago`;
  }
};
