const toggleBtn = document.getElementById('toggleThemeBtn');

// Load saved theme preference from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.add('light');
  }
}

// Save theme preference to localStorage
function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

// Toggle theme and animate
function toggleTheme() {
  const isDark = document.body.classList.contains('dark');

  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');

  const newTheme = isDark ? 'light' : 'dark';
  saveTheme(newTheme);

  // Trigger bounce animation
  toggleBtn.classList.add('bounce');
  toggleBtn.addEventListener('animationend', () => {
    toggleBtn.classList.remove('bounce');
  }, { once: true });
}

// Event listener
toggleBtn.addEventListener('click', toggleTheme);

// Apply saved theme on load
loadTheme();
