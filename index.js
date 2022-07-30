const service = require("./service");
// function gte(a, b) {
//   if (a > b) return true;
//   if (a < b) return false;
//   if (a === b) return true;
// }

// function gte(a, b) {
//   return a >= b ? true : false;
// }

// function welcomeMessage(name) {
//   return `hello ${name} welcome to jest`;
// }

// function shopingTest() {
//   return ["milk", "cake", "kabab"];
// }

// function objectUser() {
//   return { id: 1, name: "amir" };
// }

// function loginUser(password) {
//   if (password !== "1234") {
//     throw new Error("password is worng");
//   } else {
//     return { jwt: "p3200f93" };
//   }
// }

// module.exports = { gte, welcomeMessage, shopingTest, objectUser, loginUser };

const calculateDiscount = (id) => {
  let discount = 0;
  let user = service.getUserById(id);
  if (user.bueproduct > 3) {
    discount = 10;
    service.sendEmail(user.name, `you got ${discount} precent discount`);
    return discount;
  }
};

module.exports = {
  calculateDiscount,
};
