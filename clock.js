function time() {
    const clock = new Date();
    const user = 'Alex';
    let day = clock.getDay();
    let month = clock.toLocaleString('default', { month : 'long' });
    let salute;

    let hour = clock.getHours();
    let minute = clock.getMinutes();

    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;

    if(hour < 12){
        salute = `Good Morning, ${user}. Have a great day.`
    }
    else if (hour < 19) {
        salute = `Good Afternoon, ${user}.`
    }
    else{
        salute = `Good Night, ${user}. Enjoy the darkness.`
    }

    document.getElementById('clock').innerHTML = `${hour}:${minute}`;

    document.getElementById('date').innerHTML = `, ${day} ${month}`;

    document.getElementById('salute').innerHTML = salute;

    let t = setTimeout(time, 1000);
}

