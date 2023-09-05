function Display(text) {
  document.getElementById("display").value += text;
}

function Remove(text) {
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
