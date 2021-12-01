function timeBegan() {
    let today = new Date();


    let h = today.getHours() < 10 ? '0'+today.getHours() : today.getHours();
    let m = today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes();
    let s = today.getSeconds() < 10 ? '0'+today.getSeconds() : today.getSeconds();
  
   

    document.querySelector('.clock').innerHTML = h + ":" + m + ":" + s;
   
  }
   setInterval(timeBegan, 500);