document.addEventListener("DOMContentLoaded", function () {
  var inputBox = document.getElementById("inputBox");
  var historyParagraph = document.getElementById("para");
  var history = "";

  function updateInput(value) {
    inputBox.value=value;
  }

  function updateHistory(value) {
    history =history+ value + "<br>";
    historyParagraph.innerHTML = history;
  }

  function handleButtonClick(value) {
    if (value === "=") {
      try {
        var result = eval(inputBox.value);
        updateHistory(inputBox.value + " = " + result);
        updateInput(result);
      } catch (error) {
        updateInput("Error");
      }
    } else if (value === "AC") {
      updateInput("0");
      history = "";
      updateHistory("");
    } else if (value === "DEL") {
      var currentInput = inputBox.value;
      updateInput(currentInput.slice(0, -1));
    }else if (value === "sqrt") {
      var currentInput = inputBox.value;
      updateInput(inputBox.value=Math.sqrt(currentInput));
      updateHistory(currentInput+"sqrt"+"="+inputBox.value)
    } else {
      updateInput(inputBox.value === "0" ? value : inputBox.value + value);
    }
  }

  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      handleButtonClick(this.textContent);
    });
  });
});