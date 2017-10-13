//calendar
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var weekDay = function () {
    var n = this.getDay();
    n = n ? n-1 : 6;
    return n
};
var date = new Date();
var today = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

var calendarChange = function(element,year,month){
    var calendar = new Date(year, month);
    calendar.weekDay = weekDay;
    //console.log(calendar.getFullYear(), calendar.getMonth(),calendar.getDate());
    month = calendar.getMonth();
    year = calendar.getFullYear();

    element.children[0].innerHTML = today;
    element.children[1].childNodes[0].data = monthNames[month];
    element.children[2].innerHTML = year;

    var table = document.createElement('tbody');
    table.setAttribute('data-month', month);
    table.setAttribute('data-year', calendar.getFullYear());

    calendar.setDate(1-calendar.weekDay());//последний понедельник предыдущего месяца

    for(var j=0; j<6; j++){//заполнение таблицы
        var tr = document.createElement('tr');
        for(var i=0; i<7; i++){//неделя

            var  td = document.createElement('td');
            td.innerHTML = calendar.getDate();
            if(calendar.getMonth() == month){
                td.className = "calendar__days-month";};
            if(calendar.getDate() == today &&
                calendar.getMonth() == date.getMonth() &&
                calendar.getFullYear() == date.getFullYear()){
                td.className = "calendar__today";};
            calendar.setDate(calendar.getDate() + 1);
            tr.appendChild(td);
        };
        table.appendChild(tr);
      };
    element.children[4].replaceChild(table, element.children[4].children[0]);
};

var calendarInit = function (){
     var elements = document.querySelectorAll('.calendar');
     for(var i=0; i<elements.length; i++){
         calendarChange(elements[i],year,month);//календарь текущего месяца
     }
 }();

document.left = function(event){
    //console.log('clocked left');
    var element = event.target.parentElement.parentElement;
    var year = Number(element.children[4].children[0].getAttribute('data-year'));
    var month = Number(element.children[4].children[0].getAttribute('data-month'));
    calendarChange(element,year,month-1);
};
document.right = function (event) {
    //console.log('clicked right');
    var element = event.target.parentElement.parentElement;
    var year = Number(element.children[4].children[0].getAttribute('data-year'));
    var month = Number(element.children[4].children[0].getAttribute('data-month'));
    calendarChange(element,year,month+1);
};
document.today = function(event){
    var element = event.target.parentElement;
    calendarChange(element,year,month);
};