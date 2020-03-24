'use stict'

var studantArray = [];
var headArray = ['name', 'age', 'major', 'mark'];

function Student(name, age, major, mark) {
    this.name = name;
    this.age = age;
    this.major = major;
    this.mark = mark;

    studantArray.push(this)


}
Student.prototype.renderBudy = function () {

    var bodyTAble = document.createElement('tbody')
    tableEl.appendChild(bodyTAble)

    var td2 = document.createElement('td')
    td2.setAttribute("class", 'td1')

    bodyTAble.appendChild(td2)
    td2.textContent = this.name


    var td2 = document.createElement('td')
    td2.setAttribute("class", 'td1')

    bodyTAble.appendChild(td2)
    td2.textContent = this.age
    console.log('mmmmmmm' + this.age)
    var td2 = document.createElement('td')
    td2.setAttribute("class", 'td1')

    bodyTAble.appendChild(td2)
    td2.textContent = this.major
    var td2 = document.createElement('td')
    td2.setAttribute("class", 'td1')

    bodyTAble.appendChild(td2)
    td2.textContent = this.mark



}


var tableContainar = document.getElementById('tble')
var tableEl = document.createElement('table')
tableEl.setAttribute("id", 'tbl')

tableContainar.appendChild(tableEl)

var containar = document.getElementById('form')
containar.addEventListener('submit', function (event) {

    event.preventDefault()
    var name = event.target.name.value;
    console.log(name)
    var age = event.target.age.value;
    console.log(age)
    var major = event.target.major.value;
    console.log(major)
    var mark = event.target.mark.value;
    console.log(mark)
    var majd = new Student(name, age, major, mark)
    majd.renderBudy()

    var strinStudentArray = JSON.stringify(studantArray)
    localStorage.setItem('storageArry', strinStudentArray)

});

function renderFromStorage() {
    if (localStorage.getItem('storageArry')) {
        var storageArry = localStorage.getItem('storageArry')
        studantArray = JSON.parse(storageArry)
        var bodyTAble = document.createElement('tbody')
        tableEl.appendChild(bodyTAble)

        for (i = 0; i < studantArray.length; i++) {

            var newRow = document.createElement('tr')
            bodyTAble.appendChild(newRow)
            var td2 = document.createElement('td')
            td2.setAttribute("class", 'td1')

            newRow.appendChild(td2)
            td2.textContent = studantArray[i].name


            var td2 = document.createElement('td')
            td2.setAttribute("class", 'td1')

            newRow.appendChild(td2)
            td2.textContent = studantArray[i].age
            console.log('mmmmmmm' + this.age)
            var td2 = document.createElement('td')
            td2.setAttribute("class", 'td1')

            newRow.appendChild(td2)
            td2.textContent = studantArray[i].major
            var td2 = document.createElement('td')
            td2.setAttribute("class", 'td1')

            newRow.appendChild(td2)
            td2.textContent = studantArray[i].mark


        }

    }
}

function renderHead() {
    var theader = document.createElement('thead')
    tableEl.appendChild(theader)

    for (i = 0; i < headArray.length; i++) {
        var th2 = document.createElement('th')
        th2.setAttribute("class", 'th1')

        theader.appendChild(th2)
        th2.textContent = headArray[i]

    }
}
renderHead()

function getItem() {
    var storageArry = localStorage.getItem('storageArry')
    studantArray = JSON.parse(storageArry)

}
renderFromStorage()
