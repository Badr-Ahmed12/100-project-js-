   function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
  }

  function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }

  function clearDisplay() {
    document.getElementById("display").value = '';
  }

  function calculate() {
    const display = document.getElementById("display");
    try {
      display.value = math.evaluate(display.value); 
    } catch (error) {
      display.value = 'خطأ';
    }
  }