function Casa (name, fnc) {
    this.name = name
    this.fnc = fnc
}

const arr = []

const prueba = (num) => num*2

for(let i=0; i<=2; i++) {
    arr.push(new Casa('juan'+i, () => prueba(i)))
}

console.log(...arr);
// Tema de toggleImportance={() => toggleImportanceOf(note.id)} />

console.log(arr[1].fnc);