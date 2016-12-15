/*let obj = { name: "Andrew" }

let stringObj = JSON.stringify(obj)
console.log(typeof stringObj)
console.log(stringObj)

let personString = '{"name":"andrew","age":25}'
let person       = JSON.parse(personString)
console.log(typeof person)
console.log(person)*/

const fs = require('fs')

let originalNote = {
    title: "Some title",
    body : "Some Body"
}

let originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json',originalNoteString)

let noteString = fs.readFileSync('notes.json')
let note       = JSON.parse(noteString)

console.log(note.title)