var amount,
  number,
  tip = 0,
  started = false,
  selected;

$(".pre").on("click", function () {
  getValues();

  if ($(this).hasClass("tip-option-selected")) {
    $(".pre").removeClass("tip-option-selected");
    $("#custom-tip").val("");
    tip = 0;
    if (checkNumber()) displayZero();
    else displayValue();
  } else {
    $(".pre").removeClass("tip-option-selected");
    $("#custom-tip").val("");

    $(this).addClass("tip-option-selected");
    if (checkNumber()) {
      tip = this.textContent;
      tip = tip.substring(0, tip.length - 1);
      displayZero();
    } else {
      tip = this.textContent;
      tip = tip.substring(0, tip.length - 1);
      displayValue();
    }
  }
});

$(".input-1").on("input", function () {
  if (!started) {
    getValues();
    if (number != 0) {
      warningOff();
      started = true;
      displayValue();
    } else if (number === "0") {
      started = true;
      warningOn();
    }
  } else {
    getValues2();

    if (checkNumber()) {
      warningOn();
    } else {
      warningOff();
      displayValue();
    }
  }
});

$("#custom-tip").on("input", function () {
  getValues();
  $(".pre").removeClass("tip-option-selected");
  if (checkNumber()) {
    displayZero();
  } else {
    tip = $("#custom-tip").val();
    displayValue();
  }
});

$(".reset").on("click", function () {
  $(".input-1").val("");
  $(".pre").removeClass("tip-option-selected");
  displayZero();
  warningOff();
  amount = 0;
  tip = 0;
  number = 0;
  started = false;
});

function checkNumber() {
  return number === undefined || number === "0" || number.length === 0;
}

function warningOn() {
  $(".number-input").addClass("number-input-zero");
  $(".number-input-zero").removeClass("number-input");
  $(".warning").css("visibility", "visible");
  $(".tip-per-person").text("$0.00");
  $(".total-per-person").text("$0.00");
}

function warningOff() {
  $(".number-input-zero").addClass("number-input");
  $(".number-input").removeClass("number-input-zero");
  $(".warning").css("visibility", "hidden");
}

function displayZero() {
  $(".tip-per-person").text("$0.00");
  $(".total-per-person").text("$0.00");
}

function displayValue() {
  $(".tip-per-person").text("$" + (((tip / 100) * amount) / number).toFixed(2));
  $(".total-per-person").text(
    "$" + (amount / number + ((tip / 100) * amount) / number).toFixed(2)
  );
}

function getValues() {
  amount = $(".amount-input").val();
  number = $(".number-input").val();
}

function getValues2() {
  amount = $(".amount-input").val();
  var number1 = $(".number-input-zero").val();
  var number2 = $(".number-input").val();
  if (number1 === undefined) number = number2;
  else number = number1;
}
