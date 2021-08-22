export const verifyEmail = (email) => {
  const regex = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
  return regex.test(email);
}
