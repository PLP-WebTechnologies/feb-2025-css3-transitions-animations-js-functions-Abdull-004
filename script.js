// --- Local Storage: Theme Preference ---
function applyTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.remove("light", "dark");
    document.body.classList.add(savedTheme);
  }
  
  function toggleTheme() {
    const currentTheme = document.body.classList.contains("dark") ? "light" : "dark";
    document.body.classList.remove("light", "dark");
    document.body.classList.add(currentTheme);
    localStorage.setItem("theme", currentTheme);
  }
  
  // --- Animation Trigger ---
  function animateLogo() {
    const logo = document.getElementById('logo');
    // Remove and re-add the class to retrigger animation
    logo.classList.remove('animated');
    // Force reflow to restart the animation
    void logo.offsetWidth;
    logo.classList.add('animated');
  }
  
  // --- Event Listeners ---
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("animateBtn").addEventListener("click", animateLogo);
  
  // Apply saved theme on page load
  applyTheme();
  