function userProress(time) {
  let start = 0;
  let progressElement = document.getElementById('progress__bar'); //Елемент нашего прогресс бара
  let slaider = document.getElementById('slaider');
  slaider.style.display = 'none';
  let intervalId = setInterval(function () {
    if (start > 100) {
      clearInterval(intervalId);
      progressElement.style.display = 'none';
      slaider.style.display = 'block';
    } else {
      progressElement.value = start;
    }
    start++;
  }, time);
}

userProress(30);