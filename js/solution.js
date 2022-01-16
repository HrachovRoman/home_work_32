'use strict';

//Тask 1
let ulAttr = document.querySelector('ul');

let arrValueAttrs = [];
let arrNameAttrs = [];

for (let attr of ulAttr.attributes) { 
    arrValueAttrs.push(attr.value);
    arrNameAttrs.push(attr.name);
}
  console.log(arrValueAttrs);// массив значений аттрибутов
  console.log(arrNameAttrs);// массив имен аттрибутов

let elementLi = document.getElementsByTagName('li');
elementLi[elementLi.length - 1].innerHTML = 'Меня зовут Roman';
//С помощью JS изменит текст в последнем теге li

let f = document.querySelector('li');
f.setAttribute("data-my-name", "Roman");
// Добавит первому элементу li аттрибут ‘data-my-name‘ со значением "Roman"

ulAttr.removeAttribute('data-dog-tail');
//Удалит у тега ul аттрибут ‘data-dog-tail‘

//Тask 2
// let array1 = [1, 2, 3]; для проверки
let array2 = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
    let ulTag = "<ul>";
    const count = array.length;
    for (let i = 0; i < count; ++i) {
        let row = array[i];
        if (Array.isArray(row)) {
          ulTag += "<li><ul>";
            for (let j = 0; j < row.length; ++j) {
              ulTag += `<li>${row[j]}</li>`;
            }
            ulTag += "</ul></li>";
        } else {
        ulTag += `<li>${row}</li>`;
        }
    }
    ulTag += "</ul>";
    document.body.innerHTML = ulTag;
}

// generateList(array1); для проверки
generateList(array2);

//Тask 3
// Написать функцию, которая выводит таблицу 10 × 10, заполненную числами от 1 до 100

(function () {
  let table = document.createElement('table');
  document.body.append(table);

  let num = 0;

  for (let i = 1; i <= 10; i++) {
      let tr = document.createElement('tr');
      table.append(tr);

      for (let k = 1; k <= 10; k++) {
          let td = document.createElement('td');
          td.innerHTML = ++num;
          tr.append(td);
      }
      
  }
})();
