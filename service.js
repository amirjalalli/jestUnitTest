function getUserById(id) {
  console.log("reading data from DB...");
  const users = [
    { id: 1, name: "amir", bueproduct: 5 },
    { id: 2, name: "mmd", bueproduct: 4 },
    { id: 3, name: "arman", bueproduct: 3 },
  ];
}

function sendEmail(name, massage) {
  console.log("email send!");
}

module.exports = {
  getUserById,
  sendEmail,
};
