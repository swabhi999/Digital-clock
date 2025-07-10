const endDate = new Date(" 1 july,2025 20:00:00").getTime();
const startDate = new Date().getTime();
const now = new Date()
const customDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`


intervalId = setInterval(
    function updatetimer() {
    
        const now = new Date().getTime()
        const coverDistance = now - startDate
        // time-milli sec
        const pendingDistance = endDate - now
        // calculate days,min ,hurs
        //1day=24*60*60*1000ms
        const onedayinmillis = 24 * 60 * 60 * 1000
        const onehourinmillis = 60 * 60 * 1000
        const oneminsnmillis = 60 * 1000
        const onesecondinmillis = 1000
        const days = Math.floor(pendingDistance / (onedayinmillis))
        const hours = Math.floor((pendingDistance % (onedayinmillis)) / (onehourinmillis));
        const mins = Math.floor(pendingDistance % (onehourinmillis) / (oneminsnmillis))
        const sec = Math.floor(pendingDistance % (oneminsnmillis) / onesecondinmillis)
    
        // also correct logic//
    
        /*  const seconds = Math.floor(diff / 1000) % 60;
            const minutes = Math.floor(diff / (1000 * 60)) % 60;
            const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24)); */
    
        //populate in ui
        document.getElementById("days").innerHTML = days;
        document.getElementById("hrs").innerHTML = hours;
        document.getElementById("mins").innerHTML = mins;
        document.getElementById("sec").innerHTML = sec;
    
    
        // calculate width percentage for progrees bar
        const totalDistance = endDate - startDate
        const percentageDistance = (coverDistance / totalDistance) * 100
    
        // set width for progress bar 
        document.getElementById("progress-bar").style.width = percentageDistance + "%"
        if(pendingDistance < 0){
            clearInterval(intervalId);
            document.getElementById("timer-display").innerHTML= "EXPIRED"
            document.getElementById("progress-bar").style.width= "100%"
        }
    
    }, 1000)

