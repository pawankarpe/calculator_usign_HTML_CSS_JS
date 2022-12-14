const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == 'clear') {
      display.innerHTML = '';
    }
    else if (item.id == 'backspace') {
      let string = display.innerHTML.toString();
      display.innerHTML = string.substring(0, string.length - 1);
    }
    else if (display.innerHTML != '' && item.id == 'equal') {
      display.innerHTML = eval(display.innerText);
    }
    else if (display.innerText != '' && item.id == 'equal') {
      display.innerText = 'Empty!';
      setTimeout(() => (display.innerText = ''), 2000);
    }
    else {
      display.innerText += item.id;
    }
  }
})
