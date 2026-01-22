const fs = require("fs");


function loadStudents() {
    return fs.readFileSync("./src/data.txt", "utf-8").split("\n").filter(Boolean);
}

function showStudents() {
    const students = loadStudents();
    console.log("Students:");
    students.forEach(s => console.log("-", s));
}

function addStudent(name) {
    fs.appendFileSync("./src/data.txt",  "\n" + name);
}

module.exports = { showStudents, addStudent };