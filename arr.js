// const person: {
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number, string];
// } = {
//     name: "Yolo",
//     age: 300,
//     hobbies: ["sports", "cooking"],
//     role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Yolo",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
};
var favActivites;
favActivites = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role == Role.ADMIN) {
    console.log("is admin");
}
