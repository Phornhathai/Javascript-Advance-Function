let student = {
    first : "Alice",
    last : "thomas",
    age : 20,
    fullName (){
        return `${this.first} ${this.last}`
    }
}

console.log(student.first);
console.log(student.fullName());
student.first = "Aum"
console.log(student.fullName());