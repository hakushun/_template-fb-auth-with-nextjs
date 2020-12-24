export const getStaringDate = (date: Date): string => {
  const dt = new Date(date);
  const years = dt.getFullYear();
  const months = ('00' + (dt.getMonth() + 1)).slice(-2);
  const dates = ('00' + dt.getDate()).slice(-2);
  return `${years}/${months}/${dates}`;
};

export const getStaringTimestamp = (date: Date): string => {
  const dt = new Date(date);
  const years = dt.getFullYear();
  const months = ('00' + (dt.getMonth() + 1)).slice(-2);
  const dates = ('00' + dt.getDate()).slice(-2);
  const hours = ('00' + (dt.getHours() + 1)).slice(-2);
  const minutes = ('00' + dt.getMinutes()).slice(-2);
  const seconds = ('00' + (dt.getSeconds() + 1)).slice(-2);
  return `${years}/${months}/${dates} ${hours}:${minutes}:${seconds}`;
};