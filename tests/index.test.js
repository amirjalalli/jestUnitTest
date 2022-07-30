const {
  gte,
  welcomeMessage,
  shopingTest,
  objectUser,
  loginUser,
  calculateDiscount,
} = require("./../index");

const service = require("./../service");

// test("first test Error", () => {
//   throw new Error("my First Error With Jest");
// });
// number test
// describe("gte", () => {
//   it("a bigger than b return TRUE", () => {
//     const result = gte(10, 5);
//     expect(result).toBe(true);
//   });
//   it("a lesser than b return FALSE", () => {
//     const result = gte(5, 10);
//     expect(result).toBe(false);
//   });
//   it("a equal b return TRUE", () => {
//     let eqlResult = gte(6, 6);
//     expect(eqlResult).toBe(true);
//   });
// });
// // string test
// describe("welcomeMessage", () => {
//   it("name test in text", () => {
//     let result = welcomeMessage("amir");
//     expect(result).toContain("amir");
//   });
// });

// describe("shopping list ", () => {
//   it("has milk in arrat", () => {
//     let result = shopingTest();
//     expect(result).toContain("milk");
//   });
// });

// describe("object User", () => {
//   it("object test", () => {
//     let resultObj = objectUser();
//     expect(resultObj).toEqual({ id: 1, name: "amir" });
//     expect(resultObj).toMatchObject({ name: "amir" });
//     expect(resultObj).toHaveProperty("id", 1);
//   });
// });

// describe("login User", () => {
//   it("should be worng password to be thorw", () => {
//     expect(() => {
//       loginUser("56789");
//     }).toThrow();
//   });
//   it("password is right", () => {
//     let rightPassword = loginUser("1234");
//     expect(rightPassword).toHaveProperty("jwt");
//   });
// });

describe("calculateDiscount", () => {
  beforeEach(() => {
    service.sendEmail = jest.fn();
  });
  it("should return 10 if user has more than 3 purchase", () => {
    service.getUserById = jest.fn().mockReturnValue({
      id: 4,
      name: "john",
      bueproduct: 7,
    });
    expect(calculateDiscount()).toBe(10);
  });

  it("should return 10 if user has less than 3 purchase", () => {
    service.getUserById = jest.fn().mockReturnValue({
      id: 4,
      name: "john",
      bueproduct: 2,
    });
    expect(calculateDiscount()).toBe(0);
  });
});
