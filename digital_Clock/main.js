function GetTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    (hour < 10) ? document.getElementById("hour").innertext = "0" + hour :
        document.getElementById("hour").innerText = hour;
    (minute < 10) ? document.getElementById("minute").innerText = "0" + minute :
        document.getElementById("minute").innerText = minute;
    (second < 10) ? document.getElementById("second").innerText = "0" + second :
        document.getElementById("second").innerText = second;

    document.getElementById("date").innerText = `${day}/${month}/${year}`;


}


setInterval(function () { GetTime(); }, 1000);