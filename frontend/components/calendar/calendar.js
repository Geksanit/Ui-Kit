// calendar
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const weekDay = function weekDay() {
  let n = this.getDay();
  n = n ? n - 1 : 6;
  return n;
};

const date = new Date();

const calendarChange = function calendarChange(element, year, month) {
  const calendar = new Date(year, month);
  calendar.weekDay = weekDay;
  month = calendar.getMonth();
  year = calendar.getFullYear();
  // выбранная дата предыдущего месяца, если есть
  const List = element.getElementsByClassName('calendar__today');
  let today = date.getDate();
  if (List.length !== 0) {
    today = Number(element.getElementsByClassName('calendar__today')[0].innerHTML);
  }
  // если нет даты в месяце
  const testDate = new Date(year, month, today);
  if (testDate.getMonth() !== month) today = 28;
  element.children[0].innerHTML = today;
  element.children[1].childNodes[0].data = monthNames[month];
  element.children[2].innerHTML = year;
  const table = document.createElement('tbody');
  table.setAttribute('data-month', month);
  table.setAttribute('data-year', calendar.getFullYear());
  calendar.setDate(1 - calendar.weekDay());// последний понедельник предыдущего месяца
  for (let j = 0; j < 6; j += 1) { // заполнение таблицы
    const tr = document.createElement('tr');
    for (let i = 0; i < 7; i += 1) { // неделя
      const td = document.createElement('td');
      td.innerHTML = calendar.getDate();
      if (calendar.getMonth() === month) td.classList.add('calendar__days-month');
      if (calendar.getDate() === today && calendar.getMonth() === month) {
        td.classList.add('calendar__today');
      }
      calendar.setDate(calendar.getDate() + 1);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  element.children[4].replaceChild(table, element.children[4].children[0]);
};

const setDate = function setDate({ target }) {
  if (target.tagName !== 'TD') return;
  const oldElement = target.parentElement.parentElement.getElementsByClassName('calendar__today')[0];
  oldElement.classList.remove('calendar__today');
  target.classList.add('calendar__today');
  const today = target.innerHTML;
  target.parentElement.parentElement.parentElement.parentElement.children[0].innerHTML = today;
};

const nextMonth = function nextMonth(event) {
  const element = event.target.parentElement.parentElement;
  const year = Number(element.children[4].children[0].getAttribute('data-year'));
  const month = Number(element.children[4].children[0].getAttribute('data-month'));
  calendarChange(element, year, month - 1);
};

const previousMonth = function previousMonth(event) {
  const element = event.target.parentElement.parentElement;
  const year = Number(element.children[4].children[0].getAttribute('data-year'));
  const month = Number(element.children[4].children[0].getAttribute('data-month'));
  calendarChange(element, year, month + 1);
};

const setToday = function setToday(event) {
  const element = event.target.parentElement;
  const oldElement = element.getElementsByClassName('calendar__today')[0];
  oldElement.classList.remove('calendar__today');
  calendarChange(element, date.getFullYear(), date.getMonth());
};

(function calendarInit() {
  const elements = document.querySelectorAll('.calendar');
  elements.forEach((element) => {
    element.onclick = setDate;
    calendarChange(element, date.getFullYear(), date.getMonth());// календарь текущего месяца
  });
}());

(function calendarInit() {
  const elements = document.querySelectorAll('.calendar__left');
  elements.forEach((element) => {
    element.onclick = nextMonth;
  });
}());

(function calendarInit() {
  const elements = document.querySelectorAll('.calendar__right');
  elements.forEach((element) => {
    element.onclick = previousMonth;
  });
}());

(function calendarInit() {
  const elements = document.querySelectorAll('.calendar__data');
  elements.forEach((element) => {
    element.onclick = setToday;
  });
}());
