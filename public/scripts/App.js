var msg = document.getElementById('msg'),
audio = document.getElementById("music"),
funStat = false,
befStat = false,
message = document.getElementById('message'),
newYear = new Date(`Dec 31, ${new Date().getFullYear()} 16:19:00`).getTime();
audio = document.getElementById("music");
audio.play()
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
        msg.innerHTML = 'New Year Is On Its Way'
    }
    Check(distance)
}, 1000);

console.log(audio.duration)
function Check(distance){
if(0>=distance){
if(!funStat){
            funStat = true
        audio.src = './public/assets/The Last Resort.mp3'
        audio.load()
        audio.play()
    
   }   }
else {
    if(!befStat){
        befStat = true
    audio.src = './public/assets/Cutting on One.mp3'
    audio.load()
    audio.play()

    }
}
}