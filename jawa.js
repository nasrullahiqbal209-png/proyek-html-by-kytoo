<h1 id="typing"></h1>

<script>
const text = "welcome in my website";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // kecepatan ketik
  }
}

typeEffect();
</script>
  
  <p class="fade-text">Hallo aku ibal orang faling tamvan sedunia, suaminya elaina</p>

<style>
.fade-text {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;
}
.fade-text.show {
  opacity: 1;
  transform: translateY(0);
}
</style>

<script>
window.addEventListener("load", () => {
  document.querySelector(".fade-text").classList.add("show");
});
</script>
  
  <h2 id="rotating-text"></h2>

        <script>
               const words = ["I", "Like", "Elaina"];
               let i = 0;

               function rotateText() {
               document.getElementById("rotating-text").textContent = words[i];
               i = (i + 1) % words.length;
               }
               setInterval(rotateText, 2000);
               rotateText(); // panggil pertama kali
               </script>

