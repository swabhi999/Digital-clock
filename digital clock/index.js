const hrs = document.querySelector('#hours')
const min = document.querySelector('#minutes')
const sec =document.querySelector('#seconds')



function updateclock (){
    const currentTime = new Date()

    console.log(currentTime)
      // disp;aying the  time in screen snd adding zero
    hrs .innerHTML =currentTime.getHours()< 10?'0'+currentTime.getHours():currentTime.getHours()
    min.innerHTML = currentTime.getMinutes()< 10?'0'+currentTime.getMinutes():currentTime.getMinutes()
    sec.innerHTML = currentTime.getSeconds()< 10?'0'+currentTime.getSeconds():currentTime.getSeconds()


}


setInterval(updateclock,1000);
updateclock()