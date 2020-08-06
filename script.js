let theme = localStorage.getItem('theme');

if (!theme) {
  setTheme('light-light');
} else {
  setTheme(theme);
}

function setTheme(mode) {
  if (mode === 'theme-light') {
    document.getElementById('theme-style').href = 'styles/default.css';
  }
  if (mode === 'theme-dark') {
    document.getElementById('theme-style').href = 'styles/dark.css';
  }
  localStorage.setItem('theme', mode);
}

function toggleTheme() {
  console.log('toggle theme');
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}
