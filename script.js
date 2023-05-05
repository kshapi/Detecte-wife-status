const onlineOffline = document.querySelector('h2');
const onOff = document.querySelector('p span');
const wifi = document.querySelector('.fa-wifi');

//When page laod 
window.onload = () => {
  if (this.navigator.onLine == true) {
    onlineOffline.innerText = 'Online';
    onOff.innerText = 'On';
    wifi.style.color = '#fff';
  }else {
    onlineOffline.innerText = 'Offline';
    onOff.innerText = 'Off';
    wifi.style.color = '#9C9CA2';
  };
};

//when user online
window.ononline = () => {
  onlineOffline.innerText = 'Online';
    
  onOff.innerText = 'On';
  wifi.style.color = '#fff';
};

//When user offline
window.onoffline = () => {
  onlineOffline.innerText = 'Offline';
  
  onOff.innerText = 'Off';
  wifi.style.color = '#9C9CA2';
};