function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Move hands so 0deg is 12 o'clock, with no offset
  const secondsDegree = (seconds / 60) * 360;
  const minutesDegree = ((minutes + seconds / 60) / 60) * 360;
  const hoursDegree = ((hours % 12 + minutes / 60) / 12) * 360;

  document.getElementById('second-hand').style.transform = `translate(-50%, -100%) rotate(${secondsDegree}deg)`;
  document.getElementById('minute-hand').style.transform = `translate(-50%, -100%) rotate(${minutesDegree}deg)`;
  document.getElementById('hour-hand').style.transform = `translate(-50%, -100%) rotate(${hoursDegree}deg)`;
}

setInterval(setClock, 1000);
setClock();
