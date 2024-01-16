function updateCountdown() {
    const vacationDate = new Date("2024-04-13T07:40:00");
    const now = new Date();
    const difference = vacationDate - now;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days % 30;
    document.getElementById('hours').innerText = hours % 24;
    document.getElementById('minutes').innerText = minutes % 60;
    document.getElementById('seconds').innerText = seconds % 60;

    setTimeout(updateCountdown, 1000);
}

document.getElementById('sloth').addEventListener('click', function() {
    alert('The sloth is cheering for your upcoming vacation!');
});

updateCountdown();