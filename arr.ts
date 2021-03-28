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


enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

const person = {
    name: "Yolo",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
}

let favActivites: string[];
favActivites = ["Sports"];

console.log(person.name);


for (const hobby of person.hobbies) {
    console.log(hobby);
}

if (person.role == Role.ADMIN) {
    console.log("is admin");
}