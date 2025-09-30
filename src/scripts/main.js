'use strict';

// write code here
const parseSalary = (salaryStr) => Number(salaryStr.replace(/[^0-9.-]+/g, ''));

// Сортує список співробітників за спаданням зарплати
const sortList = (list) => {
  const items = Array.from(list);
  const sorted = items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  const ul = list[0].parentElement;

  sorted.forEach((item) => ul.appendChild(item));

  return sorted;
};

// Повертає масив співробітників у вигляді об’єктів
const getEmployees = (list) =>
  Array.from(list).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));

// Виконання
const sortedItems = sortList(document.querySelectorAll('li'));
const employees = getEmployees(sortedItems);

const pre = document.createElement('pre');

pre.textContent = JSON.stringify(employees, null, 2);
document.body.appendChild(pre);
