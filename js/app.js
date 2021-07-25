'use strict'

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let form = document.getElementById('form');
let table = document.getElementById('table');



function Book(name, price) {
    this.name = name;
    this.price = price;
    Book.arry.push(this);
    saveTols();
}


let page;
Book.prototype.NumPage = function () {
    this.page = Math.floor(math.Mathrandom(1, 500));
}


Book.arry=[];
form.addEventListener('submit', handelSubmit)

function handelSubmit(event) {
    event.preventdefalut();

    let newName = event.target.name.value;
    let newPrice = event.target.price.value;

    let newobject = (newName, newPrice);
    newobject.NumPage();
    newobject.render();


}


let headerRow = document.createElement('tr');
table.appendChild(headerRow);

let th1 = document.createElement('th');
headerRow.appendChild(th1);
th1.textContent = 'Book Name';

let th2 = document.createElement('th');
headerRow.appendChild(th2);
th2.textContent = 'Book Page';

let th3 = document.createElement('th');
headerRow.appendChild(th3);
th3.textContent = 'Book Price';



Book.prototype.render = function () {
    let datRow = document.createElement('tr');
    table.appendChild(datRow);
    

    // let td1 = document.createElement('td');
    // datRow.appendChild(td1);
    // td1.textContent = this.name;


    // let td2 = document.createElement('td');
    // datRow.appendChild(td2);
    // td2.textContent = this.age;

    // let td3 = document.createElement('td');
    // datRow.appendChild(td3);
    // td3.textContent = this.price;


    for (let i = 0; i < Book.arry.lenght; i++) {


        let td1 = document.createElement('td');
        datRow.appendChild(td1);
        td1.textContent = Book.arry[i].name;
    
    
        let td2 = document.createElement('td');
        datRow.appendChild(td2);
        td2.textContent = Book.arry[i].age;
    
        let td3 = document.createElement('td');
        datRow.appendChild(td3);
        td3.textContent = Book.arry[i].price;
        
    }

}







function saveTols() {
    let newArry = JSON.stringify(Book.arry);
    localStorage.setItem('arry', newArry)

}

function getTols() {
    let data = localStorage.getItem('arry');
    let parsOrder = JSON.parse(data);
    if (parsOrder) {
        Book.arry = parsOrder
        render();

    }
}

getTols();


for (let i = 0; i < Book.arry.lenght; i++) {
    Book.arry[i].render();
    
}






