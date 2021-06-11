const user ={
    fName: 'John',
    lName: 'Smith',
    age: 29,
    getInfo : function() {
        return`${this.fName}     ${this.lName}      ${this.age}`
    }
}

export default user