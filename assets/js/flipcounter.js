document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  const Seconds = Math.max(0, Math.floor((new Date("2025-12-15T08:00:00Z").getTime() ) / 1000));
  // Set up FlipDown
  var flipdown = new FlipDown(Seconds, {
    theme: "dark",
  })

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });
});

const popup = document.querySelector(".popupBox");
const close = document.querySelector(".close");

window.onload = function () {
setTimeout(() => {
  popup.style.display = "block";
}, 3000);
};

close.addEventListener("click", () => {
popup.style.display = "none";
});