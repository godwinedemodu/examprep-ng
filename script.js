const resendBtn = document.getElementById("resendBtn");
const countdownEl = document.getElementById("countdown");
const otpInputs = document.querySelectorAll(".otp-line");


if (resendBtn && countdownEl) {
let timeLeft = 30;

const startTimer = () => {
resendBtn.disabled = true;
resendBtn.textContent = Resend (${timeLeft}s);
countdownEl.textContent = ${timeLeft}s;

const timer = setInterval(() => {
  timeLeft--;
  if (timeLeft > 0) {
    resendBtn.textContent = `Resend (${timeLeft}s)`;
    countdownEl.textContent = ${timeLeft}s;
  } else {
    clearInterval(timer);
    resendBtn.disabled = false;
    resendBtn.textContent = "Resend";
    countdownEl.textContent = "0s";
  }
}, 1000);
};

startTimer();

resendBtn.addEventListener("click", () => {
timeLeft = 30;
startTimer();
});
}


otpInputs.forEach((input, index) => {
input.addEventListener("input", () => {
if (input.value.length === 1 && index < otpInputs.length - 1) {
otpInputs[index + 1].focus();
}
});

input.addEventListener("keydown", (e) => {
if (e.key === "Backspace" && !input.value && index > 0) {
otpInputs[index - 1].focus();
}
});
});