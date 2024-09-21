let $ = document;

ChangeElem = $.querySelector("#change");
ResetElem = $.querySelector("#reset");
ConvertElem = $.querySelector("#convert");

let TitelElem = $.querySelector("#titel");
let InputUser = $.querySelector("#input");
let AlertUser = $.querySelector("#alert");
let H1Elem = $.querySelector("#h1");

let IsTrue = true;

InputUser.value = ''

ChangeElem.addEventListener("click", function () {
  if (IsTrue) {
    H1Elem.innerHTML = "Convert °F to °C";
    TitelElem.innerHTML = "Convert °F to °C";
    InputUser.setAttribute("placeholder", "°F");
    IsTrue = false;
  } else {
    H1Elem.innerHTML = "Convert °C to °F";
    TitelElem.innerHTML = "Convert °C to °F";
    InputUser.setAttribute("placeholder", "°C");
    IsTrue = true;
  }
});

ResetElem.addEventListener("click", function () {
  InputUser.value = "";
  AlertUser.style.opacity = '0%'
});

ConvertElem.addEventListener("click", function () {
  var INPUT = InputUser.value;
  if (isNaN(INPUT)) {
    AlertUser.innerHTML = "Write correct value!";
    AlertUser.style.opacity = '100%'
    AlertUser.style.color = "#d55252";
  } else if (INPUT === "") {
    AlertUser.innerHTML = "Write correct value!";
    AlertUser.style.opacity = '100%'
    AlertUser.style.color = "#d55252";
  } else {
    if (IsTrue) {
      let Result = INPUT * 1.8 + 32;
      AlertUser.innerHTML = INPUT + "°C  to  " + Result.toFixed(1) + "°F";
      AlertUser.style.opacity = '100%'
      AlertUser.style.color = "#60ca60";
    } else {
      let Result = (INPUT - 32) / 1.8;
      AlertUser.innerHTML = INPUT + "°F  to  " +Result.toFixed(1) + "°C";
      AlertUser.style.opacity = '100%'
      AlertUser.style.color = "#60ca60";
    }
  }
});
