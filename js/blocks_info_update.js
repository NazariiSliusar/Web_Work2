function getRandom(min, max, decimals = 2) {
  return +(Math.random() * (max - min) + min).toFixed(decimals);
}

function updateProgressBar(elementId, value, min, max, normalMin, normalMax) {
  const progressBar = document.getElementById(elementId);
  const percentage = ((value - min) / (max - min)) * 100;
  progressBar.style.width = percentage + "%";

  progressBar.classList.remove("bg-success", "bg-warning");

  if (value >= normalMin && value <= normalMax) {
    progressBar.classList.add("bg-success");
  } else {
    progressBar.classList.add("bg-warning");
  }
}

function updateAllBlocks() {
  const voltage = getRandom(9, 11, 2);
  document.getElementById('id-current').textContent = voltage;
  updateProgressBar('voltage-progress', voltage, 9, 11, 9.5, 10.5);

  const currents = ['a','b','c'].map(() => getRandom(10, 300, 1));
  document.getElementById('id-current-a').textContent = currents[0];
  document.getElementById('id-current-b').textContent = currents[1];
  document.getElementById('id-current-c').textContent = currents[2];
  updateProgressBar('current-a-progress', currents[0], 10, 300, 50, 250);
  updateProgressBar('current-b-progress', currents[1], 10, 300, 50, 250);
  updateProgressBar('current-c-progress', currents[2], 10, 300, 50, 250);

  const activePower = getRandom(0, 3, 2);
  document.getElementById('id-active-power').textContent = activePower;
  updateProgressBar('active-power-progress', activePower, 0, 3, 0.5, 2.5);

  const reactivePower = getRandom(-1, 1, 2);
  document.getElementById('id-reactive-power').textContent = reactivePower;
  updateProgressBar('reactive-power-progress', reactivePower, -1, 1, -0.02, 0.02);

  for (let i = 1; i <= 6; i++) {
    document.getElementById(`breaker-${i}-status`).textContent =
      Math.random() < 0.5 ? 'Відкрито' : 'Закрито';
  }

  document.getElementById('meter-1').textContent = Math.floor(getRandom(0, 5000));
  document.getElementById('meter-2').textContent = Math.floor(getRandom(0, 5000));
  document.getElementById('meter-3').textContent = Math.floor(getRandom(0, 5000));
  document.getElementById('meter-daily').textContent = Math.floor(getRandom(0, 200));

  const temps = [getRandom(0, 90, 1), getRandom(0, 90, 1), getRandom(0, 90, 1)];
  document.getElementById('id-temp-1').textContent = temps[0];
  document.getElementById('id-temp-2').textContent = temps[1];
  document.getElementById('id-temp-3').textContent = temps[2];
  updateProgressBar('temp-1-progress', temps[0], 0, 90, 0, 70);
  updateProgressBar('temp-2-progress', temps[1], 0, 90, 0, 70);
  updateProgressBar('temp-3-progress', temps[2], 0, 90, 0, 70);

  document.getElementById('status').textContent =
    new Date().toLocaleTimeString();
}

setInterval(updateAllBlocks, 5000);
updateAllBlocks();
