function Display(text) {
  document.getElementById("display").value += text;
}

function Remove() {
  document.getElementById("display").value = "";
}

function RemoveLastSign() {
  const del = document.getElementById("display");
  const currentValue = display.value;
  if (currentValue.length > 0) {
    const newValue = currentValue.slice(0, -1);
    del.value = newValue;
  }
}

function Result() {
  try {
    const value = document.getElementById("display").value;
    const calculatedResult = eval(value);
    document.getElementById("display").value = calculatedResult;
  } catch (error) {
    document.getElementById("display").value = "Error ;(";
  }
}
