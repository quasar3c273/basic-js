const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = members.filter((el) => typeof el === "string");
  return (
    result
      .map((el) => el.trim()[0].toUpperCase())
      .sort()
      .join("") || false
  );
};
