// Primitive types
var user = "Jack";
var isloggedIn = true;
var myNumber = 10;
var myRegex = /foo/;
var arr = user.split("");
var arrDos = ["J", "a", "c", "k"];
var myPerson = {
    first: "Ibrahim",
    last: "Ibrahim"
};
// Map
var ids = {
    10: "a",
    20: "b"
};
ids[30] = "c";
// iterations, let typescript infer as much as possible
for (var i = 0; i < 10; i++) {
    console.log(i);
}
[1, 2, 3].forEach(function (v) { return console.log(v); });
var out = [1, 2, 3].map(function (v) { return v * 10; });
