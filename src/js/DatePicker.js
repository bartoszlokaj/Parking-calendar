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
        dateArrival = moment(date).add(1, 'd').format("YYYY,MM,DD");
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
};

datePicker();
