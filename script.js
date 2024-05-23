document.getElementById('hamburger-menu').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    if (navList.style.display === 'none' || navList.style.display === '') {
        navList.style.display = 'block';
    } else {
        navList.style.display = 'none';
    }
});




const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

// Update the countdown every second
setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the remaining time
    const timeDifference = targetDate - currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Updating countdown display
    const countdownElement = document.querySelector('.countdown');
    countdownElement.innerHTML =
        '<div class="box"><h3>' + days + ' days</h3></div>' +
        '<div class="box"><h3>' + hours + ' hours</h3></div>' +
        '<div class="box"><h3>' + minutes + ' min</h3></div>' +
        '<div class="box"><h3>' + seconds + ' sec</h3></div>';
}
const productImages = document.querySelectorAll('.productbox img');


productImages.forEach(image => {
    image.addEventListener('click', function() {
        window.location.href = 'prod-desc.html';
    });
});