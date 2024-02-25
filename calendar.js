const calCells = document.getElementsByClassName("cal-cell");
const calGrid = document.getElementById("cal-grid");

import { DateTime } from "./utils/luxon.min.js";

let date = DateTime.now();

const setCalendarCells = () => {
  const daysPreviousMonth = date.endOf('month').minus({ months: 1 }).daysInMonth;
  const dayOfTheWeek = date.startOf('month').weekday;

  let cellIndex = 0;
  // Fill cells with days from previous month
  for (let i = daysPreviousMonth - dayOfTheWeek + 2; i <= daysPreviousMonth; i++) {
    const cell = calCells[cellIndex];
    cell.textContent = i;
    cell.classList.add("greyed");
    if (cell.classList.contains("actual")) {
      cell.classList.remove("actual");
    }
    cellIndex += 1;
  }
  // Fill cells with days from current month
  for (let i = 1; i <= date.daysInMonth; i++) {
    const cell = calCells[cellIndex];
    cell.textContent = i;
    if (date.day == i) {
      cell.classList.add("actual");
    } else if (cell.classList.contains("actual")) {
      cell.classList.remove("actual");
    }
    if (cell.classList.contains("greyed")) {
      cell.classList.remove("greyed");
    }
    cellIndex += 1;
  }

  // Fill cells with days from next month
  for (let i = 1; ; i++) {
    if (cellIndex >= calCells.length) {
      break;
    }
    const cell = calCells[cellIndex];
    cell.textContent = i;
    if (cell.classList.contains("actual")) {
      cell.classList.remove("actual");
    }
    cell.classList.add("greyed");
    cellIndex += 1;
  };
  setCurrentDayDiv();

};

const setCurrentDayDiv = () => {
  document.getElementById("current-day").textContent = date.toFormat('MMM d, yyyy');
};

const setDay = (day) => {
  date = date.set({ day: day });
  setCalendarCells();
};

const setMonth = (month) => {
  date = date.set({ month: month });
  setCalendarCells();
};

/**
 * Handling of events
 */
calGrid.addEventListener("click", (day) => {
  if (day.target
    && day.target.classList.contains("cal-cell")
    && !day.target.classList.contains("greyed")) {
    setDay(day.target.textContent);
  }
});

import { setMovieListDiv } from "./movielist.js";
document.getElementById("cal-prev-mon").addEventListener("click", () => {
  setMonth(date.month - 1);
  setMovieListDiv(date);
});
document.getElementById("cal-prev-day").addEventListener("click", () => {
  setDay(date.day - 1);
});
document.getElementById("cal-next-mon").addEventListener("click", () => {
  setMonth(date.month + 1);
  setMovieListDiv(date);
});
document.getElementById("cal-next-day").addEventListener("click", () => {
  setDay(date.day + 1);
});
document.getElementById("datepicker").addEventListener("change", (event) => {
  const selectedDate = event.target.value;
  console.log(selectedDate);
  date = DateTime.fromISO(selectedDate);
  setCalendarCells();
})

setCalendarCells();
setMovieListDiv(date);

export { date };