export const listUsers = (req, res) => {
  res.render("users/list", { title: "User List" });
};

export const getUserById = (req, res) => {
  const userId = req.params.id;

  res.render("users/profile", {
    title: "Title lang",
    userId
  });
};
