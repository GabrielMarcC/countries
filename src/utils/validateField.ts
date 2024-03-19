export const validateField = (value: string) => {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(value);
};
