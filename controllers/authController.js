export const loginPage = (req, res) => {
  res.render("auth/login", { title: "Login" });
};

export const registerPage = (req, res) => {
  res.render("auth/register", { title: "Register" });
};