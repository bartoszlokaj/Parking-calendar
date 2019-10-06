// import moment from '../../node_modules/moment/moment';
var moment = require("moment");

export const datePicker = () => {
  const inputs = document.querySelectorAll(".input--introduction");
  const fieldArrival = document.getElementById("datepicker");
  const fieldDeparture = document.getElementById("datepicker2");

  let dateArrival = null;

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
      minDate: new Date(),
      keyboardInput: false,
      onSelect: function(date) {
        dateArrival = moment(date).format("YYYY,MM,DD");
        console.log(dateArrival)
        date = moment(date).format("DD / MM / YYYY");
        fieldArrival.value = date;
        
        pickerDeparture._o.minDate = new Date(dateArrival)
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
      firstDay: 1,
      minDate: new Date(),
      onSelect: (date) => {
          date = moment(date).format("DD / MM / YYYY");
          fieldDeparture.value = date;
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
