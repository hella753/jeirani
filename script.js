"use strict";

let starti = document.querySelector(".start");
starti.addEventListener("click", function () {
  let sheniSvla = prompt("ჯე ი რა ნი\nჭა, ქაღალდი თუ მაკრატელი?");
  let kompSvla = Math.round(Math.random() * 2) + 1;
  if (kompSvla === 1) {
    kompSvla = "ჭა";
  } else if (kompSvla === 2) {
    kompSvla = "ქაღალდი";
  } else {
    kompSvla = "მაკრატელი";
  }
  if (sheniSvla === kompSvla) {
    alert(`${kompSvla}\nრა არის თავში მიზიხარ?`);
  }
  if (sheniSvla === "ჭა" && kompSvla === "მაკრატელი") {
    alert(`${kompSvla}\nმოიგე! ჩავვარდი`);
  }
  if (sheniSvla === "მაკრატელი" && kompSvla === "ქაღალდი") {
    alert(`${kompSvla}\nმოიგე! გადამჭერი`);
  }
  if (sheniSvla === "ქაღალდი" && kompSvla === "ჭა") {
    alert(`${kompSvla}\nმოიგე! დამაფარე`);
  }
  if (kompSvla === "ჭა" && sheniSvla === "მაკრატელი") {
    alert(`${kompSvla}\nწააგე! ჩავარდი`);
  }
  if (kompSvla === "მაკრატელი" && sheniSvla === "ქაღალდი") {
    alert(`${kompSvla}\nწააგე! გადაგჭერი`);
  }
  if (kompSvla === "ქაღალდი" && sheniSvla === "ჭა") {
    alert(`${kompSvla}\nწააგე! დაგაფარე`);
  }
});
