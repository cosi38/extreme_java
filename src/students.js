const fs = require("fs");


function loadStudents() {
    return fs.readFileSync("./src/data.txt", "utf-8").split("\n").filter(Boolean);
}


function showStudents() {
    const students = loadStudents();
    console.log("Students:");
    students.forEach(s => console.log("-", s));
}

function removeStudent(name) {
    const students = loadStudents().filter(s => s.trim() !== name);
    fs.writeFileSync("./src/data.txt", students.join("\n") + "\n");
}

module.exports = { showStudents, removeStudent };