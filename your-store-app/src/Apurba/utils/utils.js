export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser")) || [];
};

export const updateUserLocalStorage = (user) => {
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users"));

  const filtered = users.filter((el) => el.email !== user.email);
  filtered.push(user);

  localStorage.setItem("users", JSON.stringify(filtered));

  const currUser = [];
  currUser.push(user);
  localStorage.setItem("currentUser", JSON.stringify(currUser));
};