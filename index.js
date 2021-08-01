var amount, number, tip;

$(".pre").on("click", function () {
  amount = $("#amount-input").val();
  number = $("#number-input").val();
  if (number === 0 || number === null) {
  } else {
    $(".pre").removeClass("tip-option-selected");
    $(this).addClass("tip-option-selected");
    tip = this.textContent;
    console.log(amount + " " + number + " " + tip);

    tip = tip.substring(0, tip.length - 1);

    console.log(tip);

    $(".tip-per-person").text(
      "$" + (((tip / 100) * amount) / number).toFixed(2)
    );
    $(".total-per-person").text(
      "$" + (amount / number + ((tip / 100) * amount) / number).toFixed(2)
    );
  }
});
