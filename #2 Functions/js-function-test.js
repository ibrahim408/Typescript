const { getName } = require("./function");

console.log(
  getName({
    firstName: "ibrahim",
    lastName: "ibrahim",
  })
);

// cant find function.js, must compile it
//  npx tsc function.ts
