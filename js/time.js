function update_time() {
  const now = new Date();
  document.getElementById("status").textContent= now.toLocaleTimeString();
}

setInterval(update_time,10000);
update_time();
