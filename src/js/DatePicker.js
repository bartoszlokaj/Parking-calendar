// import moment from '../../node_modules/moment/moment';
var moment = require("moment");

export const datePicker = () => {
  const inputs = document.querySelectorAll(".input--introduction");
  const fieldArrival = document.getElementById("datepicker");
  const fieldDeparture = document.getElementById("datepicker2");

  window.addEventListener("DOMContentLoaded", () => {
    const pickerArrival = new Pikaday({
      field: fieldArrival,
      i18n: {
        previousMonth: "Previous Month",
        nextMonth: "Next Month",
        months: [
          "Styczeń",
          "Luty",
          "Marzec",
          "Kwiecień",
          "Maj",
          "Czerwiec",
          "Lipiec",
          "Sierpień",
          "Wrzesień",
          "Październik",
          "Listopad",
          "Grudzień"
        ],
        weekdays: [
          "Niedziela",
          "Poniedziałek",
          "Wtorek",
          "Środa",
          "Czwartek",
          "Piątek",
          "Sobota"
        ],
        weekdaysShort: ["Niedz", "Pon", "Wt", "Śr", "Czw", "Piąt", "Sob"]
      },
      firstDay: 1,
      keyboardInput: false,
      onSelect: function(date) {
        console.log(date);
        date = moment(date).format("DD / MM / YYYY");
        fieldArrival.value = date;
        // console.log(field.value = date);
      }
    });

    const pickerDeparture = new Pikaday({
      field: fieldDeparture,
      i18n: {
        previousMonth: "Previous Month",
        nextMonth: "Next Month",
        months: [
          "Styczeń",
          "Luty",
          "Marzec",
          "Kwiecień",
          "Maj",
          "Czerwiec",
          "Lipiec",
          "Sierpień",
          "Wrzesień",
          "Październik",
          "Listopad",
          "Grudzień"
        ],
        weekdays: [
          "Niedziela",
          "Poniedziałek",
          "Wtorek",
          "Środa",
          "Czwartek",
          "Piątek",
          "Sobota"
        ],
        weekdaysShort: ["Niedz", "Pon", "Wt", "Śr", "Czw", "Piąt", "Sob"]
      },
      keyboardInput: false,
      onSelect: function(date) {
        console.log(date);
        date = moment(date).format("DD / MM / YYYY");
        console.log(date);
        fieldDeparture.value = date;

        // field.value = date;
      }
    });
  });

  // const picker = [];

  // inputs.forEach((input, i) => {
  //     input =
  //         picker[i] = new Pikaday({
  //             field: inputs[i],
  //             format: 'L',
  //             i18n: {
  //                 previousMonth : 'Previous Month',
  //                 nextMonth     : 'Next Month',
  //                 months        : ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  //                 weekdays      : ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
  //                 weekdaysShort : ['Niedz','Pon','Wt','Śr','Czw','Piąt','Sob']
  //             },onSelect: function(date) {
  //                 console.log(date);
  //                 date = moment(date).format('DD / MM / YYYY');
  //                 console.log(date);
  //                 inputs.forEach((el, index) => {
  //                     el.value = date;
  //                 })
  //                 // field.value = moment().format('MMMM Do YYYY, h:mm:ss a');
  //                 // console.log(this.getMoment().format('Do MMMM YYYY'));
  //             }
  //         });
  //     console.log(picker[i])

  //     })
};

datePicker();
