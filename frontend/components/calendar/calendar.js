
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

class Calendar {
  constructor(element) {
    this.$element = $(element);
    this.$calendarDay = this.$element.find('.js-calendar__day');
    this.$month = this.$element.find('.js-calendar__month');
    this.$year = this.$element.find('.js-calendar__year');
    this.$daysWeek = this.$element.find('.js-calendar__days-week');
    this.$daysTable = this.$element.find('.js-calendar__days-table');

    this.date = new Date();
    this.calendarChange();
    this.initHandlers();
  }
  getWeekDay(date) {
    let n = date.getDay();
    n = n ? n - 1 : 6;
    return n;
  }
  isThisMonth(date) {
    const result = (date.getMonth() === this.date.getMonth());
    return result;
  }
  isThisDay(date) {
    return ((date.getDate() === this.date.getDate()) && this.isThisMonth(date));
  }
  getNewTbody() {
    const $tbody = $(document.createElement('tbody'));
    let date = new Date(this.date.getFullYear(), this.date.getMonth());
    // начинаем с понедельника, идущего после последнего воскресенья предыдущего месяца
    date.setDate(1 - this.getWeekDay(date));

    for (let j = 0; j < 6; j += 1) { // 6 недель
      let $tr = $(document.createElement('tr'));
      let flag = false;
      for (let i = 0; i < 7; i += 1) { // 7 дней
        let $td = $(document.createElement('td'));
        $td.text(date.getDate()).addClass('calendar__cell');
        if (this.isThisMonth(date)) {
          $td.addClass('calendar__days-month');
          flag = true;
        }
        if (this.isThisDay(date)) $td.addClass('calendar__today');
        date.setDate(date.getDate() + 1);
        $tr.append($td);
      }
      if (flag) $tbody.append($tr);
    }
    return $tbody;
  }
  calendarChange() {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    const day = this.date.getDate();
    const $newTbody = this.getNewTbody();

    this.$calendarDay.text(day);
    this.$month.prop('childNodes')[0].nodeValue = MONTH_NAMES[month];
    this.$year.text(year);
    $(this.$daysTable[0].children[0]).replaceWith($newTbody);
  }
  handleNextMonth() {
    this.date.setMonth(this.date.getMonth() + 1, 1);
    this.calendarChange();
  }
  handlePreviousMonth() {
    this.date.setMonth(this.date.getMonth() - 1, 1);
    this.calendarChange();
  }
  handleSetDate({ target }) {
    if (!$(target).hasClass('calendar__days-month')) return;
    this.$daysTable.find('calendar__today').removeClass('calendar__today');
    const today = $(target).addClass('calendar__today').text();
    this.date.setDate(Number(today));
    this.calendarChange();
  }
  handleSetToday() {
    this.date = new Date();
    this.calendarChange();
  }
  initHandlers() {
    this.$daysTable.on('click.calendar', 'td', this.handleSetDate.bind(this));
    this.$element.find('.js-calendar__button-left').on('click.calendar', this.handlePreviousMonth.bind(this));
    this.$element.find('.js-calendar__button-right').on('click.calendar', this.handleNextMonth.bind(this));
    this.$element.find('.js-calendar__button-today').on('click.calendar', this.handleSetToday.bind(this));
  }
}
let elements = [];
$('.js-calendar').each((index, element) => elements.push(new Calendar(element)));

