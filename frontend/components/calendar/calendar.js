//calendar
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var weekDay = function () {
    var n = this.getDay();
    n = n ? n-1 : 6;
    return n
};

var calendarChange = function(element){
    var date = new Date();
    var today = date.getDate();
    element.children[0].innerHTML = today;
    var month = date.getMonth();
    element.children[1].childNodes[0].data = monthNames[month];
    var calendar = new Date();
    calendar.weekDay = weekDay;

    calendar.setDate(1);
    calendar.setDate(1-calendar.weekDay());//последний понедельник предыдущего месяца
    var table = element.children[3].children[0];

    while(calendar.getMonth() <= month){//заполнение таблицы
        var tr = document.createElement('tr');
        for(var i=0; i<7; i++){//неделя

            var  td = document.createElement('td');
            td.innerHTML = calendar.getDate();
            if(calendar.getMonth() == month){
                td.className = "calendar__days-month";};
            if(calendar.getMonth() == month && calendar.getDate() == today){
                td.className = "calendar__today";};
            calendar.setDate(calendar.getDate() + 1);
            tr.appendChild(td);
        };
        table.appendChild(tr);
      };
};

var calendarInit = function (){
     var elements = document.querySelectorAll('.calendar');
     for(var i=0; i<elements.length; i++){
         calendarChange(elements[i]);
     }
 }();
