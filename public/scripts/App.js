var msg = document.getElementById('msg'),
message = document.getElementById('message'),
newYear = new Date(`Dec 31, ${new Date().getFullYear()} 14:23:00`).getTime();
audio = document.getElementById("music");
setInterval(() => {
now = new Date().getTime()   
const distance = newYear - now;  
    // Time calculation
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
seconds = Math.floor((distance % (1000 * 60)) / 1000)
    // Display result
    message.innerHTML = `
    <div>${days}<span>Days</span></div> 
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;
    if(now>newYear){
        document.title = 'Happy New Year !!'
        msg.innerHTML = 'Happy New Year '
        message.innerHTML = ""
    }
    else{
        message.innerHTML = 'New Year Is On Its Way'
    }
}, 1000);
