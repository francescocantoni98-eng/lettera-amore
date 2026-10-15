// Configura qui il codice segreto
const SECRET_CODE = "25/01"; 

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("unlock-form");
  const input = document.getElementById("secret-code");
  const errorMsg = document.getElementById("lock-error");
  const lockScreen = document.getElementById("lock-screen");
  const secretPage = document.getElementById("secret-page");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userCode = input.value.trim();

    if (userCode.toLowerCase() === SECRET_CODE.toLowerCase()) {
      errorMsg.hidden = true;
      
      lockScreen.style.opacity = "0";
      lockScreen.style.transition = "opacity 0.8s ease";

      setTimeout(() => {
        lockScreen.style.display = "none";
        secretPage.hidden = false;
        secretPage.removeAttribute("aria-hidden");
        secretPage.classList.add("fade-in");
        // Rimuove il centratura verticale del body quando si apre la pagina lunga
        document.body.style.alignItems = "flex-start";
      }, 800);
    } else {
      errorMsg.hidden = false;
      input.value = "";
      input.focus();
    }
  });
});